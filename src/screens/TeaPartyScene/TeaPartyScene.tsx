import { GameText } from '@/components';
import { Character, characters, teas } from '@/models';
import { end } from '@/scenes/end';
import { teaSession } from '@/scenes/teaSession';
import { welcome } from '@/scenes/welcome';
import { useTeaStore } from '@/stores';
import { Background } from '@/templates/Background';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IAction } from './TeaPartyScene.types';
import { calculatePoints } from './TeaPartyScene.utils';

export function TeaPartyScene() {
  const navigate = useNavigate();
  const { ready, numberOfPersons, tea, numberOfCups } = useTeaStore();
  const guests: Character[] = [];
  for (let i = 0; i < numberOfPersons; i++) {
    const character = characters[i];
    guests.push(character);
  }
  const [pointsPerSession, setPointsPerSession] = useState<number[]>([]);
  const [tasteDetails, setTasteDetails] = useState<string[]>([]);
  const [infusionNumber, setInfusionNumber] = useState(1);
  const [showGuests, setShowGuests] = useState(false);
  const [scene, setScene] = useState<IAction[]>(
    welcome(numberOfPersons, tea, guests),
  );
  const [action, setAction] = useState(0);

  const resetState = () => {
    guests.forEach((guest) => {
      guest.currentAsset = guest.assets.smile;
    });
    const totalPoints = pointsPerSession.reduce(
      (acc, points) => acc + points,
      0,
    );
    setScene(end(totalPoints));
    setAction(0);
    setInfusionNumber(0);
  }

  const handleSelectChoice = (choice: string) => {
    const newTastes = teas[tea][choice].flatMap((taste) => taste);
    setTasteDetails([...tasteDetails, ...newTastes]);
  };

  const handleNext = () => {
    if (scene[action].action === 'endGame') {
      return navigate('/');
    }

    if (action < scene.length) {
      if (scene[action]?.action === 'showGuests') {
        setShowGuests(true);
      }
      if (scene[action]?.action === 'hideGuests') {
        setShowGuests(false);
      }
      if (scene[action].action === 'calculatePoints') {
        const points = calculatePoints(guests, tasteDetails);
        setPointsPerSession([...pointsPerSession, points]);
      }
      if (
        scene[action].action === 'nextScene' &&
        infusionNumber <= numberOfCups
      ) {
        setScene(teaSession(infusionNumber, tea));
        setInfusionNumber(infusionNumber + 1);
        setAction(0);
        setTasteDetails([]);
        return;
      }
      if (scene[action].action === 'nextScene') {
        resetState();
        return;
      }
      setAction(action + 1);
      return;
    } else {
      navigate('/tea-party');
    }
  };

  const handlePrevious = () => {
    if (action > 0) {
      setAction(action - 1);
      if (scene[action].action === 'showGuests') {
        setShowGuests(false);
      }
      if (scene[action].action === 'hideGuests') {
        setShowGuests(true);
      }
    } else {
      navigate('/tea-party');
    }
  };

  useEffect(() => {
    if (!ready) {
      navigate('/');
    }
  }, [navigate, ready]);

  const text = scene[action].text;
  const payload = scene[action].payload;

  return (
    <Background backgroundUrl="/assets/backgrounds/sitting_room.png">
      {showGuests && (
        <div className="flex flex-row justify-center">
          {guests.map((guest) => (
            <img
              key={guest.name}
              src={guest.currentAsset}
              alt={guest.name}
              className="w-1/5 animate-appear"
            />
          ))}
        </div>
      )}
      <GameText
        next={handleNext}
        previous={handlePrevious}
        handleSelectChoice={handleSelectChoice}
        choices={scene[action].choices}
        disablePrevious={
          scene[action].action === 'hidePrevious' || !!scene[action].choices
        }
        disableNext={!!scene[action].choices}
      >
        {typeof text === 'string'
          ? text
          : text(
            payload === 'tasteDetails'
              ? tasteDetails?.join(', ').replace(/,(?!.*,)/gim, ' and')
              : pointsPerSession[infusionNumber - 2]?.toString(),
          )}
      </GameText>
    </Background>
  );
}

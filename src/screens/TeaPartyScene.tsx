import { GameText } from '@/components';
import { Character, characters } from '@/models';
import { welcome } from '@/scenes/welcome';
import { useTeaStore } from '@/stores';
import { Background } from '@/templates/Background';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function TeaPartyScene() {
  const navigate = useNavigate();
  const { ready, numberOfPersons, tea } = useTeaStore();
  const guests: Character[] = [];
  for (let i = 0; i < numberOfPersons; i++) {
    const character = characters[i];
    guests.push(character);
  }
  const [showGuests, setShowGuests] = useState(false);
  const [scene] = useState(welcome(numberOfPersons, tea, guests));
  const [action, setAction] = useState(0);

  const handleNext = () => {
    if (action < scene.length - 1) {
      setAction(action + 1);
      if (scene[action + 1].action === 'showGuests') {
        setShowGuests(true);
      }
      if (scene[action + 1].action === 'hideGuests') {
        setShowGuests(false);
      }
    } else {
      navigate('/tea-party');
    }
  };

  const handlePrevious = () => {
    if (action > 0) {
      setAction(action - 1);
      if (scene[action - 1].action === 'showGuests') {
        setShowGuests(true);
      }
      if (scene[action - 1].action === 'hideGuests') {
        setShowGuests(false);
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
      <GameText next={handleNext} previous={handlePrevious}>
        {scene[action].text}
      </GameText>
    </Background>
  );
}

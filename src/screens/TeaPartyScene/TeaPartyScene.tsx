import { GameText } from '@/components';
import { teas } from '@/models';
import { welcome } from '@/scenes/welcome';
import { useTeaStore } from '@/stores';
import { Background } from '@/templates/Background';
import { useEffect, useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { teaPartyReducer } from './TeaPartyScene.reducer';
import { populateGuests } from './TeaPartyScene.utils';

export function TeaPartyScene() {
  const navigate = useNavigate();
  const { ready, numberOfPersons, tea, numberOfCups } = useTeaStore();
  const [action, setAction] = useState(0);
  const [state, dispatch] = useReducer(teaPartyReducer, {
    guests: populateGuests(numberOfPersons),
    scene: welcome(numberOfPersons, tea, populateGuests(numberOfPersons)),
    tasteDetails: [],
    pointsPerSession: [],
    infusionNumber: 1,
    showGuests: false,
  });
  const { guests, scene, tasteDetails, pointsPerSession, infusionNumber, showGuests } = state;

  const handleSelectChoice = (choice: string) => {
    const newTastes = teas[tea][choice].flatMap((taste) => taste);
    dispatch({ type: 'tasteChoice', payload: { newTasteDetails: newTastes, numberOfCups, tea } });
  };

  const handleNext = () => {
    if (scene[action].action === 'endGame') {
      return navigate('/');
    }

    if (action < scene.length) {
      const dispatchType = scene[action].action as 'showGuests' | 'hideGuests' | 'calculatePoints' | 'nextScene';
      dispatch({ type: dispatchType, payload: { numberOfCups, tea } });
      if (dispatchType === 'nextScene') {
        setAction(0);
      } else {
        setAction(action + 1);
      }
    }
  };

  const handlePrevious = () => {
    if (action > 0) {
      const dispatchType = scene[action].action as 'showGuests' | 'hideGuests' | 'calculatePoints' | 'nextScene';
      dispatch({ type: dispatchType === 'showGuests' ? 'hideGuests' : dispatchType, payload: { numberOfCups, tea } });
      setAction(action - 1);
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

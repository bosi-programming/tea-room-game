import { GameText } from '@/components';
import { welcome } from '@/scenes/welcome';
import { useTeaStore } from '@/stores';
import { Background } from '@/templates/Background';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function TeaPartyScene() {
  const navigate = useNavigate();
  const { ready, numberOfPersons, tea } = useTeaStore();
  const [scene] = useState(welcome(numberOfPersons, tea));
  const [action] = useState(0);

  useEffect(() => {
    if (!ready) {
      navigate('/');
    }
  }, [navigate, ready]);

  return (
    <Background backgroundUrl="/assets/backgrounds/sitting_room.png">
      <GameText>{scene[action].text}</GameText>
    </Background>
  );
}

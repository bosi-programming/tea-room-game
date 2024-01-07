import { GameText } from '@/components';
import { useTeaStore } from '@/stores';
import { Background } from '@/templates/Background';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function TeaPartyScene() {
  const navigate = useNavigate();
  const { ready } = useTeaStore();

  useEffect(() => {
    if (!ready) {
      navigate('/');
    }
  }, [navigate, ready]);

  return (
    <Background backgroundUrl="/assets/backgrounds/sitting_room.png">
      <GameText>
        You are a tea master. Your friends are coming over for tea. You need to
        prepare tea for them.
      </GameText>
    </Background>
  );
}

import { Heading } from '@/components';
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
      <Heading className="text-5xl underline mb-20">
        Prepare tea for your friends
      </Heading>
      <div className="flex mx-40">
        <button
          onClick={() => navigate('/preparation')}
          className="w-fit mx-auto hover:scale-125"
        >
          <Heading>Start Game</Heading>
        </button>
        <button
          onClick={() => navigate('/credits')}
          className="w-fit mx-auto hover:scale-125"
        >
          <Heading>Credits</Heading>
        </button>
      </div>
    </Background>
  );
}

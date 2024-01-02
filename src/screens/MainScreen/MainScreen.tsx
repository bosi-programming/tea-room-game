import { Heading } from '@/components';
import { NoBackground } from '@/templates';
import { useNavigate } from 'react-router-dom';

export function MainScreen() {
  const navigate = useNavigate();

  return (
    <NoBackground>
      <Heading className="text-5xl underline mb-20">
        Prepare tea for your friends
      </Heading>
      <button
        onClick={() => navigate('/preparation')}
        className="w-fit mx-auto hover:scale-125"
      >
        <Heading>Start Game</Heading>
      </button>
    </NoBackground>
  );
}

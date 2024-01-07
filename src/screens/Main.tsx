import { Heading } from '@/components';
import { NoBackground } from '@/templates';
import { useNavigate } from 'react-router-dom';

export function Main() {
  const navigate = useNavigate();

  return (
    <NoBackground>
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
    </NoBackground>
  );
}

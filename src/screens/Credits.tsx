import { Heading, Paragraph } from '@/components';
import { NoBackground } from '@/templates';
import { useNavigate } from 'react-router-dom';

export function Credits() {
  const navigate = useNavigate();

  return (
    <NoBackground>
      <Heading className="text-5xl underline mb-20">Credits</Heading>
      <Paragraph>
        Character art by:{' '}
        <a className="underline" href="https://sutemo.itch.io/">
          Sutemo
        </a>{' '}
        also found on deviantart as{' '}
        <a className="underline" href="https://www.deviantart.com/stereo-mono">
          stereo-mono
        </a>
      </Paragraph>
      <Paragraph>
        Background art by:{' '}
        <a className="underline" href="https://noranekogames.itch.io/">
          Noraneko Games
        </a>
      </Paragraph>
      <div className="mt-20">
        <button
          onClick={() => navigate('/')}
          className="w-fit mx-auto hover:scale-125"
        >
          <Heading>Go back</Heading>
        </button>
      </div>
    </NoBackground>
  );
}

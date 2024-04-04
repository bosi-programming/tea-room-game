import { Heading, Paragraph } from '@/components';
import { NoBackground } from '@/templates';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export function Credits() {
  const { t } = useTranslation(['credits']);
  const navigate = useNavigate();

  return (
    <NoBackground>
      <Heading className="text-5xl underline mb-20">{t('title')}</Heading>
      <Paragraph>
        {t('characterArt')}
        <a className="underline" href="https://sutemo.itch.io/">
          Sutemo
        </a>{' '}
        {t('deviantArt')}
        <a className="underline" href="https://www.deviantart.com/stereo-mono">
          stereo-mono
        </a>
      </Paragraph>
      <Paragraph>
        {t('backgroundArt')}
        <a className="underline" href="https://noranekogames.itch.io/">
          Noraneko Games
        </a>
      </Paragraph>
      <div className="mt-20">
        <button
          onClick={() => navigate('/')}
          className="w-fit mx-auto hover:scale-125"
        >
          <Heading>{t('back')}</Heading>
        </button>
      </div>
    </NoBackground>
  );
}

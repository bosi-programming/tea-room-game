import { Heading } from '@/components';
import { NoBackground } from '@/templates';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export function Main() {
  const { t } = useTranslation(['main']);
  const navigate = useNavigate();

  return (
    <NoBackground>
      <Heading className="text-5xl underline mb-20">
        {t('title')}
      </Heading>
      <div className="flex mx-40">
        <button
          onClick={() => navigate('/preparation')}
          className="w-fit mx-auto hover:scale-125"
        >
          <Heading>{t('start')}</Heading>
        </button>
        <button
          onClick={() => navigate('/credits')}
          className="w-fit mx-auto hover:scale-125"
        >
          <Heading>{t('credits')}</Heading>
        </button>
      </div>
    </NoBackground>
  );
}

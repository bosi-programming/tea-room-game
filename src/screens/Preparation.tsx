import { Heading, Paragraph, Selector } from '@/components';
import { useTeaStore } from '@/stores';
import { NoBackground } from '@/templates';
import { useNavigate } from 'react-router-dom';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';

const numberOfPeopleOptions = [
  { id: 1, label: '1' },
  { id: 2, label: '2' },
  { id: 3, label: '3' },
  { id: 4, label: '4' },
  { id: 5, label: '5' },
];

const teaOptions = [
  { id: 'green', label: i18n.t('preparation:greenTea') },
  { id: 'black', label: i18n.t('preparation:blackTea') },
  { id: 'ripe', label: i18n.t('preparation:ripePuerh') },
  { id: 'raw', label: i18n.t('preparation:rawPuerh') },
];

const preparationOptions = [
  { id: 'regular', label: 'Regular' },
  { id: 'gongfu', label: 'Gongfu' },
];

export function Preparation() {
  const { t } = useTranslation(['preparation']);
  const navigate = useNavigate();
  const { numberOfPersons, tea, preparation, setTeaPreparation } =
    useTeaStore();

  return (
    <NoBackground className="justify-between">
      <Heading className="grow-0 text-5xl underline mb-10 xl:mb-20">
        {t('title')}
      </Heading>
      <div className="grow flex flex-col justify-around">
        <div>
          <Paragraph>
            {t('explanation1')}
          </Paragraph>
          <Paragraph>
            {t('explanation2')}
          </Paragraph>
          <div className="grid grid-cols-8 gap-2 mt-10 justify-center align-middle">
            <Paragraph className="col-start-3 col-end-6">
              {t('howManyFriends')}
            </Paragraph>
            <Selector
              value={numberOfPersons.toString()}
              options={numberOfPeopleOptions}
              onChange={(e) =>
                setTeaPreparation({ numberOfPersons: Number(e.target.value) })
              }
              className="col-start-6 w-32 mb-0"
            />
            <Paragraph className="col-start-3 col-end-6">
              {t('whatTea')}
            </Paragraph>
            <Selector
              value={tea}
              onChange={(e) => setTeaPreparation({ tea: e.target.value })}
              options={teaOptions}
              className="col-start-6 w-32 mb-0"
            />
            <Paragraph className="col-start-3 col-end-6">
              {t('howToPrepare')}
            </Paragraph>
            <Selector
              value={preparation}
              onChange={(e) =>
                setTeaPreparation({ preparation: e.target.value })
              }
              options={preparationOptions}
              className="col-start-6 w-32 mb-0"
            />
          </div>
        </div>
        <button
          onClick={() => {
            setTeaPreparation({ ready: true });
            navigate('/tea-party');
          }}
          className="w-fit mx-auto hover:scale-125"
        >
          <Heading>{t('ready')}</Heading>
        </button>
      </div>
    </NoBackground>
  );
}

import { Heading, Paragraph, Selector } from '@/components';
import { useTeaStore } from '@/stores';
import { NoBackground } from '@/templates';
import { useNavigate } from 'react-router-dom';

const numberOfPeopleOptions = [
  { id: 1, label: '1' },
  { id: 2, label: '2' },
  { id: 3, label: '3' },
  { id: 4, label: '4' },
  { id: 5, label: '5' },
];

const teaOptions = [
  { id: 'green', label: 'Green' },
  { id: 'black', label: 'Black' },
  { id: 'ripe', label: 'Ripe puerh' },
  { id: 'raw', label: 'Raw puerh' },
];

const preparationOptions = [
  { id: 'gongfu', label: 'Gongfu' },
  { id: 'regular', label: 'Regular' },
];

export function Preparation() {
  const navigate = useNavigate();
  const { numberOfPersons, tea, preparation, setTeaPreparation } =
    useTeaStore();

  return (
    <NoBackground className="justify-between">
      <Heading className="grow-0 text-5xl underline mb-10 xl:mb-20">
        Preparations
      </Heading>
      <div className="grow flex flex-col justify-around">
        <div>
          <Paragraph>
            You are a tea master. Your friends are coming over for tea. You need
            to prepare tea for them.
          </Paragraph>
          <Paragraph>
            You have a tea table with a tea pot, a tea pitcher, and some tea
            cups.
          </Paragraph>
          <div className="grid grid-cols-8 gap-2 mt-10 justify-center align-middle">
            <Paragraph className="col-start-3 col-end-6">
              How many friends are coming over for tea?
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
              What tea will you prepare for them?
            </Paragraph>
            <Selector
              value={tea}
              onChange={(e) => setTeaPreparation({ tea: e.target.value })}
              options={teaOptions}
              className="col-start-6 w-32 mb-0"
            />
            <Paragraph className="col-start-3 col-end-6">
              In what way will you prepare the tea?
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
          <Heading>I&apos;m ready</Heading>
        </button>
      </div>
    </NoBackground>
  );
}

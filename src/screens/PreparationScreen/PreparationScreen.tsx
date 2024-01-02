import { Heading, Paragraph, Selector } from '@/components';
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

export function PreparationScreen() {
  const navigate = useNavigate();

  return (
    <NoBackground className="justify-between">
      <Heading className="grow-0 text-5xl underline mb-20">
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
              options={numberOfPeopleOptions}
              className="col-start-6 w-32 mb-0"
            />
            <Paragraph className="col-start-3 col-end-6">
              What tea will you prepare for them?
            </Paragraph>
            <Selector options={teaOptions} className="col-start-6 w-32 mb-0" />
            <Paragraph className="col-start-3 col-end-6">
              In what way will you prepare the tea?
            </Paragraph>
            <Selector
              options={preparationOptions}
              className="col-start-6 w-32 mb-0"
            />
          </div>
        </div>
        <button
          onClick={() => navigate('/preparation')}
          className="w-fit mx-auto hover:scale-125"
        >
          <Heading>I&apos;m ready</Heading>
        </button>
      </div>
    </NoBackground>
  );
}

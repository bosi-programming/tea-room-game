import { Heading, Input } from '@/components';

export function MainScreen() {
  return (
    <div className="flex justify-center flex-col bg-stone-800 h-screen">
      <div className="flex flex-col justify-between p-10 text-center bg-green border-2 border-peach w-full aspect-video">
        <Heading className="text-5xl underline">
          Prepare tea for your friends
        </Heading>
        <Input
          labelChildren="How many friends are your receiving"
          className="w-3/12 my-4 mx-auto"
        />
        <button className="w-fit mx-auto">
          <Heading>Start Game</Heading>
        </button>
      </div>
    </div>
  );
}

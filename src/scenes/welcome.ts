import { Character } from '@/models';

export const welcome = (
  numberOfPerson: number,
  tea: string,
  guests: Character[],
) => [
  {
    text: `You're in your tea room, waiting for your ${
      numberOfPerson > 1 ? `${numberOfPerson} guests` : 'guest'
    } to arrive.`,
  },
  {
    text: `You have prepared the tea set and the tea leaves. You are preparing ${tea} tea today`,
  },
  {
    text: `You hear a knock on the door. You open it and see ${
      guests.length > 1
        ? guests.reduce(
            (acc, guest, currentIndex) =>
              `${acc}${
                currentIndex === 0 || currentIndex === guests.length - 1
                  ? ''
                  : ','
              }${currentIndex === guests.length - 1 ? ' and ' : ' '}${
                guest.name
              }`,
            '',
          )
        : `${guests[0].name}`
    }`,
  },
  {
    text: 'You invite them in and sit them down.',
  },
];

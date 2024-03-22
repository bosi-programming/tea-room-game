import { Character, characters } from '@/models';

export const calculatePoints = (
  guests: Character[],
  tasteDetails: string[],
) => {
  return guests.reduce(
    (acc, guest) => acc + guest.points(tasteDetails),
    0,
  );
}

export const populateGuests = (numberOfGuests: number) => {
  const guests = [];
  for (let i = 0; i < numberOfGuests; i++) {
    guests.push(characters[i]);
  }
  return guests;
}

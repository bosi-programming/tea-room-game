import { Character } from '@/models';

export const calculatePoints = (
  guests: Character[],
  tasteDetails: string[],
) => {
  return guests.reduce(
    (acc, guest) => acc + guest.points(tasteDetails),
    0,
  );
}

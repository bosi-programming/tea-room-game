import { StateCreator, create } from 'zustand';

export interface TeaPreparation {
  numberOfPersons: number;
  tea: string;
  preparation: string;
  numberOfCups: number;
  setTeaPreparation: (teaPreparation: Partial<TeaPreparation>) => void;
}

export const teaStoreCreator: StateCreator<TeaPreparation> = (set) => ({
  numberOfPersons: 1,
  tea: 'black',
  preparation: 'gongfu',
  numberOfCups: 7,
  setTeaPreparation: (teaPreparation) =>
    set({
      ...teaPreparation,
      numberOfCups:
        teaPreparation.preparation && teaPreparation.preparation === 'gongfu'
          ? 7
          : 3,
    }),
});

export const useTeaStore = create<TeaPreparation>(teaStoreCreator);

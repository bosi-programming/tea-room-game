import { StateCreator, create } from 'zustand';

export interface TeaPreparation {
  numberOfPersons: number;
  tea: string;
  preparation: string;
  numberOfCups: number;
  ready: boolean;
  setTeaPreparation: (teaPreparation: Partial<TeaPreparation>) => void;
}

export const teaStoreCreator: StateCreator<TeaPreparation> = (set) => ({
  numberOfPersons: 1,
  tea: 'black',
  preparation: 'regular',
  numberOfCups: 3,
  ready: false,
  setTeaPreparation: (teaPreparation) => {
    let newNumberOfCups: number;
    if (teaPreparation.preparation === 'gongfu') {
      newNumberOfCups = 7;
    }
    if (teaPreparation.preparation === 'regular') {
      newNumberOfCups = 3;
    }
    set((state) => ({
      ...teaPreparation,
      numberOfCups: newNumberOfCups ? newNumberOfCups : state.numberOfCups,
    }));
  },
});

export const useTeaStore = create<TeaPreparation>(teaStoreCreator);

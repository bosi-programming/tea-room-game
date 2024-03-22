import { Character } from '@/models';
import { calculatePoints } from './TeaPartyScene.utils';
import { IAction } from './TeaPartyScene.types';
import { end } from '@/scenes/end';
import { teaSession } from '@/scenes/teaSession';

interface ITeaPartyState {
  guests: Character[];
  scene: IAction[];
  tasteDetails: string[];
  pointsPerSession: number[];
  infusionNumber: number;
  showGuests: boolean;
}

type ActionType = 'showGuests' | 'hideGuests' | 'calculatePoints' | 'nextScene' | 'tasteChoice';

interface IReducerAction {
  type: ActionType;
  payload: {
    numberOfCups: number;
    tea: string;
    newTasteDetails?: string[];
  }
}

export function teaPartyReducer(state: ITeaPartyState, action: IReducerAction): ITeaPartyState {
  switch (action.type) {
    case 'showGuests':
      return {
        ...state,
        showGuests: true,
      };
    case 'hideGuests':
      return {
        ...state,
        showGuests: false,
      };
    case 'calculatePoints':
      return {
        ...state,
        pointsPerSession: [...state.pointsPerSession, calculatePoints(state.guests, state.tasteDetails)],
      };
    case 'tasteChoice':
      if (!action.payload.newTasteDetails) {
        return state;
      }
      return {
        ...state,
        tasteDetails: [...state.tasteDetails, ...action.payload.newTasteDetails],
      };
    case 'nextScene':
      if (state.infusionNumber <= action.payload.numberOfCups) {
        return {
          ...state,
          scene: teaSession(state.infusionNumber, action.payload.tea),
          infusionNumber: state.infusionNumber + 1,
          tasteDetails: [],
        };
      } else {
        state.guests.forEach((guest) => {
          guest.currentAsset = guest.assets.smile;
        });
        return {
          ...state,
          scene: end(state.pointsPerSession.reduce((acc, points) => acc + points, 0)),
          infusionNumber: 0,
          pointsPerSession: [],
          showGuests: false,
          guests: [],
        };
      }
    default:
      return state;
  }
}

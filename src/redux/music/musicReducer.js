import { GET_MUSIC } from './musicTypes';

const initialState = {
  numOfMusic: 11,
};

export const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MUSIC:
      return {
        ...state,
        numOfMusic: state.numOfMusic + 1,
      };
    default:
      return state;
  }
};

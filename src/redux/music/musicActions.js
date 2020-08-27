import { GET_MUSIC } from './musicTypes';

export const getMusic = (number) => {
  return {
    type: GET_MUSIC,
    payload: number,
  };
};

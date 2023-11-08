import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Winner } from '../../types/game';

interface InitialState {
  winners: Winner[];
}

const initialState: InitialState = {
  winners: [],
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    addWinner: (state, action: PayloadAction<Winner>) => {
      return {
        ...state,
        winners: [...state.winners, action.payload],
      };
    },
  },
});

export const { addWinner } = gameSlice.actions;
export default gameSlice.reducer;

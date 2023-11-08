import { configureStore } from '@reduxjs/toolkit';
import gameSliceReducer from './slices/game';

const store = configureStore({
  reducer: {
    game: gameSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;


import { configureStore } from '@reduxjs/toolkit';
import spaceXReducer from './spaceXSlice';

const store = configureStore({
  reducer: {
    spaceX: spaceXReducer,
  },
});

export default store;


import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from './CounterReducer';

const Store = configureStore({
  reducer: {
    CounterReducer,
  },
});

export default Store;

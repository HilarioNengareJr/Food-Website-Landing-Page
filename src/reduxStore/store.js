import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import basketReducer from './basketSlice';

const rootReducer = combineReducers({
  basket: basketReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

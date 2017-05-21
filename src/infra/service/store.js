import { createStore } from 'redux';
import reducer from './reducer';

const factory = (preloadedState) => createStore(
  reducer,
  preloadedState,
);

const store = factory();

export default store;

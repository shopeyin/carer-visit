import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/rootReducer';
import { middleware } from './redux/store';

export const testStore = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
  return createStoreWithMiddleware(rootReducer, initialState);
};

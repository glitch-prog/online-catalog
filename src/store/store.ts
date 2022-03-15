import { combineReducers, configureStore, createStore } from '@reduxjs/toolkit';
import { dataReducer } from './reducers/dataReducer';
import { isAuthorizedReducer } from './reducers/isAuthorizedReducer';

const rootReducer = combineReducers({
  auth: isAuthorizedReducer,
  data: dataReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

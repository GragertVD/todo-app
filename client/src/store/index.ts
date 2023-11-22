import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/index';

import { persistStore } from 'redux-persist';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import SetTransform from './reducers/transforms';

import { createStateSyncMiddleware, initMessageListener } from 'redux-state-sync';

const config = {
  // TOGGLE_TODO will not be triggered in other tabs
  blacklist: ['TOGGLE_TODO'],
};
const middlewares = [createStateSyncMiddleware(config)];


const persistConfig = {
  key: 'root',
  storage,
  transforms: [SetTransform],
  whitelist: ['todo', 'main']
};

const persistedRootReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedRootReducer, {}, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

initMessageListener(store);

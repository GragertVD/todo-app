import { createStore } from 'redux';
import { rootReducer } from './reducers/index';

import { persistStore } from 'redux-persist';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import SetTransform from './reducers/transforms';


const persistConfig = {
  key: 'root',
  storage,
  transforms: [SetTransform],
  whitelist: ['todo', 'main']
};

const persistedRootReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedRootReducer);
export const persistor = persistStore(store);

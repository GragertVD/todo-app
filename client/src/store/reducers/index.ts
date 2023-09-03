import { combineReducers } from 'redux';
import { todoReducer } from './todoReducer';
import { mainReducer } from './mainReducer';

export const rootReducer = combineReducers({
  todo: todoReducer,
  main: mainReducer,
});


export type RootState = ReturnType<typeof rootReducer>

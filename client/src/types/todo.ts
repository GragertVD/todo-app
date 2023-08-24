
export enum TodoListActionTypes {
  ADD_TODO_ITEM = 'ADD_TODO_ITEM',
  REMOVE_TODO_ITEM = 'REMOVE_TODO_ITEM',
  TOGGLE_COMPLETED_TODO_ITEM = 'TOGGLE_COMPLETED_TODO_ITEM',
  CLEAR_COMPLETED = 'CLEAR_COMPLETED',
  SET_FILTER = 'SET_FILTER',
}

interface AddTodoItemAction {
  type: TodoListActionTypes.ADD_TODO_ITEM;
  payload: string;
}

interface RemoveTodoItemAction {
  type: TodoListActionTypes.REMOVE_TODO_ITEM;
  payload: number;
}

interface ToggleCompletedTodoItemAction {
  type: TodoListActionTypes.TOGGLE_COMPLETED_TODO_ITEM;
  payload: number;
}

interface ClearCompletedAction {
  type: TodoListActionTypes.CLEAR_COMPLETED;
}

interface setFilterTodoItemAction {
  type: TodoListActionTypes.SET_FILTER;
  payload: typeFilter;
}

export type TodoListAction = AddTodoItemAction | RemoveTodoItemAction | ToggleCompletedTodoItemAction | ClearCompletedAction | setFilterTodoItemAction;

export interface ITodoItem {
  id: number;
  text: string;
  completed: boolean;
}

export type typeFilter = 'completed' | 'notCompleted' | 'all';

export interface TodoListState {
  items: ITodoItem[];
  typeFilter: typeFilter;
}

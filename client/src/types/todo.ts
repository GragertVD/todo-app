
export enum TodoListActionTypes {
  ADD_TODO_ITEM = 'ADD_TODO_ITEM',
  REMOVE_TODO_ITEM = 'REMOVE_TODO_ITEM',
  TOGGLE_COMPLETED_TODO_ITEM = 'TOGGLE_COMPLETED_TODO_ITEM',
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

export type TodoListAction = AddTodoItemAction | RemoveTodoItemAction | ToggleCompletedTodoItemAction;

export interface ITodoItem {
  id: number;
  text: string;
  completed: boolean;
}

export type TodoListState = ITodoItem[];

export enum TodoListActionTypes {
  ADD_TODO_ITEM = 'ADD_TODO_ITEM',
  REMOVE_TODO_ITEM = 'REMOVE_TODO_ITEM',
  TOGGLE_CHECKED_TODO_ITEM = 'TOGGLE_CHECKED_TODO_ITEM',
}

interface AddTodoItemAction {
  type: TodoListActionTypes.ADD_TODO_ITEM;
  payload: string;
}

interface RemoveTodoItemAction {
  type: TodoListActionTypes.REMOVE_TODO_ITEM;
  payload: number;
}

interface ToggleCheckedTodoItemAction {
  type: TodoListActionTypes.TOGGLE_CHECKED_TODO_ITEM;
  payload: number;
}

export type TodoListAction = AddTodoItemAction | RemoveTodoItemAction | ToggleCheckedTodoItemAction;

export interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

export type TodoListState = TodoItem[];
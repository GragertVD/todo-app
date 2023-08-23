import { ITodoItem, TodoListAction, TodoListActionTypes, TodoListState } from "../../types/todo";

const initState: TodoListState = [];

export const todoReducer = (state: TodoListState = initState, action: TodoListAction): TodoListState => {

  switch (action.type) {
    case TodoListActionTypes.ADD_TODO_ITEM:
      const newTodoItem: ITodoItem = {
        id: state.length,
        text: action.payload,
        completed: false,
      }
      return [...state, newTodoItem];

    case TodoListActionTypes.REMOVE_TODO_ITEM:
      return state.filter((item) => item.id !== action.payload);

    case TodoListActionTypes.TOGGLE_COMPLETED_TODO_ITEM:
      return state.map((item) => item.id !== action.payload? item: {...item, completed: !item.completed});

    default:
      return state;
  }
}

export const addTodoItemAction = (payload: string) => ({ type: TodoListActionTypes.ADD_TODO_ITEM, payload });
export const removeTodoItemAction = (payload: number) => ({ type: TodoListActionTypes.REMOVE_TODO_ITEM, payload });
export const toggleCompletedTodoItemAction = (payload: number) => ({ type: TodoListActionTypes.TOGGLE_COMPLETED_TODO_ITEM, payload });

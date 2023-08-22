import { TodoItem, TodoListAction, TodoListActionTypes, TodoListState } from "../../types/todo";

const initState: TodoListState = [];

export const todoReducer = (state: TodoListState = initState, action: TodoListAction): TodoListState => {

  switch (action.type) {
    case TodoListActionTypes.ADD_TODO_ITEM:
      const newTodoItem: TodoItem = {
        id: state.length,
        text: action.payload,
        completed: false,
      }
      return [...state, newTodoItem];

    case TodoListActionTypes.REMOVE_TODO_ITEM:
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
}

export const addTodoItemAction = (payload: string) => ({ type: TodoListActionTypes.ADD_TODO_ITEM , payload})

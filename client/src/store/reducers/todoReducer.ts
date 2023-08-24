import { ITodoItem, TodoListAction, TodoListActionTypes, TodoListState, typeFilter } from "../../types/todo";

const initState: TodoListState = {
  items: [],
  typeFilter: 'all',
};

export const todoReducer = (state: TodoListState = initState, action: TodoListAction): TodoListState => {

  switch (action.type) {
    case TodoListActionTypes.ADD_TODO_ITEM:
      const newTodoItem: ITodoItem = {
        id: state.items.length,
        text: action.payload,
        completed: false,
      }
      return {
        items: [...state.items, newTodoItem],
        typeFilter: state.typeFilter,
      }

    case TodoListActionTypes.REMOVE_TODO_ITEM:
      return {
        items: state.items.filter((item) => item.id !== action.payload),
        typeFilter: state.typeFilter,
      }

    case TodoListActionTypes.TOGGLE_COMPLETED_TODO_ITEM:
      return {
        items: state.items.map((item) => item.id !== action.payload ? item : { ...item, completed: !item.completed }),
        typeFilter: state.typeFilter,
      }

    case TodoListActionTypes.CLEAR_COMPLETED:
      return {
        items: state.items.filter((item) => !item.completed),
        typeFilter: state.typeFilter,
      }

    case TodoListActionTypes.SET_FILTER:
      return {
        items: state.items,
        typeFilter: action.payload,
      }

    default:
      return state;
  }
}

export const addTodoItemAction = (payload: string) => ({ type: TodoListActionTypes.ADD_TODO_ITEM, payload });
export const removeTodoItemAction = (payload: number) => ({ type: TodoListActionTypes.REMOVE_TODO_ITEM, payload });
export const toggleCompletedTodoItemAction = (payload: number) => ({ type: TodoListActionTypes.TOGGLE_COMPLETED_TODO_ITEM, payload });
export const clearCompletedAction = () => ({ type: TodoListActionTypes.CLEAR_COMPLETED });
export const setFilterAction = (payload: typeFilter) => ({ type: TodoListActionTypes.SET_FILTER, payload });

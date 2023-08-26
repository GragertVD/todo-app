import { ITodoItem, TodoListAction, TodoListActionTypes, TodoListState, typeFilter } from "../../types/todo";

const initState: TodoListState = {
  items: [],
  typeFilter: 'all',
  itemsLeft: 0,
};

export const todoReducer = (state: TodoListState = initState, action: TodoListAction): TodoListState => {
  let completedDeletedItem;
  const resultItems = [];

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
        itemsLeft: state.itemsLeft + 1,
      }

    case TodoListActionTypes.REMOVE_TODO_ITEM:

      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].id === action.payload) {
          completedDeletedItem = state.items[i].completed;
        } else if (state.items[i].id < action.payload) {
          resultItems.push(state.items[i]);
        } else {
          resultItems.push({ id: state.items[i].id - 1, text: state.items[i].text, completed: state.items[i].completed });
        }
      }

      return {
        items: resultItems,
        typeFilter: state.typeFilter,
        itemsLeft: completedDeletedItem ? state.itemsLeft : state.itemsLeft - 1,
      }

    case TodoListActionTypes.TOGGLE_COMPLETED_TODO_ITEM:
      return {
        items: state.items.map((item) => item.id !== action.payload ? item : { ...item, completed: !item.completed }),
        typeFilter: state.typeFilter,
        itemsLeft: state.items[action.payload].completed ? state.itemsLeft + 1 : state.itemsLeft - 1,
      }

    case TodoListActionTypes.CLEAR_COMPLETED:
      let missItem = 0;
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].completed){
          missItem++;
        }else{
          resultItems.push({ id: state.items[i].id - missItem, text: state.items[i].text, completed: state.items[i].completed });
        }
      }

      return {
        items: resultItems,
        typeFilter: state.typeFilter,
        itemsLeft: state.itemsLeft,
      }

    case TodoListActionTypes.SET_FILTER:
      return {
        items: state.items,
        typeFilter: action.payload,
        itemsLeft: state.itemsLeft,
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

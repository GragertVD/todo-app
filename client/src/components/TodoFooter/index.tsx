import { TodoFooterContainer } from "./style";
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from "react-redux";
import { clearCompletedAction, setFilterAction } from "../../store/reducers/todoReducer";
import { typeFilter } from "../../types/todo";

export const TodoFooter: React.FC = () => {

  const state = useTypedSelector(state => state.todo);
  const dispatch = useDispatch();

  const getSelectFilterNumber = (typeFilter: typeFilter) => {
    if (typeFilter === 'all') return 1
    if (typeFilter === 'notCompleted') return 2
    if (typeFilter === 'completed') return 3
    return 0;
  }

  return (
    <TodoFooterContainer selectFilterNumber={getSelectFilterNumber(state.typeFilter)}>
      <p>{state.itemsLeft} items left</p>
      <div>
        <button onClick={() => dispatch(setFilterAction('all'))}>All</button>
        <button onClick={() => dispatch(setFilterAction('notCompleted'))}>Active</button>
        <button onClick={() => dispatch(setFilterAction('completed'))}>Completed</button>
      </div>
      <button onClick={() => dispatch(clearCompletedAction())}>Clear Completed</button>
    </TodoFooterContainer>
  );
}

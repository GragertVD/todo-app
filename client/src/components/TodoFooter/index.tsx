import { TodoFooterContainer } from "./style";
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from "react-redux";
import { clearCompletedAction, setFilterAction } from "../../store/reducers/todoReducer";

export const TodoFooter: React.FC = () => {

  const state = useTypedSelector(state => state.todo);
  const dispatch = useDispatch();

  return (
    <TodoFooterContainer>
      <p>5 items left</p>
      <div>
        <button onClick={() => dispatch(setFilterAction('all'))}>All</button>
        <button onClick={() => dispatch(setFilterAction('notCompleted'))}>Active</button>
        <button onClick={() => dispatch(setFilterAction('completed'))}>Completed</button>
      </div>
      <button onClick={() => dispatch(clearCompletedAction())}>Clear Completed</button>
    </TodoFooterContainer>
  );
}

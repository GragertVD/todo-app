import { TodoFooterContainer, TodoListContainer } from "./style";
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { TodoItem } from "../TodoItem";
import { TodoFooter } from "../TodoFooter";

export const TodoList: React.FC = () => {

  const state = useTypedSelector(state => state.todo);
  console.log(state.typeFilter);
  
  return (
    <TodoListContainer>
      {
        state.typeFilter === 'all' && state.items.map(el => <TodoItem {...el} />)
        ||
        state.typeFilter === 'completed' && state.items.map(el => el.completed ? <TodoItem {...el} /> : <></>)
        ||
        state.typeFilter === 'notCompleted' && state.items.map(el => !el.completed ? <TodoItem {...el} /> : <></>)
      }
    </TodoListContainer>
  );
}

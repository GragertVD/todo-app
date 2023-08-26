import { TodoFooterContainer, TodoListContainer } from "./style";
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { TodoItem } from "../TodoItem";
import { TodoFooter } from "../TodoFooter";

export const TodoList: React.FC = () => {

  const state = useTypedSelector(state => state.todo);
  
  return (
    <TodoListContainer>
      {
        state.typeFilter === 'all' && state.items.map(el => <TodoItem key={el.id} {...el} />)
        ||
        state.typeFilter === 'completed' && state.items.map(el => el.completed ? <TodoItem key={el.id} {...el} /> : <></>)
        ||
        state.typeFilter === 'notCompleted' && state.items.map(el => !el.completed ? <TodoItem key={el.id} {...el} /> : <></>)
      }
    </TodoListContainer>
  );
}

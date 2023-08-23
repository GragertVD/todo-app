import { TodoListContainer } from "./style";
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { TodoItem } from "../TodoItem";

export const TodoList: React.FC = () => {

  const state = useTypedSelector(state => state.todo);
  console.log(state);
  
  return (
    <TodoListContainer>
      {
        state.map(el => <TodoItem {...el}/>)
      }
    </TodoListContainer>
  );
}

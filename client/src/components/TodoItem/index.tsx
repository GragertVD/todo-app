import { removeTodoItemAction, toggleCompletedTodoItemAction } from "../../store/reducers/todoReducer";
import { ITodoItem } from "../../types/todo";
import { TodoItemContainer, TextNotCompleted, Button, CircleNotCompleted, CircleCompleted, TextCompleted } from "./style";
import { useDispatch } from 'react-redux';


export const TodoItem: React.FC<ITodoItem> = ({ id, text, completed }) => {

  const dispatch = useDispatch();

  return (
    <TodoItemContainer onClick={() => dispatch(toggleCompletedTodoItemAction(id))}>
      {
        completed
          ?
          <>
            <CircleCompleted />
            <TextCompleted>{text}</TextCompleted>
          </>
          :
          <>
            <CircleNotCompleted />
            <TextNotCompleted>{text}</TextNotCompleted>
          </>

      }
      <Button onClick={() => dispatch(removeTodoItemAction(id))} />
    </TodoItemContainer>
  );
}

import { useState } from "react";
import { Circle, CreateItemContainer, Input } from "./style";
import { useDispatch } from "react-redux";
import { addTodoItemAction } from "../../store/reducers/todoReducer";

export const CreateItem: React.FC = () => {

  const [text, setText] = useState('');
  const dispatch = useDispatch();

  return (
    <CreateItemContainer
      onSubmit={
        (e) => {
          dispatch(addTodoItemAction(text));
          setText('');
          e.preventDefault();
        }
      }
    >
      <Circle />
      <Input
        placeholder="Create a new todo…"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </CreateItemContainer>
  );
}

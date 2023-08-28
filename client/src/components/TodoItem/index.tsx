import { useEffect, useState } from "react";
import { editTextItemAction, removeTodoItemAction, toggleCompletedTodoItemAction } from "../../store/reducers/todoReducer";
import { ITodoItem } from "../../types/todo";
import { TodoItemContainer, CircleItem, TextItem, ButtonDeleted, EditInputTextItem, ButtonEdit } from "./style";
import { useDispatch } from 'react-redux';
import { GrEdit } from "react-icons/gr";



export const TodoItem: React.FC<ITodoItem> = ({ id, text, completed, ...onDragEvent }) => {

  const dispatch = useDispatch();

  const [stateEdit, setStateEdit] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>(text);

  useEffect(() => {
    setEditText(text);
  }, [text]);


  return (
    <TodoItemContainer
      onClick={() => !stateEdit && dispatch(toggleCompletedTodoItemAction(id))}
    >
      <CircleItem completed={completed} />
      {
        stateEdit
          ?
          <form
            onSubmit={
              (e) => {
                dispatch(editTextItemAction({ id: id, newText: editText }));
                setStateEdit(false);
                e.preventDefault();
              }
            }
          >
            <EditInputTextItem
              value={editText}
              onChange={e => setEditText(e.target.value)}
            />
          </form>
          :
          <TextItem completed={completed}>{text}</TextItem>
      }
      <ButtonEdit
        stateEdit={stateEdit}
        onClick={
          (e) => {
            setStateEdit(!stateEdit);
            e.currentTarget.blur();
            e.stopPropagation();
          }
        }
      >
        <GrEdit />
      </ButtonEdit>
      <ButtonDeleted
        onClick={
          (e) => {
            setStateEdit(false);
            dispatch(removeTodoItemAction(id));
            setEditText(text);
            e.currentTarget.blur();
            e.stopPropagation();
          }
        }
      />
    </TodoItemContainer>
  );
}

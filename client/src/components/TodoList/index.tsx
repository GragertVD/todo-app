import { TodoListContainer } from "./style";
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { TodoItem } from "../TodoItem";
import { useDispatch } from "react-redux";
import { dragDropPastAction } from "../../store/reducers/todoReducer";

export const TodoList: React.FC = () => {

  const state = useTypedSelector(state => state.todo);
  const dispatch = useDispatch();

  let prevItemId = 0;
  let directPast: 'up' | 'down' = 'up';
  let mouveItemId = 0;

  return (
    <TodoListContainer>
      {
        state.typeFilter === 'all' && state.items.map(el =>
          <div
            style={{ width: '100%', height: '100%' }}
            draggable={true}
            onDragStart={(e) => mouveItemId = el.id}
            onDragLeave={
              (e) => {
                if (el.id - prevItemId > 0) {
                  directPast = 'up';
                  prevItemId = el.id;
                  console.log(mouveItemId);
                  
                } else if (el.id - prevItemId < 0) {
                  directPast = 'down'
                  prevItemId = el.id;
                }
              }
            }
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => dispatch(dragDropPastAction({ fromId: mouveItemId, toId: el.id, directPast }))}
          >
            <TodoItem key={el.id} {...el} />
          </div>
        )
        ||
        state.typeFilter === 'completed' && state.items.map(el => el.completed ? <TodoItem key={el.id} {...el} /> : <></>)
        ||
        state.typeFilter === 'notCompleted' && state.items.map(el => !el.completed ? <TodoItem key={el.id} {...el} /> : <></>)
      }
    </TodoListContainer >
  );
}

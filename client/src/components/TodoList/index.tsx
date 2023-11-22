import React from 'react';
import { TodoListContainer } from './style';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { TodoItem } from '../TodoItem';
import { useDispatch } from 'react-redux';
import { dragDropPastAction } from '../../store/reducers/todoReducer';

export const TodoList: React.FC = () => {

  const state = useTypedSelector(state => state.todo);
  const dispatch = useDispatch();

  let prevItemId = 0;
  let directPast: 'up' | 'down' = 'up';
  let mouveItemId = 0;

  return (
    <TodoListContainer>
      {
        state.items.map(el =>
          <div
            key={el.id}
            style={{ width: '100%', height: '100%' }}
            draggable={true}
            onDragStart={() => mouveItemId = el.id}
            onDragLeave={
              () => {
                if (el.id - prevItemId > 0) {
                  directPast = 'up';
                  prevItemId = el.id;
                } else if (el.id - prevItemId < 0) {
                  directPast = 'down';
                  prevItemId = el.id;
                }
              }
            }
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => {
              if (mouveItemId !== el.id)
                dispatch(dragDropPastAction({ fromId: mouveItemId, toId: el.id, directPast }));
            }
            }
          >
            {
              state.typeFilter === 'completed' && !el.completed && <></>
              ||
              state.typeFilter === 'notCompleted' && el.completed && <></>
              ||
              <TodoItem key={el.id} {...el} />
            }
          </div>
        )
      }
    </TodoListContainer >
  );
};

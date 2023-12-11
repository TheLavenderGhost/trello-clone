import React, { useRef } from 'react';
import './styles.css';
import { AddNewItem } from '../addNewItem/AddNewItem';
import { useAppState } from '../../app/AppStateContext';
import { Card } from '../card/Card';
import { useItemDrag } from '../dragItem/useItemDrag';

type ColumnProps = {
  text: string,
  index: number,
  id: string,
}

export const Column = ({ ...props }: ColumnProps) => {
  const { state, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);

  const { drag } = useItemDrag({
    type: 'column',
    ...props,
  });

  drag(ref);

  return (
    <div className='column-container' ref={drag}>
      <div className='column-title'>
        {props.text}
      </div>
      {state.lists[props.index].tasks.map((task, i) => (
        <Card
          key={task.id}
          text={task.text}
          index={i}
        />
      ))}
      <AddNewItem
        toggleButtonText='+ Add another task'
        onAdd={text => dispatch({
          type: 'addTask',
          payload: {
            text,
            listId: props.id,
          },
        })}
        dark
      />
    </div>
  );
};

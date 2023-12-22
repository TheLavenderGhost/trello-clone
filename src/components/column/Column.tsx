import React, { useRef } from 'react';
import './styles.css';
import { AddNewItem } from '../addNewItem/AddNewItem';
import { useAppState } from '../../app/AppStateContext';
import { Card } from '../card/Card';
import { useItemDrag } from '../dragItem/useItemDrag';
import { useDrop } from 'react-dnd';
import { DragItem } from '../dragItem/DragItem';

type ColumnProps = {
  text: string,
  index: number,
  id: string,
}

export const Column = ({ ...props }: ColumnProps) => {
  const { state, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);

  const [ , drop ] = useDrop({
    accept: 'column',
    hover(item: DragItem) {
      console.log('in');
      console.log('hover', item, props);
      const dragIndex = item.index;
      const hoverIndex = props.index;

      if (dragIndex === hoverIndex) {
        return;
      }

      dispatch({
        type: 'moveList',
        payload: { dragIndex, hoverIndex },
      });

      item.index = hoverIndex;
    },
  });

  const { drag } = useItemDrag({
    type: 'column',
    ...props,
  });

  drag(drop(ref));

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

import React from 'react';
import './styles.css';
import { AddNewItem } from '../addNewItem/AddNewItem';
import { useAppState } from '../../app/AppStateContext';
import { Card } from '../card/Card';

type ColumnProps = {
  text: string,
  index: number,
  id: string,
}

export const Column = ({
  text,
  index,
  id,
}: ColumnProps) => {
  const { state, dispatch } = useAppState();

  return (
    <div className='column-container'>
      <div className='column-title'>
        {text}
      </div>
      {state.lists[index].tasks.map((task, i) => (
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
            listId: id,
          },
        })}
        dark
      />
    </div>
  );
};

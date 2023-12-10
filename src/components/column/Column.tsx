import React from 'react';
import './styles.css';
import { AddNewItem } from '../addNewItem/AddNewItem';

type ColumnProps = {
  text: string,
}

export const Column = ({
  text,
  children,
}: React.PropsWithChildren<ColumnProps>) => {
  return (
    <div className='column-container'>
      <div className='column-title'>
        {text}
      </div>
      {children}
      <AddNewItem
        toggleButtonText='+ Add another task'
        onAdd={console.log}
        dark
      />
    </div>
  );
};

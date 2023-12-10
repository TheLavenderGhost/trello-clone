import React, { useState } from 'react';
import './styles.css';
import { NewItemForm } from './NewItemForm';

type AddNewItemProps = {
  onAdd(text: string): void,
  toggleButtonText: string,
  dark?: boolean
}

export const AddNewItem = (props: AddNewItemProps) => {
  const [ showForm, setShowForm ] = useState(false);

  const handleOnAdd = (text: string) => {
    props.onAdd(text);
    setShowForm(false);
  };

  if (showForm) {
    return (
      <NewItemForm
        onAdd={handleOnAdd}
      />
    );
  }

  return (
    <button
      className={`add-item-button ${props.dark ? 'dark' : null}`}
      onClick={() => setShowForm(true)}
    >
      {props.toggleButtonText}
    </button>
  );
};

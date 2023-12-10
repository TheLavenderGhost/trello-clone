import React, { useState } from 'react';
import { AddItemButton } from './styles';
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
    <AddItemButton
      dark={props.dark}
      onClick={() => setShowForm(true)}
    >
      {props.toggleButtonText}
    </AddItemButton>
  );
};

import React, { useState } from 'react';
import {
  NewItemFormContainer,
  NewItemButton,
  NewItemInput,
} from './styles';
import { useInputFocus } from '../../utils/useInputFocus';

type NewItemFormProps = {
  onAdd(text: string): void,
}

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [ text, setText ] = useState('');
  const inputRef = useInputFocus();

  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={inputRef}
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <NewItemButton onClick={() => onAdd(text)}>
        Create
      </NewItemButton>
    </NewItemFormContainer>
  );
};

import React, { useState } from 'react';
import {
  NewItemFormContainer,
  NewItemButton,
  NewItemInput,
} from './styles';
import { useInputFocus } from '../../utils/useInputFocus';
import { Key } from '../../common/enums';

type NewItemFormProps = {
  onAdd(text: string): void,
}

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [ text, setText ] = useState('');
  const inputRef = useInputFocus();

  const handleAddText = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === Key.Enter) {
      onAdd(text);
    }
  };

  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={inputRef}
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={handleAddText}
      />
      <NewItemButton onClick={() => onAdd(text)}>
        Create
      </NewItemButton>
    </NewItemFormContainer>
  );
};

import React, { useState } from 'react';
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
    <div className='new-item-form-container'>
      <input className='new-item-input'
        ref={inputRef}
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={handleAddText}
      />
      <button
        className='new-item-button'
        onClick={() => onAdd(text)}
      >
        Create
      </button>
    </div>
  );
};

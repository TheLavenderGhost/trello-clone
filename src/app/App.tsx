import React from 'react';
import './styles.css';
import { Column } from '../components/column/Column';
import { AddNewItem } from '../components/addNewItem/AddNewItem';
import { useAppState } from './AppStateContext';

const App = () => {
  const { state, dispatch } = useAppState();

  return (
    <div className='app-continer'>
      {state.lists.map((list, i) => (
        <Column
          key={list.id}
          id={list.id}
          text={list.text}
          index={i}
        />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={text => dispatch({
          type: 'addList',
          payload: text,
        })}
      />
    </div>
  );
};

export default App;

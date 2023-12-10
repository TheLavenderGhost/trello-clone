import React from 'react';
import './styles.css';
import { Column } from '../components/column/Column';
import { Card } from '../components/card/Card';
import { AddNewItem } from '../components/addNewItem/AddNewItem';

const App = () => {
  return (
    <div className='app-continer'>
      <Column text='To Do'>
        <Card text='Generate app scaffold'/>
      </Column>
      <Column text='In Progress'>
        <Card text='Learn Typescript'/>
      </Column>
      <Column text='Done'>
        <Card text='Begin to use static typing'/>
      </Column>
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={console.log}
      />
    </div>
  );
};

export default App;

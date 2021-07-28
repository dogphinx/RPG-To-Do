import React from 'react';
import './App.css';
import Character from './component/Character';
import Inventory from './component/Inventory';
import ToDoList from './component/ToDoList';
import Status from './component/Status';
import StatusHistory from './component/StatusHistory';

function App() {
  return (
    <div className="App">
      <div className="Character">
        <Character />
        <Inventory />
      </div>
      <div className="ToDoList">
        <ToDoList />
      </div>
      <div className="Status">
      <Status />
      <StatusHistory />
      </div>
    </div>
  );
}

export default App;

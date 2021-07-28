import React from 'react'
import './App.css'

import ProfileContainer from './container/ProfileContainer'
import TodoContainer from './container/TodoContainer'
import StatusContainer from './container/StatusContainer'

function App() {
  return (
    <div className="App">
      <div className="Character">
        <ProfileContainer />
      </div>
      <div className="ToDoList">
        <TodoContainer />
      </div>
      <div className="Status">
        <StatusContainer />
      </div>
    </div>
  )
}

export default App

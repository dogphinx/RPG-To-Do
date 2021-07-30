import React from 'react'
import ProfileContainer from '../container/ProfileContainer'
import StatusContainer from '../container/StatusContainer'
import TodoContainer from '../container/TodoContainer'
import '../App.css'
import styled from 'styled-components'
export default function Main() {
  return (
    <Home className="App">
      <Profile>
        <ProfileContainer />
      </Profile>
      <Todo>
        <TodoContainer />
      </Todo>
      <Status>
        <StatusContainer />
      </Status>
    </Home>
  )
}

const Home = styled.div`
  display: flex;
`
const Profile = styled.div`
  flex: 1;
`
const Todo = styled.div`
  flex: 1;
`
const Status = styled.div`
  flex: 1;
`

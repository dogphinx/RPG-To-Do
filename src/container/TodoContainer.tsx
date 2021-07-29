import React, { ReactElement } from 'react'
import { Todo } from '../component'

function TodoContainer(): ReactElement {
  return (
    <Todo>
      <h1>To Do List</h1>
      <Todo.Tutorial>
        <Todo.ListItem>할 일과 목표 스텟 경험치를 설정 해주세요.</Todo.ListItem>
        <Todo.ListItem>경험치를 일정 이상 달성하면 캐릭터 스텟이 올라갑니다.</Todo.ListItem>
        <Todo.ListItem>일정 스텟 경험치를 달성하면 캐릭터 레벨이 증가합니다.</Todo.ListItem>
        {/* 이것도 나중에 일단 작성해두고 state 에서 map 으로 뿌려주는 형태로 바꾸기 */}
      </Todo.Tutorial>
      <Todo.Section>
        <form className="inputToDoList" action="" method="get">
          <select name="ListType" id="ListType">
            <option value="ToDoList" selected>
              To Do List
            </option>
            <option value="BucketList">Bucket List</option>
          </select>
          <input type="text" />
          <input type="submit" value="등록" />
        </form>
        <Todo.ListWrap>
          <Todo.ListType>집 밥먹기</Todo.ListType>
          <Todo.ListType>샤워하기</Todo.ListType>
          <Todo.ListType>방 치우기</Todo.ListType>
          <Todo.ListType>옷 정리하기</Todo.ListType>
        </Todo.ListWrap>
        <Todo.Bucket></Todo.Bucket>
      </Todo.Section>
    </Todo>
  )
}

export default TodoContainer

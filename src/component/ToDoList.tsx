import React from 'react';
import './css/ToDoList.css';

function ToDoList() {
  return (
    <div className="ToDoList">
      <h1>To Do List</h1>
      <ul className="tutorial">
          <li>할 일과 목표 스텟 경험치를 설정 해주세요.</li>
          <li>경험치를 일정 이상 달성하면 캐릭터 스텟이 올라갑니다.</li>
          <li>일정 스텟 경험치를 달성하면 캐릭터 레벨이 증가합니다.</li>
          {/* 이것도 나중에 일단 작성해두고 state 에서 map 으로 뿌려주는 형태로 바꾸기 */}
      </ul>
      <form 
        className="inputToDoList" 
        action=""
        method="get"
      >
        <select name="ListType" id="ListType">
          <option value="ToDoList" selected>To Do List</option>
          <option value="BucketList">Bucket List</option>
        </select>
        <input type="text" />
        <input type="submit" value="등록" />
      </form>
    </div>
  )
}

export default ToDoList;
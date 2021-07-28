import React from 'react';
import './css/Character.css';

function Character() {
  return (
    <div className="Character">
      <img 
        className="character_image"
        src="https://www.freecodecamp.org/news/content/images/size/w2000/2021/07/cover.jpg" 
      />
      <h2>Username</h2>
      {/* username 데이터 베이스로 받아서 넣기 임의 데이터 만들면 수정 */}
      <div className="exp_bar_container">
        <div className="exp_bar"></div>
      </div>
      <p>EXP ( 30 / 100 )</p> 
      {/* width 에 넣을 경험치 숫자를 넣기 */}
    </div>
  )
}

export default Character;
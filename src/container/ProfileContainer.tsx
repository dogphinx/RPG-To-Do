import React, { ReactElement, useEffect, useState } from 'react'
import { Profile } from '../component'
export default function ProfileContainer(): ReactElement {
  const [face, setFace] = useState('')

  return (
    <Profile>
      <Profile.Section>
        <Profile.Headline>Hello RPGTodo</Profile.Headline>
        <Profile.Character>
          <Profile.Img src="https://www.freecodecamp.org/news/content/images/size/w2000/2021/07/cover.jpg" />
        </Profile.Character>
        <Profile.Headline>Username</Profile.Headline>
        {/* username 데이터 베이스로 받아서 넣기 임의 데이터 만들면 수정 */}
        <Profile.ExpbarWrap>
          <Profile.Expbar></Profile.Expbar>
        </Profile.ExpbarWrap>
        <Profile.Text>EXP ( 30 / 100 )</Profile.Text>
        {/* width 에 넣을 경험치 숫자를 넣기 */}
      </Profile.Section>

      <Profile.Inventory className="inventory">
        {/* 인벤토리는 어떠한 모양으로 만들지 좀 더 구상이 필요할 듯 함. 테이블로 만들어서 그림을 각각에 넣을지 grid 로 모양을 짜두고 그안에 보여줄지 어떻게 해야할지 아직 모르겠음. */}
        <Profile.ColumnItemWrap>
          <Profile.Headline>Inventory test </Profile.Headline>
          <Profile.RowItemWrap>
            <Profile.Item>옷</Profile.Item>
            <Profile.Item>신발</Profile.Item>
            <Profile.Item>가발</Profile.Item>
            <Profile.Item>옷</Profile.Item>
          </Profile.RowItemWrap>
          <Profile.RowItemWrap>
            <Profile.Item>가발</Profile.Item>
            <Profile.Item>옷</Profile.Item>
            <Profile.Item>옷</Profile.Item>
            <Profile.Item>신발</Profile.Item>
          </Profile.RowItemWrap>
          <Profile.RowItemWrap>
            <Profile.Item>옷</Profile.Item>
            <Profile.Item>배경</Profile.Item>
            <Profile.Item>옷</Profile.Item>
            <Profile.Item>옷</Profile.Item>
          </Profile.RowItemWrap>
          <Profile.RowItemWrap>
            <Profile.Item>옷</Profile.Item>
            <Profile.Item>애완동물</Profile.Item>
            <Profile.Item>옷</Profile.Item>
            <Profile.Item>옷</Profile.Item>
          </Profile.RowItemWrap>
        </Profile.ColumnItemWrap>
      </Profile.Inventory>
    </Profile>
  )
}

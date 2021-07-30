import React, { ReactElement } from 'react'
import { Status } from '../component'

function StatusContainer(): ReactElement {
  return (
    <Status>
      <Status.Box>
        <Status.Img src="https://ww.namu.la/s/2c7dbdf5e9ccc10cbad73067299a54dfd8e07751c8cef56a12728c555ebb180e460090dd9b7a17c7f4b46e656bc78e4ec742664b9dc80475abc26055a270d1a17bc4eeddbcb6d1781a9e9ca9cabd5c3b362c206928f18cb037e7e2c9792059d7" />
        {/* 요거는 스탯창 어떻게 해야할지 전혀 감이 안잡힘.... */}
      </Status.Box>
      <Status.History>
        <h2>StatusHistory test (주석달아둠!)</h2>
        {/* 요것도 todo list 처럼 동그란 점 찍고 완료한 리스트 나열해서 적을지 고민. */}
      </Status.History>
    </Status>
  )
}

export default StatusContainer

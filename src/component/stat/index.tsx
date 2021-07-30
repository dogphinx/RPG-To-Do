import React, { ReactElement, ReactNode } from 'react'
import { Container, Image, History, Box } from './statStyle'
interface Props {
  children?: ReactNode
  restprops?: any
}

export default function Status({ children, ...restprops }: Props): ReactElement {
  return <Container {...restprops}>{children}</Container>
}
Status.Box = function StatusBox({ children, ...restprops }: Props): ReactElement {
  return <Box {...restprops}>{children}</Box>
}
Status.Img = function StatusImg({ src, ...restprops }: any): ReactElement {
  return (
    <Image
      {...restprops}
      src={
        src
          ? // ? `/images/users/${src}.png`
            `https://ww.namu.la/s/2c7dbdf5e9ccc10cbad73067299a54dfd8e07751c8cef56a12728c555ebb180e460090dd9b7a17c7f4b46e656bc78e4ec742664b9dc80475abc26055a270d1a17bc4eeddbcb6d1781a9e9ca9cabd5c3b362c206928f18cb037e7e2c9792059d7`
          : `https://ww.namu.la/s/2c7dbdf5e9ccc10cbad73067299a54dfd8e07751c8cef56a12728c555ebb180e460090dd9b7a17c7f4b46e656bc78e4ec742664b9dc80475abc26055a270d1a17bc4eeddbcb6d1781a9e9ca9cabd5c3b362c206928f18cb037e7e2c9792059d7`
      }
    />
  )
}
Status.History = function StatusHistory({ children, ...restprops }: Props): ReactElement {
  return <History {...restprops}>{children}</History>
}

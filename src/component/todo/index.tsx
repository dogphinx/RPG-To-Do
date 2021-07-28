import React, { ReactElement, ReactNode } from 'react'
import {
  Container,
  Tutorial,
  ListWrap,
  ListItem,
  InputToDoList,
  ListType,
  DoneButton,
  DeleteButton,
  Section,
  Img,
} from './todoStyle'
interface Props {
  children?: ReactNode
  restprops?: any
}

export default function Todo({ children, ...restprops }: Props): ReactElement {
  return <Container {...restprops}>{children}</Container>
}

Todo.Tutorial = function TodoTutorial({ children, ...restprops }: Props): ReactElement {
  return <Tutorial {...restprops}>{children}</Tutorial>
}
Todo.ListWrap = function TodoListWrap({ children, ...restprops }: Props): ReactElement {
  return <ListWrap {...restprops}>{children}</ListWrap>
}
Todo.ListItem = function TodoListItem({ children, ...restprops }: Props): ReactElement {
  return <ListItem {...restprops}>{children}</ListItem>
}

Todo.InputToDoList = function TodoInputToDoList({ children, ...restprops }: Props): ReactElement {
  return <InputToDoList {...restprops}>{children}</InputToDoList>
}
Todo.ListType = function TodoListType({ children, ...restprops }: Props): ReactElement {
  return (
    <ListType {...restprops}>
      {children}
      <DoneButton>등록</DoneButton>
      <DeleteButton>삭제</DeleteButton>
    </ListType>
  )
}

Todo.Section = function TodoSection({ children, ...restprops }: Props): ReactElement {
  return <Section {...restprops}>{children}</Section>
}
Todo.Img = function TodoImg({ children, ...restprops }: Props): ReactElement {
  return <Img {...restprops}>{children}</Img>
}

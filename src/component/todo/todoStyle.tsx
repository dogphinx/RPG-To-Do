import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
`
export const Tutorial = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 30px;
`
export const ListItem = styled.li`
  padding: 10px;
  border: 1px solid #ccc;
  width: 90%;
`
export const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #ccc;
  flex: 0.2;
  justify-content: center;
  align-items: center;
`

export const ListWrap = styled.ul`
  width: 100%;
  flex: 1;
`
export const ListType = styled.li`
  width: 100%;
  height: 30px;
  border: 1px solid #ccc;
  clear: both;
`

export const InputToDoList = styled.div``
export const DoneButton = styled.a`
  width: 20px;
  height: 20px;
  background-color: #3fbda8;
  cursor: pointer;
  margin: 0 7px;
  float: right;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
export const DeleteButton = styled.a`
  width: 20px;
  height: 20px;
  background-color: #3fbda8;
  cursor: pointer;
  float: right;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  margin-right: 7px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
export const Img = styled.div``

export const Bucket = styled.div``

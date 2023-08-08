import styled from '@emotion/styled'

export const DeleteBtn = styled.button`
  padding: 8px 12px;
  width: 160px;
  height: 48px;
  border: 1px solid #d62162;
  color: #d62162;
  background-color: #fff;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    color: #c01e5c;
    border-color: #c01e5c;
    background-color: #fdedf2;
  }

  &:active {
    color: #ab1a58;
    border-color: #ab1a58;
    background-color: #f8c4d5;
  }
`

export const SaveBtn = styled.button`
  padding: 8px 12px;
  width: 160px;
  height: 48px;
  border: none;
  color: #ffffff;
  background-color: #252e32;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    background-color: #3c4a52;
  }

  &:active {
    background-color: #4a5c65;
  }
`

export const ContainerBtns = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`

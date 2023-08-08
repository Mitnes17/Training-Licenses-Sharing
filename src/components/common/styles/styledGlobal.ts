import styled from '@emotion/styled'

export const FieldsetTitle = styled.h6`
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  color: #252e32;
`

export const FieldName = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  color: #3c4a52;
`

export const Wrapper = styled.div`
  width: inherit;
  margin-top: 24px;
`

export const Container = styled.div`
  width: inherit;
  display: flex;
  justify-content: space-between;
`

export const InputText = styled.input`
  padding: 12px;
  width: 336px;
  height: 48px;
  border: 1px solid #b1bec4;
  border-radius: 8px;
  font-size: 14px;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    color: #b1bec4;
  }

  &:hover {
    border-color: #899ca5;
  }

  &:focus {
    outline: none;
    border-color: #1379bb;
  }
`

import styled from '@emotion/styled'
import ArrowDownIcon from '../../assets/icons/ArrowDownIcon'
import CalendarIcon from '../../assets/icons/CalendarIcon'

export const Fieldset = styled.fieldset`
  border: none;
  margin-top: 40px;
`

export const FlexDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 336px;
`

export const InputNumber = styled.input`
  padding: 12px;
  width: 164px;
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

export const SelectNarrow = styled.select`
  appearance: none;
  padding: 12px;
  width: 164px;
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

export const SelectLarge = styled.select`
  appearance: none;
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

export const SelectArrow = styled(ArrowDownIcon)`
  pointer-events: none;
  position: absolute;
  top: 13px;
  right: 8px;
`

export const RelativeDiv = styled.div`
  position: relative;
`

export const InputDate = styled.input`
  appearance: none;
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

export const CalendarBtn = styled(CalendarIcon)`
  background-color: white;
  pointer-events: none;
  position: absolute;
  right: 10px;
  bottom: 12px;
`

export const InputTextLarge = styled.input`
  padding: 12px;
  width: 688px;
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

import styled from '@emotion/styled'
import MuiFormLabel from '@mui/material/FormLabel'
import MuiFormControlLabel from '@mui/material/FormControlLabel'

export const Fieldset = styled.fieldset`
  width: 688px;
  border: none;
  margin-top: 52px;
`

export const RadioLabel = styled(MuiFormLabel)`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #3c4a52;
  margin-bottom: 14px;
`

export const RadioIcon = styled.div`
  border: 1px solid #252e32;
  border-radius: 50%;
  width: 20px;
  height: 20px;
`

export const RadioIconChecked = styled.div`
  border: 1px solid #252e32;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  box-shadow: inset 0 0 0 4px #fff;
  background-color: #252e32;
`

export const FormControlLabel = styled(MuiFormControlLabel)`
  .MuiTypography-root {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: '#252E32';
  }
`

export const DescriptionTextarea = styled.textarea`
  width: inherit;
  height: 104px;
  border: 1px solid #b1bec4;
  border-radius: 8px;
  resize: none;
  padding: 12px;
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

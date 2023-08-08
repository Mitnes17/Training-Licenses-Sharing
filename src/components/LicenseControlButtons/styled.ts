import styled from '@emotion/styled'
import { Box, Button, TextField } from '@mui/material'

export const ButtonsWrapperStyled = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  & fieldset {
    top: 0;
    border-radius: 8px;
    border: 1px solid #b1bec4;
  }
  & input {
    height: 48px;
    padding: 0;
  }

  legend {
    display: none;
  }
  & MuiSelect-select {
    overflow: hidden;
    text-overflow: clip;
  }
`

export const RightButtonsWrapperStyled = styled(Box)`
  display: flex;
  gap: 16px;
`
export const FilterButtonStyled = styled(Button)`
  color: #252e32;
  width: 98px;
  height: 48px;
  border: 1px solid #252e32;
  text-transform: none;
  border-radius: 8px;
`

export const AddLicenseButtonStyled = styled(Button)`
  background-color: #252e32;
  height: 48px;
  text-transform: none;
  color: #fff;
  border-radius: 8px;
`

export const SearchFieldStyled = styled(TextField)`
  width: 200px;
`

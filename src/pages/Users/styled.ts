import styled from '@emotion/styled'
import { Button, TextField } from '@mui/material'

export const Users = styled.section`
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
  margin: 0 auto;
  max-width: 1440px;
  @media (min-width: 1600px) {
    max-width: 1600px;
  }
`
export const SearchField = styled(TextField)`
  color: red;
  display: flex;
  align-items: center;

  .MuiInputBase-root {
    height: 50px;
    border-radius: 8px;
    width: 200px;
  }
  .MuiInputBase-input {
    font-size: 14px;
  }
`

export const Header = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 16px;
`

export const SearchFieldStyled = styled(TextField)`
  .MuiInputBase-root {
    height: 48px;
    border-radius: 8px;
    width: 200px;
  }

  .MuiInputBase-input {
    font-size: 14px;
  }
`

export const FilterButtonStyled = styled(Button)`
  color: #252e32;
  width: 98px;
  height: 48px;
  border: 1px solid #252e32;
  text-transform: none;
  border-radius: 8px;
`

export const Dot = styled.div<{ color: string }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`

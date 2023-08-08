import styled from '@emotion/styled'
import { Box, Button } from '@mui/material'

export const StyledButton = styled(Button)`
  align-self: flex-end;
  padding: 8px 12px;
  height: 48px;
  text-transform: none;
  border-radius: 8px;
  background-color: #d62162;
  color: white;

  &:hover {
    background-color: #e72565;
  }

  &:active {
    background-color: #ea447b;
  }
`

export const StyledBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 480px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.24), 0px 8px 12px 6px rgba(0, 0, 0, 0.12);
  padding: 16px;
  display: flex;
  border: none;
  flex-direction: column;
`

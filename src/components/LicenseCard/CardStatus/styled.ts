import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const StatusCricleStyled = styled(Box)<{ isActive?: boolean }>`
  width: 8px;
  height: 8px;
  background-color: ${({ isActive }) =>
    isActive !== undefined && isActive ? 'rgba(106, 158, 63, 1)' : 'rgba(0, 0, 0, 0.12)'};
  border-radius: 50%;
`

import { Button, Grid, MenuItem, type ButtonProps } from '@mui/material'
import styled from '@emotion/styled'
import { ScrollBar } from '../Doughnut/styled'

export const Title = styled.h3`
  margin-bottom: 12px;
  font-weight: 500;
`

export const ButtonText = styled.span`
  text-transform: capitalize;
  font-size: 12px;
  line-height: 18px;
`
interface ButtonItemProps extends ButtonProps {
  isActive: boolean
}

export const ButtonItem = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'isActive'
})<ButtonItemProps>(({ isActive }) => ({
  color: '#4a5c65',
  padding: '8px 16px',
  border: '#b1bec4 1px solid',
  borderRadius: '4px',
  marginBottom: '8px',
  ...(isActive && {
    border: '1px solid #1379bb',
    background: '#d7effe'
  })
}))

export const License = styled(Grid)`
  padding: 8px 12px;
  color: #252e32;
  align-self: center;
`

export const Duration = styled(License)`
  color: #627a86;
  min-width: 117px;
`

export const ExpireDate = styled(License)<{ bgcolor?: string, restpercents: number }>`
  background-color: ${({ bgcolor }) => bgcolor ?? 'white'};
  width: 155px;
  background: linear-gradient(
    to right,
    ${({ bgcolor }) => bgcolor ?? 'white'} 0%,
    ${({ bgcolor }) => bgcolor ?? 'white'} ${({ restpercents }) => `${restpercents * 100}%`},
    white ${({ restpercents }) => `${restpercents * 100}%`},
    white 100%
  );
`

export const Container = styled(Grid)`
  max-height: 312px;
  margin-right: -10px;
  padding-right: 7px;
  overflow-y: auto;
  ${ScrollBar}
`

export const StyledMenuItem = styled(MenuItem)`
  padding: 8px 12px;
`

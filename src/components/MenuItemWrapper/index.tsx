import { MenuItem } from '@mui/material'
import { type FC } from 'react'

interface Props {
  onClick: () => void
  children: JSX.Element
  backgroundColor?: string
}

const MenuItemWrapper: FC<Props> = ({ onClick, children, backgroundColor }) => (
  <MenuItem onClick={onClick} sx={{ backgroundColor: `${backgroundColor ?? 'none'}` }}>
    {children}
  </MenuItem>
)

export default MenuItemWrapper

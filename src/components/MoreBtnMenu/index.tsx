import React, { type FC, Fragment } from 'react'

import IconButton from '@mui/material/IconButton'
import { Grow, Paper, type MenuProps, ClickAwayListener, MenuList } from '@mui/material'
import * as S from './styled'

interface Props {
  open: boolean
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  handleClose: () => void
  anchorEl: MenuProps['anchorEl']
  children: JSX.Element[] | JSX.Element
  icon?: JSX.Element
  menuWidth?: string
  iconBtnDimensions?: { width: string, height: string, right: string }
  offsetX?: number
}

const MoreBtnMenu: FC<Props> = ({
  open,
  handleClick,
  handleClose,
  anchorEl,
  children,
  icon,
  menuWidth,
  iconBtnDimensions,
  offsetX
}): JSX.Element => {
  return (
    <Fragment>
      <IconButton
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={(e) => {
          handleClick(e)
        }}
        sx={{
          width: iconBtnDimensions?.width ?? 24,
          height: iconBtnDimensions?.height ?? 24,
          cursor: 'pointer',
          borderRadius: '4px',
          background: `${open ? '#EBF7FF' : 'none'}`,
          right: iconBtnDimensions?.right ?? 0
        }}
      >
        {icon}
      </IconButton>
      <S.StyledPopper
        width={menuWidth ?? '200px'}
        open={open}
        anchorEl={anchorEl}
        transition
        disablePortal
        modifiers={[
          {
            name: 'offset',
            options: {
              offset: [offsetX ?? 0, 2]
            }
          }
        ]}
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open}>{children}</MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </S.StyledPopper>
    </Fragment>
  )
}
export default MoreBtnMenu

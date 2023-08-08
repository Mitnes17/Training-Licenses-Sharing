import { type FC, Fragment, useState } from 'react'

import ActionsBtn from '../ActionsBtn'
import { type UserRoleType } from '../../store/reducers/fetchDataReducer/fetchDataReducer'
import { useAppDispatch, useTypedSelector } from '../../hooks/redux'
import { changeUsersRole } from '../../store/actionCreators/changeUsersRole'
import { getUserIdList } from '../../store/reducers/usersReducer/selectors'
import { deactivateUsers } from '../../store/actionCreators/deactivateUsers'

import { ClickAwayListener, Grow, MenuItem, MenuList, Paper, Typography } from '@mui/material'
import * as S from './styled'

interface Props {
  userRoleOptions: UserRoleType[]
}

const ActionsDropdownMenu: FC<Props> = ({ userRoleOptions }): JSX.Element => {
  const dispatch = useAppDispatch()

  const userIdList = useTypedSelector(getUserIdList)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = (): void => {
    setAnchorEl(null)
  }

  return (
    <Fragment>
      <ActionsBtn
        isDisabled={userIdList.length === 0}
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        handleClick={handleClick}
        isOpen={open}
      />
      <S.StyledPopper
        open={open}
        anchorEl={anchorEl}
        transition
        disablePortal
        modifiers={[
          {
            name: 'offset',
            options: {
              offset: [46, 0]
            }
          }
        ]}
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open}>
                  {userRoleOptions.map((role) => (
                    <MenuItem
                      key={role.id}
                      sx={{ height: '48px' }}
                      onClick={() => {
                        handleClose()
                        dispatch(changeUsersRole({ userIdList, roleId: role.id, dispatch }))
                      }}
                    >
                      <Typography variant="smallText">{`Assign as ${role.name}s`}</Typography>
                    </MenuItem>
                  ))}
                  <MenuItem
                    sx={{ height: '48px' }}
                    onClick={() => {
                      handleClose()
                      dispatch(deactivateUsers({ userIdList, dispatch }))
                    }}
                  >
                    <Typography variant="smallText">Deactivate users</Typography>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </S.StyledPopper>
    </Fragment>
  )
}
export default ActionsDropdownMenu

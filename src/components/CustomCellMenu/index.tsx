import React, { type FC, useState } from 'react'

import { Box, Typography } from '@mui/material'
import MoreBtnMenu from '../MoreBtnMenu'
import { useAppDispatch } from '../../hooks/redux'
import { deactivateUsers } from '../../store/actionCreators/deactivateUsers'
import { setSelectedUsersId } from '../../store/reducers/usersReducer'
import { changeUsersRole } from '../../store/actionCreators/changeUsersRole'

interface Props {
  icon: JSX.Element
  menuWidth: string
  iconBtnDimensions?: { width: string, height: string, right: string }
  userId: number
  userEmail: string
  renderChildren: (firstOption: () => void, secondOption: () => void) => JSX.Element
  typography?: string
  isThreeDotsMenu: boolean
}

const CustomCellMenu: FC<Props> = ({
  icon,
  menuWidth,
  iconBtnDimensions,
  userId,
  userEmail,
  renderChildren,
  typography,
  isThreeDotsMenu
}) => {
  const dispatch = useAppDispatch()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = (): void => {
    setAnchorEl(null)
  }
  const deactivateUsersFunction = (): void => {
    handleClose()
    dispatch(deactivateUsers({ userIdList: [userId], dispatch }))
    dispatch(setSelectedUsersId([]))
  }
  const copyUserEmail = (): void => {
    handleClose()
    navigator.clipboard.writeText(userEmail)
  }
  const assignAsUser = (): void => {
    handleClose()
    dispatch(changeUsersRole({ userIdList: [userId], roleId: 3, dispatch }))
  }
  const assignAsReviewer = (): void => {
    handleClose()
    dispatch(changeUsersRole({ userIdList: [userId], roleId: 2, dispatch }))
  }

  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}
    >
      <Typography>{typography}</Typography>
      <MoreBtnMenu
        open={open}
        anchorEl={anchorEl}
        handleClick={handleClick}
        handleClose={handleClose}
        icon={icon}
        menuWidth={menuWidth}
        iconBtnDimensions={iconBtnDimensions}
      >
        {isThreeDotsMenu
          ? renderChildren(deactivateUsersFunction, copyUserEmail)
          : renderChildren(assignAsUser, assignAsReviewer)}
      </MoreBtnMenu>
    </Box>
  )
}
export default CustomCellMenu

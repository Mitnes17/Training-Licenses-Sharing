import axios from 'axios'

import { fetchData } from './fetchData'
import { type AnyAction, type ThunkDispatch, createAsyncThunk } from '@reduxjs/toolkit'
import { type RootState } from '..'
import { changeUsersRoleUrl, usersUrl } from '../../API'
import { setSelectedUsersId } from '../reducers/usersReducer'

interface ChangeUsersRole {
  userIdList: number[]
  roleId: number
  dispatch: ThunkDispatch<RootState, void, AnyAction>
}

export const changeUsersRole = createAsyncThunk(
  'store/changeUsersRole',
  ({ userIdList, roleId, dispatch }: ChangeUsersRole) =>
    axios
      .put(changeUsersRoleUrl, { userIdList, roleId })
      .then(() => dispatch(setSelectedUsersId([])))
      .then(() => dispatch(fetchData({ link: usersUrl, field: 'users' })))
)

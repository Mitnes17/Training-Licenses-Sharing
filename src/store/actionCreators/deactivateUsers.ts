import axios from 'axios'
import { type AnyAction, type ThunkDispatch, createAsyncThunk } from '@reduxjs/toolkit'

import { fetchData } from './fetchData'
import { type RootState } from '..'
import { deactivateUsersUrl, usersUrl } from '../../API'
import { setSelectedUsersId } from '../reducers/usersReducer'

interface DeactivateUsers {
  userIdList: number[]
  dispatch: ThunkDispatch<RootState, void, AnyAction>
}

export const deactivateUsers = createAsyncThunk(
  'store/deactivateUsers',
  ({ userIdList, dispatch }: DeactivateUsers) =>
    axios
      .put(deactivateUsersUrl, { userIdList })
      .then(() => dispatch(setSelectedUsersId([])))
      .then(() => dispatch(fetchData({ link: usersUrl, field: 'users' })))
)

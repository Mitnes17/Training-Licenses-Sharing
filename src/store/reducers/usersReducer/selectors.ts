import { type RootState } from '../..'
import { type UsersDataType } from './users'

export const getUsersRestructuredData = (state: RootState): UsersDataType => state.users
export const getUserIdList = (state: RootState): number[] => state.users.selectedUsersId

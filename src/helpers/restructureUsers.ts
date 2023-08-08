import { type Role, type Status, type UserDataType } from './../store/reducers/usersReducer/users.d'
import { type UsersType } from '../store/reducers/fetchDataReducer/fetchDataReducer'

export const restructureUsers = (users: UsersType[]): UserDataType[] => users.map(user => ({
  id: user.id,
  name: user.name,
  companyRole: user.companyRole,
  discipline: user.discipline[0].toUpperCase() + user.discipline.slice(1),
  deliveryUnit: user.deliveryUnit,
  lastActivity: `${user.lastActiveTime} ${user.lastActivePeriod} ago`,
  status: user.status[0] + user.status.slice(1).toLowerCase() as Status,
  role: user.role as Role,
  email: user.email
}))

import { type GridSortModel } from '@mui/x-data-grid'

export enum Status {
  ACTIVE = 'Active',
  INACTIVE = 'Inactive',
  DEACTIVATED = 'Deactivated',
}

export enum Role {
  ADMIN = 'Admin',
  REVIEWER = 'Reviewer',
  USER = 'User',
}

export interface UserDataType {
  id: number
  name: string
  companyRole: string
  discipline: string
  deliveryUnit: string
  lastActivity: string
  status: Status
  role: Role
  email: string
}

interface UsersDataType {
  data: UserDataType[]
  filteredData: UserDataType[]
  search: string
  selectedUsersId: number[]
  selectedCellInfo: { id: number | null, field: string }
  isChangeRoleDropdownOpen: boolean
  isKebabMenuOpen: boolean
  sortModel: GridSortModel
  isUsersRestructured: boolean
}

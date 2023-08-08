import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type UserDataType, type UsersDataType } from './users'
import { type GridSortModel } from '@mui/x-data-grid'

const initialState: UsersDataType = {
  data: [],
  filteredData: [],
  isUsersRestructured: false,
  search: '',
  selectedUsersId: [],
  selectedCellInfo: {
    id: null,
    field: ''
  },
  isKebabMenuOpen: false,
  isChangeRoleDropdownOpen: false,
  sortModel: [
    {
      field: 'role',
      sort: 'asc'
    }
  ]
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsersData: (state, action: PayloadAction<UserDataType[]>) => {
      state.data = action.payload
    },

    setFiltereredUsersData: (state, action: PayloadAction<string>) => {
      state.filteredData = state.data.filter((user) =>
        user.name.toLowerCase().includes(action.payload.toLowerCase())
      )
    },

    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },

    setSortModel: (state, action: PayloadAction<GridSortModel>) => {
      state.sortModel = action.payload
    },

    setIsUsersRestructured: (state, action: PayloadAction<boolean>) => {
      state.isUsersRestructured = action.payload
    },

    setSelectedUsersId: (state, action: PayloadAction<number[]>) => {
      state.selectedUsersId = action.payload
    },

    setSelectedCellInfo: (state, action: PayloadAction<{ id: number | null, field: string }>) => {
      state.selectedCellInfo = action.payload
    },

    setIsChangeRoleDropdownOpen: (state, action: PayloadAction<boolean>) => {
      state.isChangeRoleDropdownOpen = action.payload
    },

    setIsKebabMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isKebabMenuOpen = action.payload
    }

  }
})

export const {
  setUsersData,
  setFiltereredUsersData,
  setSearch,
  setSortModel,
  setIsUsersRestructured,
  setSelectedUsersId,
  setSelectedCellInfo,
  setIsChangeRoleDropdownOpen,
  setIsKebabMenuOpen
} = usersSlice.actions

export default usersSlice.reducer

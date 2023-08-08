import { useCallback, useEffect } from 'react'

import { useAppDispatch, useTypedSelector } from '../../hooks/redux'
import { getUserRoleOptions, getUsersData } from '../../store/reducers/fetchDataReducer/selectors'
import { fetchData } from '../../store/actionCreators/fetchData'
import { rolesUrl, usersUrl } from '../../API'
import { columnsTemplate } from '../../helpers/columnsUsersDataGrid'
import {
  setFiltereredUsersData,
  setIsUsersRestructured,
  setSearch,
  setSelectedCellInfo,
  setSelectedUsersId,
  setSortModel,
  setUsersData
} from '../../store/reducers/usersReducer'
import { getUsersRestructuredData } from '../../store/reducers/usersReducer/selectors'
import { restructureUsers } from '../../helpers/restructureUsers'
import CustomCheckbox from '../../components/CustomCheckbox'

import InputAdornment from '@mui/material/InputAdornment'
import { Box, useMediaQuery } from '@mui/material'
import SearchIcon from '../../assets/icons/SearchIcon'
import FilterIcon from '../../assets/icons/FilterIcon'
import { DataGrid } from '@mui/x-data-grid'
import ActionsDropdownMenu from '../../components/ActionsDropdownMenu'
import ColumnSortedIcon from '../../assets/icons/ColumnSortedIcon'
import * as S from './styled'

const Users = (): JSX.Element => {
  const dispatch = useAppDispatch()

  const userRoleOptions = useTypedSelector(getUserRoleOptions)
  const columns = columnsTemplate({
    isBigScreen: useMediaQuery('(min-width: 1600px)'),
    dispatch,
    userRoleOptions
  })
  const fetchedData = useTypedSelector(getUsersData)
  const {
    filteredData,
    isUsersRestructured,
    search,
    sortModel,
    selectedUsersId,
    selectedCellInfo
  } = useTypedSelector(getUsersRestructuredData)

  const fetchDataAsync = useCallback(async (): Promise<void> => {
    await dispatch(fetchData({ link: usersUrl, field: 'users' }))
    await dispatch(fetchData({ link: rolesUrl, field: 'roles' }))
    dispatch(setIsUsersRestructured(true))
  }, [dispatch])

  useEffect(() => {
    fetchDataAsync()
  }, [fetchDataAsync])

  useEffect(() => {
    dispatch(setUsersData(restructureUsers(fetchedData)))
  }, [dispatch, fetchedData])

  useEffect(() => {
    dispatch(setFiltereredUsersData(search))
  }, [dispatch, search, isUsersRestructured, fetchedData])

  return (
    <S.Users>
      <S.Header>
        <Box sx={{ display: 'flex', columnGap: '32px' }}>
          <S.SearchFieldStyled
            id="outlined-basic"
            variant="outlined"
            placeholder="Placeholder"
            value={search}
            onChange={(e) => {
              dispatch(setSearch(e.target.value))
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon width={24} height={24} viewBox="0 0 24 24" fill="none" />
                </InputAdornment>
              )
            }}
          />
          <ActionsDropdownMenu userRoleOptions={userRoleOptions} />
        </Box>

        <S.FilterButtonStyled
          variant="outlined"
          startIcon={<FilterIcon width={24} height={24} viewBox="0 0 24 24" fill="none" />}
        >
          Filters
        </S.FilterButtonStyled>
      </S.Header>

      <Box sx={{ height: '100%', width: '100%' }}>
        <DataGrid
          rows={filteredData}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10
              }
            },
            columns: {
              columnVisibilityModel: {
                id: false,
                email: false
              }
            }
          }}
          disableRowSelectionOnClick
          columnHeaderHeight={48}
          pageSizeOptions={[10, 25, 50]}
          checkboxSelection
          sortModel={sortModel}
          onSortModelChange={(model) => {
            dispatch(setSortModel(model))
          }}
          rowSelectionModel={selectedUsersId}
          onRowSelectionModelChange={(ids) => {
            const selectedRowsData = ids
              .map((id) => filteredData.find((row) => row.id === id)?.id)
              .filter((id): id is number => id !== undefined)
            dispatch(setSelectedUsersId(selectedRowsData))
          }}
          onCellClick={(params) => {
            params.field === 'menu' || params.field === 'role'
              ? dispatch(
                setSelectedCellInfo({
                  id: Number(params.id),
                  field: params.field
                })
              )
              : dispatch(setSelectedCellInfo({ id: null, field: '' }))
          }}
          getCellClassName={(params) =>
            params.id === selectedCellInfo.id && params.field === selectedCellInfo.field
              ? 'selectedCell'
              : ''
          }
          getRowClassName={(params) => (params.id === selectedCellInfo.id ? 'selectedRow' : '')}
          slots={{
            baseCheckbox: CustomCheckbox,
            columnSortedAscendingIcon: () => <ColumnSortedIcon transform="rotate(180)" />,
            columnSortedDescendingIcon: () => <ColumnSortedIcon transform="rotate(0)" />,
            columnUnsortedIcon: () => <ColumnSortedIcon transform="rotate(180)" opacity="50%" />
          }}
          sx={{
            height: '100%',
            borderRadius: '8px',
            background: 'white',
            border: '1px solid #D3DBDF',
            '& .MuiDataGrid-columnHeaders, .MuiDataGrid-columnHeader--moving': {
              backgroundColor: '#f6f8f9'
            },
            '& .MuiDataGrid-iconButtonContainer': {
              visibility: 'visible'
            },
            '& .MuiDataGrid-cell:focus-within': {
              outline: 'none'
            },
            '& .selectedCell': {
              backgroundColor: '#D7EFFE',
              '& .MuiIconButton-root': {
                backgroundColor: '#D7EFFE'
              }
            },
            '& .selectedRow': {
              backgroundColor: '#EBF7FF',
              '&:hover': {
                backgroundColor: '#EBF7FF'
              }
            }
          }}
        />
      </Box>
    </S.Users>
  )
}

export default Users

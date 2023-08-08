import { Box, Typography } from '@mui/material'
import { type GridColDef } from '@mui/x-data-grid'
import { Dot } from '../pages/Users/styled'
import MenuIcon from '../assets/icons/MenuIcon'
import { type AnyAction, type ThunkDispatch } from '@reduxjs/toolkit'
import { type RootState } from '../store'
import CustomCellMenu from '../components/CustomCellMenu'
import { type UserRoleType } from '../store/reducers/fetchDataReducer/fetchDataReducer'
import MenuItemWrapper from '../components/MenuItemWrapper'
import ArrowDownIcon from '../assets/icons/ArrowDownIcon'
import CheckmarkIcon from '../assets/icons/CheckmarkIcon'
import styled from '@emotion/styled'

const dotColor = {
  Active: '#6A9E3F',
  Inactive: '#C01E5C',
  Deactivated: '#252E32'
}

const MenuItemContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  column-gap: 8px;
  white-space: wrap;
`

interface ColumnsInterface {
  dispatch: ThunkDispatch<RootState, void, AnyAction>
  isBigScreen: boolean
  userRoleOptions: UserRoleType[]
}

export const columnsTemplate = ({
  isBigScreen,
  userRoleOptions
}: ColumnsInterface): GridColDef[] => [
  {
    field: 'name',
    headerName: 'User',
    width: isBigScreen ? 290 : 240,
    sortable: false,
    headerClassName: 'header'
  },
  {
    field: 'companyRole',
    headerName: 'Position',
    sortable: false,
    width: isBigScreen ? 290 : 240,
    headerClassName: 'header'
  },
  {
    field: 'discipline',
    headerName: 'Discipline',
    sortable: false,
    width: 240,
    headerClassName: 'header'
  },
  {
    field: 'deliveryUnit',
    headerName: 'DU',
    sortable: false,
    width: 120,
    headerClassName: 'header'
  },
  {
    field: 'status',
    headerName: 'Status',
    sortable: false,
    width: 140,
    headerClassName: 'header',
    renderCell: (params) => (
      <Box sx={{ display: 'flex', alignItems: 'center', columnGap: '8px' }}>
        <Dot color={dotColor[params.value as keyof typeof dotColor]} />
        <Typography variant="smallText">{params.value}</Typography>
      </Box>
    )
  },
  {
    field: 'lastActivity',
    headerName: 'Last active',
    sortable: false,
    width: 160,
    headerClassName: 'header'
  },
  {
    field: 'role',
    headerName: 'Role',
    headerClassName: 'header',
    flex: 1,
    renderCell: (params) => (
      <CustomCellMenu
        icon={<ArrowDownIcon width={24} height={24} />}
        menuWidth="288px"
        iconBtnDimensions={{ width: '48px', height: '48px', right: '-8px' }}
        userId={params.row.id}
        userEmail={params.row.email}
        typography={params.row.role}
        isThreeDotsMenu={false}
        renderChildren={(assignAsUser, assignAsReviewer) => (
          <Box>
            <MenuItemWrapper
              onClick={assignAsUser}
              backgroundColor={params.row.role === 'User' ? '#EBF7FF' : 'none'}
            >
              <MenuItemContainer>
                <Box sx={{ width: '32px' }}>
                  {params.row.role === 'User' && <CheckmarkIcon width={24} height={24} />}
                </Box>
                <Box>
                  <Typography variant="smallTextMedium">{userRoleOptions[1]?.name}</Typography>
                  <Typography>{userRoleOptions[1]?.description}</Typography>
                </Box>
              </MenuItemContainer>
            </MenuItemWrapper>
            <MenuItemWrapper
              onClick={assignAsReviewer}
              backgroundColor={params.row.role === 'Reviewer' ? '#EBF7FF' : 'none'}
            >
              <MenuItemContainer>
                <Box sx={{ width: '52px' }}>
                  {params.row.role === 'Reviewer' && <CheckmarkIcon width={24} height={24} />}
                </Box>
                <Box>
                  <Typography variant="smallTextMedium">{userRoleOptions[0]?.name}</Typography>
                  <Typography>{userRoleOptions[0]?.description}</Typography>
                </Box>
              </MenuItemContainer>
            </MenuItemWrapper>
          </Box>
        )}
      ></CustomCellMenu>
    )
  },
  {
    field: 'id',
    headerName: '',
    headerClassName: ''
  },
  {
    field: 'email',
    headerName: '',
    headerClassName: ''
  },
  {
    field: 'menu',
    headerName: '',
    filterable: false,
    sortable: false,
    disableColumnMenu: true,
    headerClassName: 'header',
    width: 48,
    renderCell: (params) => (
      <CustomCellMenu
        icon={<MenuIcon width={24} height={24} />}
        menuWidth="200px"
        iconBtnDimensions={{ width: '48px', height: '48px', right: '8px' }}
        userId={params.row.id}
        userEmail={params.row.email}
        isThreeDotsMenu={true}
        renderChildren={(deactivateUsersFunction, copyUserEmail) => (
          <Box>
            <MenuItemWrapper onClick={copyUserEmail}>
              <Typography>Copy email</Typography>
            </MenuItemWrapper>
            <MenuItemWrapper onClick={deactivateUsersFunction}>
              <Typography>Deactivate user</Typography>
            </MenuItemWrapper>
          </Box>
        )}
      ></CustomCellMenu>
    )
  }
]

import { useEffect, type FC, useState } from 'react'
import { NavLink } from 'react-router-dom'

import {
  type LicenseExpiringType,
  type LicenseUnusedType
} from '../../store/reducers/fetchDataReducer/fetchDataReducer'
import { useAppDispatch, useTypedSelector } from '../../hooks/redux'
import {
  setActiveIndex,
  setActiveLicenseName,
  setExpiringLicenses,
  setIsExpiringTabActive,
  setIsModalOpen,
  setUnusedLicenses
} from '../../store/reducers/dashboardReducer'
import { restructureExpiringLicenses } from '../../helpers/restructureExpiringLicenses'
import { getDashboardLicensesState } from '../../store/reducers/dashboardReducer/selectors'
import { restructureUnusedLicenses } from '../../helpers/restructureUnusedLicenses'
import { deleteLicense } from '../../store/actionCreators/deleteLicense'

import MoreBtnMenu from '../MoreBtnMenu'
import ButtonGroup from '@mui/material/ButtonGroup'
import { Article } from '../Doughnut/styled'
import Grid from '@mui/material/Unstable_Grid2'
import CustomModal from '../Modal'
import { Typography } from '@mui/material'
import * as S from './styled'
import MenuIcon from '../../assets/icons/MenuIcon'

interface Props {
  dataExpiring: LicenseExpiringType[]
  dataUnused: LicenseUnusedType[]
}

const Licenses: FC<Props> = ({ dataExpiring, dataUnused }): JSX.Element => {
  const dispatch = useAppDispatch()

  const {
    activeIndex,
    activeLicenseName,
    isModalOpen,
    expiring: expiringLicenses,
    unused: unusedLicenses,
    isExpiringTabActive
  } = useTypedSelector(getDashboardLicensesState)
  const activeTabData = isExpiringTabActive ? expiringLicenses : unusedLicenses

  const [anchorEl, setAnchorEl] = useState<Record<string, HTMLElement>>({})
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, index: number): void => {
    setAnchorEl({ [index]: event.currentTarget })
  }
  const handleClose = (): void => {
    setAnchorEl({})
  }

  useEffect(() => {
    dispatch(setExpiringLicenses(restructureExpiringLicenses(dataExpiring)))
    dispatch(setUnusedLicenses(restructureUnusedLicenses(dataUnused)))
  }, [dataExpiring, dataUnused, dispatch])

  return (
    <Article>
      <Typography variant="smallTextMedium" sx={{ mb: '12px' }}>
        Licenses
      </Typography>

      <ButtonGroup>
        <S.ButtonItem
          onClick={() => dispatch(setIsExpiringTabActive(true))}
          isActive={isExpiringTabActive}
          sx={{ width: '94px' }}
        >
          <Typography variant="caption" textTransform="capitalize">
            Expiring
          </Typography>
        </S.ButtonItem>

        <S.ButtonItem
          onClick={() => dispatch(setIsExpiringTabActive(false))}
          isActive={!isExpiringTabActive}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '96px'
          }}
        >
          <Typography variant="caption" textTransform="capitalize">
            Unused
          </Typography>
          <Typography variant="caption" color={'#627A86'}>
            {unusedLicenses.length}
          </Typography>
        </S.ButtonItem>
      </ButtonGroup>

      <S.Container>
        {activeTabData.map((license, index) => {
          const open = Boolean(anchorEl?.[index])

          return (
            <Grid
              container
              alignItems={'center'}
              lg={12}
              key={license.name}
              sx={{ height: '48px', padding: 0, borderBottom: '1px solid #E8EDED' }}
            >
              <Grid
                xs={isExpiringTabActive ? 6 : 9}
                sx={{ display: 'flex', justifyContent: 'space-between', height: '100%' }}
              >
                <S.License>{license.name}</S.License>

                <Typography variant="smallTextMedium" alignSelf="center">
                  {license.currency}
                  {license.cost.toLocaleString()}
                </Typography>
              </Grid>

              <Grid
                xs={isExpiringTabActive ? 6 : 3}
                sx={{ display: 'flex', justifyContent: 'space-between', height: '100%' }}
              >
                <S.Duration>{license.durationAndUnit}</S.Duration>

                <Grid sx={{ display: 'flex', alignItems: 'center' }}>
                  {isExpiringTabActive && (
                    <S.ExpireDate
                      sx={{ height: '100%', display: 'flex', alignItems: 'center' }}
                      bgcolor={license?.color}
                      restpercents={license?.restPercents ?? 0}
                    >
                      {license?.expiresOn}
                    </S.ExpireDate>
                  )}
                  <MoreBtnMenu
                    offsetX={-10}
                    icon={<MenuIcon width={24} height={24} />}
                    open={open}
                    handleClick={(e) => {
                      handleClick(e, index)
                      dispatch(setActiveIndex(license.id))
                      dispatch(setActiveLicenseName(license.name))
                    }}
                    handleClose={handleClose}
                    anchorEl={anchorEl?.[index] ?? null}
                  >
                    <NavLink
                      to={`/licenses/${license.name.toLowerCase().replace(/ /g, '-')}`}
                      style={{ textDecoration: 'none' }}
                      onClick={() => {
                        handleClose()
                      }}
                    >
                      <S.StyledMenuItem
                        onClick={() => {
                          handleClose()
                        }}
                        sx={{ color: '#252E32' }}
                      >
                        Edit
                      </S.StyledMenuItem>
                    </NavLink>
                    <S.StyledMenuItem
                      onClick={() => {
                        handleClose()
                        dispatch(setIsModalOpen(true))
                      }}
                      sx={{ color: '#E72565' }}
                    >
                      Delete
                    </S.StyledMenuItem>
                  </MoreBtnMenu>
                </Grid>
              </Grid>
            </Grid>
          )
        })}
        <CustomModal
          isModalOpen={isModalOpen}
          licenseName={activeLicenseName}
          handleClose={() => {
            dispatch(setIsModalOpen(false))
          }}
          deleteLicense={() => {
            dispatch(
              deleteLicense({
                id: activeIndex,
                dispatch
              })
            )
          }}
        />
      </S.Container>
    </Article>
  )
}

export default Licenses

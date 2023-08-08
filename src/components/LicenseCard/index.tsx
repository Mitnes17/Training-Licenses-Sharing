import { Box, Typography } from '@mui/material'
import { useAppDispatch } from '../../hooks/redux'
import { deleteLicense } from '../../store/actionCreators/deleteLicense'
import CardStatus from './CardStatus'
import * as S from './styled'
import BorderLinearProgress from './BorderLinearProgress'
import {
  transformDateString,
  calculateDateProgress,
  getProgressColor
} from '../../helpers/LicenseCardHelpers'
import { type LicenseType } from '../../store/reducers/fetchDataReducer/fetchDataReducer'
import MoreBtnMenu from '../MoreBtnMenu'
import { useState } from 'react'
import * as S2 from '../Licenses/styled'
import CustomModal from '../Modal'
import MenuIcon from '../../assets/icons/MenuIcon'

const LicenseCard: React.FC<LicenseType> = ({
  id,
  name,
  description,
  logo,
  cost,
  licenseDuration,
  expiresOn,
  seatsTotal,
  seatsAvailable,
  isActive
}) => {
  const dispatch = useAppDispatch()
  const transformedDate = transformDateString(expiresOn)
  const progress = calculateDateProgress(licenseDuration, expiresOn)
  const progressColor = getProgressColor(progress)
  const [anchorEl, setAnchorEl] = useState<HTMLElement | undefined>()
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeLicenseName, setActiveLicenseName] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = (): void => {
    setAnchorEl(undefined)
  }
  const open = Boolean(anchorEl)
  return (
    <S.LicenseCardStyled>
      <S.LogoWrapperStyled>
        <img src={logo} alt="" />
      </S.LogoWrapperStyled>
      <S.LicenseCardContentWrapper>
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
            <Typography variant="h6">{name}</Typography>
            <MoreBtnMenu
              offsetX={-10}
              icon={<MenuIcon width={24} height={24} />}
              open={open}
              handleClick={(e) => {
                handleClick(e)
                setActiveIndex(id)
                setActiveLicenseName(name)
              }}
              handleClose={handleClose}
              anchorEl={anchorEl ?? undefined}
            >
              <S2.StyledMenuItem
                onClick={() => {
                  handleClose()
                }}
              >
                Edit
              </S2.StyledMenuItem>
              <S2.StyledMenuItem
                onClick={() => {
                  handleClose()
                  setIsModalOpen(true)
                }}
                sx={{ color: '#E72565' }}
              >
                Delete
              </S2.StyledMenuItem>
            </MoreBtnMenu>
            <CustomModal
              isModalOpen={isModalOpen}
              licenseName={activeLicenseName}
              handleClose={() => {
                setIsModalOpen(false)
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
          </Box>
          <S.LicenseDescriptionStyled>
            <Typography variant="smallText" sx={{ color: '#3C4A52' }}>
              {description?.length > 133 ? `${description.slice(0, 133)}...` : description}{' '}
              <span style={{ color: '#0B5999', cursor: 'pointer' }}> More</span>
            </Typography>
          </S.LicenseDescriptionStyled>
          <Typography variant="smallText"></Typography>
        </Box>
        <Box>
          <Box sx={{ display: 'flex', gap: '4px' }}>
            <Typography variant="smallTextMedium">${cost}</Typography>
            <Typography variant="smallText" sx={{ color: '#627A86' }}>
              /{licenseDuration} months
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: '4px' }}>
            <Typography variant="smallTextMedium">
              {seatsAvailable} of {seatsTotal}{' '}
            </Typography>
            <Typography variant="smallText" sx={{ color: '#627A86' }}>
              seats avail.
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '21px' }}>
            <CardStatus isActive={isActive} />
            <span>
              <Typography variant="smallText" sx={{ color: '#627A86' }}>
                Exp. Date{' '}
              </Typography>
              <Typography variant="smallTextMedium">{transformedDate}</Typography>
            </span>
          </Box>
          <Box sx={{ marginTop: '21px' }}>
            <BorderLinearProgress
              variant="determinate"
              value={progress}
              progressColor={progressColor}
            />
          </Box>
        </Box>
      </S.LicenseCardContentWrapper>
    </S.LicenseCardStyled>
  )
}

export default LicenseCard

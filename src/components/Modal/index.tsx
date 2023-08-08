import { type FC } from 'react'

import Backdrop from '@mui/material/Backdrop'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import { Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import CloseIcon from '../../assets/icons/CloseIcon'
import * as S from './styled'

interface Props {
  isModalOpen: boolean
  handleClose: () => void
  deleteLicense: () => void
  licenseName: string
}

const CustomModal: FC<Props> = ({
  isModalOpen,
  handleClose,
  deleteLicense,
  licenseName
}): JSX.Element => {
  return (
    <Modal
      open={isModalOpen}
      closeAfterTransition
      disablePortal={true}
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500
        }
      }}
    >
      <Fade in={isModalOpen}>
        <S.StyledBox>
          <Grid2 justifyContent={'space-between'} flexDirection={'row'} display={'flex'}>
            <Typography variant="h6">Delete license</Typography>
            <CloseIcon onClose={handleClose} width={24} height={24} />
          </Grid2>

          <Typography sx={{ mb: 2, mt: 2 }}>
            You are about to delete the license “{licenseName}”. This action cannot be undone. Are
            you sure you want to proceed?
          </Typography>

          <S.StyledButton
            variant="contained"
            onClick={() => {
              handleClose()
              deleteLicense()
            }}
          >
            <Typography variant="buttonText">Delete license</Typography>
          </S.StyledButton>
        </S.StyledBox>
      </Fade>
    </Modal>
  )
}
export default CustomModal

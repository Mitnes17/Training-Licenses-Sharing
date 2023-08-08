import { Box, Typography } from '@mui/material'
import * as S from './styled'

const CardStatus = ({ isActive }: { isActive: boolean }): JSX.Element => {
  return (
    <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <S.StatusCricleStyled isActive={isActive} />
      <Typography variant="smallTextMedium">{isActive ? 'Active' : 'Expired'} </Typography>
    </Box>
  )
}
export default CardStatus

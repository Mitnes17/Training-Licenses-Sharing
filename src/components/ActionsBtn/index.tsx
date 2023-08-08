import { type FC } from 'react'

import { Typography } from '@mui/material'
import { ActionsButton } from './styled'
import ExpandMoreIcon from '../../assets/icons/ExpandMoreIcon'

export interface Props {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  isOpen: boolean
  isDisabled: boolean
}

const ActionsBtn: FC<Props> = ({ handleClick, isDisabled, isOpen }): JSX.Element => {
  return (
    <ActionsButton variant="contained" onClick={handleClick} isOpen={isOpen} disabled={isDisabled}>
      <Typography variant="smallTextMedium" sx={{ textTransform: 'capitalize' }}>
        Actions
      </Typography>
      <ExpandMoreIcon width={24} height={24} fill="#899CA5" transform={isOpen ? 'rotate(180)' : 'rotate(0)'} />
    </ActionsButton>
  )
}
export default ActionsBtn

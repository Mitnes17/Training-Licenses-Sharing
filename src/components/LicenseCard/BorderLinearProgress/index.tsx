import { LinearProgress, type LinearProgressProps, linearProgressClasses } from '@mui/material'

import { styled } from '@mui/material/styles'

interface StyledLinearProgressProps extends LinearProgressProps {
  progressColor: string
}

const BorderLinearProgress = styled(LinearProgress, {
  shouldForwardProp: (prop) => prop !== 'progressColor'
})<StyledLinearProgressProps>(({ progressColor }) => ({
  borderRadius: 5,
  height: 8,
  backgroundColor: '#E8EDED',
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: progressColor
  }
}))

export default BorderLinearProgress

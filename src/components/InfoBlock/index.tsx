import { type FC } from 'react'
import Badge from '../Badge'
import { Typography } from '@mui/material'

interface InfoBlockProps {
  title: string
  value: string | number
  badgeColor?: string
  badgeBgColor?: string
  badgeContent: number | null | string
  prefix: string
}

const InfoBlock: FC<InfoBlockProps> = ({
  title,
  value,
  badgeContent,
  badgeColor,
  badgeBgColor,
  prefix
}): JSX.Element => {
  return (
    <div>
      <Typography variant="smallText">{title}</Typography>
      <Typography variant="h3" sx={{ mb: '14px' }}>
        {prefix}
        {value}
        <Badge
          badgeContent={badgeContent}
          color={badgeColor}
          bgColor={badgeBgColor}
          prefix={prefix}
        />
      </Typography>
    </div>
  )
}

export default InfoBlock

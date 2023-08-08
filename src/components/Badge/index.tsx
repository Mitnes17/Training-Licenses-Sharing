import { type FC } from 'react'

import { useBadgeColor } from '../../hooks/useBadgeColor'

import * as S from './styled'
import { Typography } from '@mui/material'

export interface BadgeProps {
  badgeContent: number | null | string
  color?: string
  bgColor?: string
  prefix: string
}

const Badge: FC<BadgeProps> = ({ badgeContent, color, bgColor, prefix }): JSX.Element => {
  const { colorBadge, bgColorBadge, isDisplay, isPositive } = useBadgeColor({
    badgeContent,
    color,
    bgColor,
    prefix
  })

  return (
    <Typography variant="caption">
      <S.Badge color={colorBadge} bgColor={bgColorBadge} isDisplay={isDisplay}>
        <Typography variant="caption">
          {isPositive && '+'}
          {prefix}
          {badgeContent}
        </Typography>
      </S.Badge>
    </Typography>
  )
}

export default Badge

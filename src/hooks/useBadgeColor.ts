import { type BadgeProps } from '../components/Badge'

interface useBadgeColorTypes {
  colorBadge: string
  bgColorBadge: string
  isDisplay: boolean
  isPositive: boolean
}

export const useBadgeColor = ({ badgeContent, color, bgColor }: BadgeProps): useBadgeColorTypes => {
  const isDisplay = Boolean(badgeContent)
  const isPositive = isDisplay && Number(badgeContent) >= 0
  const colorTemp = isPositive ? '#356823' : '#87134F'
  const bgColorTemp = isPositive ? '#ddedca' : '#F8C4D5'

  return {
    colorBadge: color ?? colorTemp,
    bgColorBadge: bgColor ?? bgColorTemp,
    isDisplay,
    isPositive
  }
}

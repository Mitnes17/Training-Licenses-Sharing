export function calculateDateProgress (licenseDurationInMonths: number, expiryDateString: string): number {
  const today = new Date()
  const [expiryDay, expiryMonth, expiryYear] = expiryDateString.split('-')
  const expiryDateAsDate = new Date(Number(expiryYear), Number(expiryMonth) - 1, Number(expiryDay))
  const initialDate = new Date(
    expiryDateAsDate.setMonth(expiryDateAsDate.getMonth() - licenseDurationInMonths)
  )

  const timeDelta: number = today.getTime() - initialDate.getTime()
  const millisecondsInMonth = 30 * 24 * 60 * 60 * 1000 // Approximate number of milliseconds in a month

  let progressPercentage = (timeDelta / (licenseDurationInMonths * millisecondsInMonth)) * 100
  progressPercentage = Math.max(progressPercentage, 0) // Ensure progressPercentage is never below zero
  progressPercentage = Math.min(progressPercentage, 100) // Ensure progressPercentage is never above 100
  progressPercentage = Math.round(progressPercentage)

  return 100 - progressPercentage
}

export const getProgressColor = (progress: number): string => {
  if (progress > 50) {
    return '#7EB24A'
  }
  if (progress > 20) {
    return '#FDB22B'
  }
  return '#D62162'
}

export function transformDateString (dateString: string): string {
  const [day, month, year] = dateString.split('-')
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]

  const transformedDateString = `${day} ${months[parseInt(month) - 1]} ${year}`
  return transformedDateString
}

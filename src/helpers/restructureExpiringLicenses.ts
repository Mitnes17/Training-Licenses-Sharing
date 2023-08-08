import { type LicenseData } from '../store/reducers/dashboardReducer/dashboard'
import { type LicenseExpiringType } from '../store/reducers/fetchDataReducer/fetchDataReducer'

export const months: Record<string, string> = {
  1: 'Jan',
  2: 'Feb',
  3: 'Mar',
  4: 'Apr',
  5: 'May',
  6: 'Jun',
  7: 'Jul',
  8: 'Aug',
  9: 'Sep',
  10: 'Oct',
  11: 'Nov',
  12: 'Dec'
}

export enum Colors {
  GREEN = '#f1f8ea',
  RED = '#fdedf2',
  ORANGE = '#fff8e2',
}

export enum DurationUnit {
  MONTH = 1,
  MONTHS = 1,
  YEAR = 12,
  YEARS = 12,
}

export const restructureExpiringLicenses = (data: LicenseExpiringType[]): LicenseData[] => {
  return data.map((license) => {
    const [year, month, day] = license.expiresOn.split('-')
    const nowDate = new Date()
    const expiresDate = new Date(license.expiresOn)
    const initialDate = new Date(
      expiresDate.getFullYear(),
      expiresDate.getMonth() -
        license.licenseDuration * DurationUnit[license.durationUnit as keyof typeof DurationUnit],
      expiresDate.getDate()
    )
    const restPercents = Math.abs(
      (nowDate.getTime() - expiresDate.getTime()) / (expiresDate.getTime() - initialDate.getTime())
    )
    let color = Colors.GREEN

    if (restPercents < 0.5) color = Colors.ORANGE
    if (restPercents < 0.2) color = Colors.RED

    return {
      id: license.id,
      name: license.name,
      cost: license.cost,
      durationAndUnit:
        license.licenseDuration?.toString() + ' ' + license.durationUnit?.toLowerCase(),
      expiresOn: day + ' ' + months[Number(month)] + ' ' + year,
      currency: '$',
      color,
      restPercents
    }
  })
}

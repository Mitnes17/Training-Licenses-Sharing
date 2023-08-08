import { type LicenseData } from '../store/reducers/dashboardReducer/dashboard'
import { type LicenseUnusedType } from './../store/reducers/fetchDataReducer/fetchDataReducer.d'

export const restructureUnusedLicenses = (data: LicenseUnusedType[]): LicenseData[] =>
  data?.map((license) => ({
    id: license.id,
    name: license.name,
    cost: license.cost,
    durationAndUnit: license.period?.toString() + ' ' + license.durationUnit?.toLowerCase(),
    currency: '$',
    color: ''
  }))

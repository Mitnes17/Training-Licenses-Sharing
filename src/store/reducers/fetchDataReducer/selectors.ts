import {
  type LicenseExpiringType,
  type LicenseUnusedType,
  type CostsOverviewInterface,
  type AverageCostsType,
  type LicenseType,
  type UsersType,
  type UserRoleType
} from './fetchDataReducer.d'

import { type RootState } from './../../index'
import { type DoughnutType } from './fetchDataReducer'

export const getDashboardDoughnutData = (state: RootState): DoughnutType =>
  state.data.data.doughnut.data
export const getDashboardCostOverviewData = (state: RootState): CostsOverviewInterface =>
  state.data.data.costsOverview.data
export const getDashboardAvgCostData = (state: RootState): AverageCostsType =>
  state.data.data.averageCosts.data
export const getDashboardLicensesExpiring = (state: RootState): LicenseExpiringType[] =>
  state.data.data.licensesExpiring.data
export const getDashboardLicensesUnused = (state: RootState): LicenseUnusedType[] =>
  state.data.data.licensesUnused.data
export const getLicensesData = (state: RootState): LicenseType[] => state.data.data.licenses.data
export const getUsersData = (state: RootState): UsersType[] => state.data.data.users.data
export const getUserRoleOptions = (state: RootState): UserRoleType[] => state.data.data.roles.data

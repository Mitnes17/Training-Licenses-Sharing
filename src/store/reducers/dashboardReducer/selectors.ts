import { type costsOverviewData, type AverageCostsData, type LicensesInterface } from './dashboard.d'
import { type RootState } from '../..'
import { type DoughnutData } from './dashboard'

export const getDashboardDoughnutRestructuredData = (state: RootState): DoughnutData => state.dashboard.doughnutData
export const getDashboardCostOverviewRestructuredData = (state: RootState): costsOverviewData => state.dashboard.costsOverviewData
export const getDashboardAvgCostRestructuredData = (state: RootState): AverageCostsData => state.dashboard.averageCostData
export const getDashboardLicensesState = (state: RootState): LicensesInterface => state.dashboard.licenses

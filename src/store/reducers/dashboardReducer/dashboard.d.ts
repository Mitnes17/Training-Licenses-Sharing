interface Infoblocks {
  title: string
  value: number | string
  content: number | string | null
  prefix: string
}

interface Disciplines {
  id: number
  label: string
  value: number
  color: string
}

export interface DoughnutData {
  totalUsers: Infoblocks
  totalDisciplines: Infoblocks
  disciplines: Disciplines[]
}

export interface LicensesInterface {
  expiring: LicenseData[]
  unused: LicenseData[]
  isExpiringTabActive: boolean
  isModalOpen: boolean
  activeIndex: number
  activeLicenseName: string
  anchorEl: Record<number, HTMLElement>
}

type ButtonReference = Record<number, HTMLElement>

interface DashboardState {
  doughnutData: DoughnutData
  costsOverviewData: costsOverviewData
  averageCostData: AverageCostsData
  licenses: LicensesInterface
}

export interface costsOverviewData {
  barChart: Array<{ month: string, cost: number }>
  infoblocks: Infoblocks[]
}

export interface AverageCostsData {
  averageCostInfo: Infoblocks
  barChart: Array<{ id: number, discipline: string, cost: number }>
}

export interface LicenseData {
  id: number
  name: string
  cost: number
  currency: string
  durationAndUnit: string
  color: string
  expiresOn?: string
  restPercents?: number
}

import { type BarDatum } from '@nivo/bar'
interface Discipline {
  name: string
  usersCount: number
}

export interface DoughnutAvgDisciplineType {
  id: number
  name: string
  value: number
}

export interface DoughnutType {
  totalUsers: number
  deltaUsers: number
  totalDisciplines: number
  numberOfUsersPerDiscipline: DoughnutAvgDisciplineType[]
}

interface CostsOverviewType extends BarDatum {
  month: number
  cost: number
  year: number
}

export interface TitlesType {
  title: string
  value: number
  badgeContent: number | null
}

export interface LicenseUnusedType {
  id: number
  name: string
  cost: number
  period: number
  durationUnit: string
}

export interface LicenseExpiringType extends LicenseUnusedType {
  expiresOn: string
  licenseDuration: number
}
interface CredentialType {
  username: string
  password: string
}

enum LicenceType {
  'TRAINING',
  'SOFTWARE',
}

export interface LicenseType {
  id: number
  name: string
  website: string
  licenseType: LicenceType.TRAINING | LicenceType.SOFTWARE
  description: string
  logo: string
  cost: number
  currency: 'USD'
  licenseDuration: number
  expiresOn: string
  isRecurring: boolean
  seatsTotal: number
  seatsAvailable: number
  credentials: CredentialType[]
  isActive: boolean
}

export interface DataState {
  data: {
    doughnut: { data: DoughnutType, isLoading: boolean, error: string }
    costsOverview: {
      data: CostsOverviewInterface
      isLoading: boolean
      error: string
    }
    averageCosts: { data: AverageCostsType, isLoading: boolean, error: string }
    licensesExpiring: { data: LicenseExpiringType[], isLoading: boolean, error: string }
    licensesUnused: { data: LicenseUnusedType[], isLoading: boolean, error: string }
    licenses: { data: LicenseType[] | [], isLoading: boolean, error: string }
    users: { data: UsersType[], isLoading: boolean, error: string }
    roles: { data: UserRoleType[], isLoading: boolean, error: string }
  }
}

export interface UsersType {
  id: number
  name: string
  companyRole: string
  discipline: string
  deliveryUnit: string
  lastActiveTime: number
  lastActivePeriod: string
  status: 'ACTIVE' | 'INACTIVE' | 'DEACTIVATED'
  role: 'Admin' | 'Reviewer' | 'User'
  email: string
}

export interface CostsOverviewInterface {
  costsReport: CostsOverviewType[]
  costsForCurrentYear: number
  deltaCosts: number
  numberOfSoftware: number
  deltaSoftware: number
  numberOfTrainings: number
  deltaTrainings: number
}

export interface FetchDataPayload {
  field: keyof DataState['data']
  link: string
}

export interface AverageCostsType {
  averageCostPerUser: number
  averageCostPerDepartmentsMap: DoughnutAvgDisciplineType[]
}

export interface UserRoleType {
  id: number
  name: string
  description: string
}

interface addLicenseInterface {
  name: string
  website: string
  licenseType: 'training' | 'software'
  description: string
  logo: number[]
  cost: number
  currency: string
  licenseDuration: number
  expiresOn: string
  isRecurring: boolean
  seatsTotal: number
  credentials: credentials
  [key: string]: string | number | 'training' | 'software' | number[] | boolean | credentials
}

type credentials = Array<{
  username: string
  password: string
}>

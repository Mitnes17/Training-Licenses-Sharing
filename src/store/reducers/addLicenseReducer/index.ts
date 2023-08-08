import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: addLicenseInterface = {
  name: '',
  website: '',
  licenseType: 'training',
  description: '',
  logo: [],
  cost: 0,
  currency: 'USD',
  licenseDuration: 0,
  expiresOn: '',
  isRecurring: false,
  seatsTotal: 0,
  credentials: [
    {
      username: '',
      password: ''
    }
  ]
}

const addLicenseSlice = createSlice({
  name: 'addLicense',
  initialState,
  reducers: {
    setField: (
      state,
      { payload: { field, data } }: PayloadAction<{ field: string, data: string | number }>
    ) => {
      state[field] = data
    }
  }
})

export { addLicenseSlice }
export default addLicenseSlice.reducer

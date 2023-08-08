import { createSlice } from '@reduxjs/toolkit'

import { fetchData } from '../../actionCreators/fetchData'
import { type DataState } from './fetchDataReducer'

const initialState: DataState = {
  data: {
    doughnut: {
      data: {
        totalUsers: 0,
        deltaUsers: 0,
        totalDisciplines: 0,
        numberOfUsersPerDiscipline: []
      },
      isLoading: false,
      error: ''
    },

    costsOverview: {
      data: {
        costsReport: [],
        costsForCurrentYear: 0,
        deltaCosts: 0,
        numberOfSoftware: 0,
        deltaSoftware: 0,
        numberOfTrainings: 0,
        deltaTrainings: 0
      },
      isLoading: false,
      error: ''
    },

    averageCosts: {
      data: {
        averageCostPerUser: 0,
        averageCostPerDepartmentsMap: []
      },
      isLoading: false,
      error: ''
    },

    licensesExpiring: { data: [], isLoading: false, error: '' },

    licensesUnused: { data: [], isLoading: false, error: '' },

    licenses: {
      data: [],
      isLoading: false,
      error: ''
    },

    users: {
      data: [],
      isLoading: false,
      error: ''
    },

    roles: {
      data: [],
      isLoading: false,
      error: ''
    }
  }
}

const fetchDataSlice = createSlice({
  name: 'fetchData',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state, action) => {
        const { field } = action.meta.arg

        state.data[field].isLoading = true
      })

      .addCase(fetchData.fulfilled, (state, action) => {
        const { field, data } = action.payload

        state.data[field].isLoading = false
        state.data[field].data = data
      })

      .addCase(fetchData.rejected, (state, action) => {
        const { field } = action.meta.arg

        state.data[field].isLoading = false
        state.data[field].error = action.error as string
      })
  }
})

export default fetchDataSlice.reducer

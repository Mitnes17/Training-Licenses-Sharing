import { type LicenseData, type AverageCostsData, type costsOverviewData } from './dashboard.d'
import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type DoughnutData, type DashboardState } from './dashboard'

const initialState: DashboardState = {
  doughnutData: {
    disciplines: [],
    totalDisciplines: {
      title: 'Total Users',
      value: 0,
      content: '',
      prefix: ''
    },
    totalUsers: {
      title: 'Disciplines',
      value: 0,
      content: null,
      prefix: ''
    }
  },

  costsOverviewData: {
    barChart: [],
    infoblocks: []
  },

  averageCostData: {
    averageCostInfo: {
      title: '',
      value: 0,
      content: '/1 year',
      prefix: ''
    },
    barChart: []
  },

  licenses: {
    expiring: [],
    unused: [],
    isExpiringTabActive: true,
    isModalOpen: false,
    activeIndex: 0,
    activeLicenseName: '',
    anchorEl: {}
  }
}

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setIsExpiringTabActive: (state, action: PayloadAction<boolean>) => {
      state.licenses.isExpiringTabActive = action.payload
    },

    setDoughnutData: (state, action: PayloadAction<DoughnutData>) => {
      state.doughnutData = action.payload
    },

    setCostsOverviewData: (state, action: PayloadAction<costsOverviewData>) => {
      state.costsOverviewData = action.payload
    },

    setAverageCostData: (state, action: PayloadAction<AverageCostsData>) => {
      state.averageCostData = action.payload
    },

    setExpiringLicenses: (state, action: PayloadAction<LicenseData[]>) => {
      state.licenses.expiring = action.payload
    },

    setUnusedLicenses: (state, action: PayloadAction<LicenseData[]>) => {
      state.licenses.unused = action.payload
    },

    setIsModalOpen: (state, action: PayloadAction<boolean>) => {
      state.licenses.isModalOpen = action.payload
    },

    setActiveIndex: (state, action: PayloadAction<number>) => {
      state.licenses.activeIndex = action.payload
    },

    setActiveLicenseName: (state, action: PayloadAction<string>) => {
      state.licenses.activeLicenseName = action.payload
    }

  }
})

export const {
  setIsExpiringTabActive,
  setDoughnutData,
  setCostsOverviewData,
  setAverageCostData,
  setExpiringLicenses,
  setUnusedLicenses,
  setIsModalOpen,
  setActiveIndex,
  setActiveLicenseName
} = dashboardSlice.actions

export default dashboardSlice.reducer

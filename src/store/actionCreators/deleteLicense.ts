import axios from 'axios'

import { fetchData } from './fetchData'
import { type AnyAction, type ThunkDispatch, createAsyncThunk } from '@reduxjs/toolkit'
import { type RootState } from '..'
import { avgCostsUrl, costsOverviewUrl, licensesExpiringUrl, licensesUnusedUrl, licensesUrl } from '../../API'

interface deleteLicenseInterface {
  id: number
  dispatch: ThunkDispatch<RootState, void, AnyAction>
}

export const deleteLicense = createAsyncThunk(
  'store/deleteLicense',
  ({ id, dispatch }: deleteLicenseInterface) =>
    axios
      .delete(`${licensesUrl}/${id}`)
      .then(() =>
        Promise.all([
          dispatch(fetchData({ link: costsOverviewUrl, field: 'costsOverview' })),
          dispatch(fetchData({ link: avgCostsUrl, field: 'averageCosts' })),
          dispatch(fetchData({ link: licensesExpiringUrl, field: 'licensesExpiring' })),
          dispatch(fetchData({ link: licensesUnusedUrl, field: 'licensesUnused' })),
          dispatch(fetchData({ link: licensesUrl, field: 'licenses' }))
        ])
      )
)

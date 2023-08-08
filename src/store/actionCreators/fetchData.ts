import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { type FetchDataPayload } from '../reducers/fetchDataReducer/fetchDataReducer'

export const fetchData = createAsyncThunk('store/fetchData', ({ link, field }: FetchDataPayload, thunkAPI) => axios
  .get(link)
  .then(response => ({ data: response.data, field }))
  .catch((error) => {
    console.error(error)
    return thunkAPI.rejectWithValue({ field, error: error.message })
  })
)

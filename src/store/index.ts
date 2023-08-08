import { combineReducers, configureStore } from '@reduxjs/toolkit'

import fetchDataReducer from './reducers/fetchDataReducer'
import dashboardReducer from './reducers/dashboardReducer'
import usersReducer from './reducers/usersReducer'

const rootReducer = combineReducers({
  data: fetchDataReducer,
  dashboard: dashboardReducer,
  users: usersReducer
})

export const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

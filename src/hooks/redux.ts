import { type TypedUseSelectorHook, useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { type AppDispatch, type RootState } from '../store'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = useDispatch<AppDispatch>

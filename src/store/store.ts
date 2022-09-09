import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'

import ipSlice from './slices/ip.slice'

export const store = configureStore({
  reducer: {
    ipSlice
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>

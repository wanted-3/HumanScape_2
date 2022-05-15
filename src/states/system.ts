import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '.'

export interface SystemState {
  temp?: string
}

const INITIAL_STATE: SystemState = {}

const systemSlice = createSlice({
  name: 'system',
  initialState: INITIAL_STATE,
  reducers: {},
})

export const {} = systemSlice.actions

export default systemSlice.reducer

// Selector =====================

export const getTheme = (state: RootState): string => ''

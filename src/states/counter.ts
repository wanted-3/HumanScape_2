import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '.'

export interface SystemState {
  value: number
}

const INITIAL_STATE: SystemState = {
  value: 0,
}

const systemSlice = createSlice({
  name: 'counter',
  initialState: INITIAL_STATE,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = systemSlice.actions

export default systemSlice.reducer

// Selector =====================

export const selectCount = (state: RootState) => state.counter.value

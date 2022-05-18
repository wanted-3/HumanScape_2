import { createSlice } from '@reduxjs/toolkit'

import type { RootState } from '.'

export interface SystemState {
  value: string
}

const INITIAL_STATE: SystemState = {
  value: '',
}

const systemSlice = createSlice({
  name: 'search',
  initialState: INITIAL_STATE,
  reducers: {
    searchState: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { searchState } = systemSlice.actions

export default systemSlice.reducer

export const selectSearch = (state: RootState) => state.search.value

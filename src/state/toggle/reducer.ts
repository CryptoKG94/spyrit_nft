import { createReducer } from '@reduxjs/toolkit'
import { setToggle } from './actions'

export interface toggleState {
  readonly toggle: boolean
}

const initialState: toggleState = {
  toggle: false
}

export default createReducer<toggleState>(initialState, builder =>
  builder
    .addCase(setToggle, (state, { payload: { toggle } }) => {
      state.toggle = toggle
    })
)

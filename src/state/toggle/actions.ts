import { createAction } from '@reduxjs/toolkit'

export const setToggle = createAction<{ toggle: boolean }>('to/setToggle')


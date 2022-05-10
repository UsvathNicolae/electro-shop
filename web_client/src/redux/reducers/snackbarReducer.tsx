/* eslint-disable no-unused-expressions */
import { Action, createSlice } from "@reduxjs/toolkit"

interface SnackBarState {
  message: string
  success: boolean
  isOpen: boolean
}

interface SnackBarPayload {
  message: string
  success: boolean
}

const initialState: SnackBarState = {
  message: "",
  success: true,
  isOpen: false,
}

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    setOpen(state, action) {
      ;(state.message = action.payload.message),
        (state.success = action.payload.success),
        (state.isOpen = true)
    },
    setClose(state) {
      state.isOpen = false
    },
  },
})

export const { setOpen, setClose } = snackbarSlice.actions
export default snackbarSlice.reducer

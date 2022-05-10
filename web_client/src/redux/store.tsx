import { compose } from "redux"
import { configureStore } from "@reduxjs/toolkit"

import cartReducer from "./reducers/cartReducer"
import snackbarReducer from "./reducers/snackbarReducer"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    snackBar: snackbarReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

import { compose } from "redux"
import { configureStore } from "@reduxjs/toolkit"

import cartReducer from "./reducers/cartReducer"
import snackbarReducer from "./reducers/snackbarReducer"
import usernameReducer from "./reducers/usernameReducer"
import roleReducer from "./reducers/roleReducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    snackBar: snackbarReducer,
    username: usernameReducer,
    role: roleReducer
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

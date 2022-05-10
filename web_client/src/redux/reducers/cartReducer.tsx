import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    itemAdded(state, action) {},
    itemRemoved(state, action) {},
    incrementItem(state, action) {},
    decrementItem(state, action) {},
  },
})

export const { itemAdded, itemRemoved } = cartSlice.actions
export default cartSlice.reducer

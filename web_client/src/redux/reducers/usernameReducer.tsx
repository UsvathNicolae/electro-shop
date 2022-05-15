import { createSlice } from "@reduxjs/toolkit"

const user = createSlice({
    name: "user",
    initialState: {
        username: ''
    },
    reducers: {
        itemAdded(state, action) {
            (state.username = action.payload.username)
        },
    },
})

export const { itemAdded } = user.actions
export default user.reducer

import { createSlice } from "@reduxjs/toolkit"

const role = createSlice({
    name: "role",
    initialState: {
        role: ''
    },
    reducers: {
        addRole(state, action) {
            (state.role = action.payload.role)
        },
    },
})

export const { addRole } = role.actions
export default role.reducer

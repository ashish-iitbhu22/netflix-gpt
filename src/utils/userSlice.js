import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoggedIn: false,
        user: null,
    },
    reducers: {
        addUser: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload;
        },
        removeUser: (state) => {
            state.isLoggedIn = false;
            state.user = null;
        },
    },
})

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
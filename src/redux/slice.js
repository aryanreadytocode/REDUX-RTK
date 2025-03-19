import { act } from "react";

const { createSlic, nanoid, createSlice } = require("@reduxjs/toolkit");

const initialState = {
    users: []
}

const Slice = createSlice({
    name: "addUsersSlice",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const data = {
                id: nanoid(),
                name: action.payload
            }
            state.users.push(data);
        },
        removeUser: (state, action) => {
            const data = state.users.filter((item) => {
                return item.id != action.payload
            })
            state.users = data
        }
    }
})

export const {addUser, removeUser} = Slice.actions;
export default Slice.reducer;

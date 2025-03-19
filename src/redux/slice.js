import { act } from "react";

const {
  createSlice,
  nanoid,
  current,
  createAsyncThunk,
} = require("@reduxjs/toolkit");

const initialState = {
  users: JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [],
  userAPIData: [],
  isLoading: false,
};

export const fetchApiUsers = createAsyncThunk("fetchApiUsers", async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  return result.json();
});

const Slice = createSlice({
  name: "addUsersSlice",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const data = {
        id: nanoid(),
        name: action.payload,
      };
      state.users.push(data);
      let userD = JSON.stringify(current(state.users));
      localStorage.setItem("users", userD);
    },
    removeUser: (state, action) => {
      const data = state.users.filter((item) => {
        return item.id != action.payload;
      });
      state.users = data;
      localStorage.removeItem("users");
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApiUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userAPIData = action.payload;
    });
  },
});

export const { addUser, removeUser } = Slice.actions;
export default Slice.reducer;

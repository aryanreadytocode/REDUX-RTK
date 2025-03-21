const { configureStore } = require("@reduxjs/toolkit");
import usersReducers from "./slice";
import todoReducer from "./todoSlice";

export const store = configureStore({
  reducer: {
    userData: usersReducers,
    todoData: todoReducer,
  },
});

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers } from "../api/userApi";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async () => await getUsers()
);

const userSlice = createSlice({
  name: "users",
  initialState: { users: [], status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default userSlice.reducer;

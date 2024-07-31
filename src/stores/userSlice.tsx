import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import "../helpers/axios.js";

const initialState = {
  user: {},
  access_token: "",
  isLoggedIn: false,
  error_message: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetState: () => initialState,
  },
  extraReducers(builder) {
    builder
      .addCase(authenticate.pending, (state) => {
        state.user = {};
        state.access_token = "";
        state.isLoggedIn = false;
        state.error_message = "";
      })
      .addCase(authenticate.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.access_token = action.payload.access_token;
        state.isLoggedIn = true;
        state.error_message = "";
        axios.defaults.headers.common = {
          Authorization: `Bearer ${action.payload.access_token}`,
        };
      })
      .addCase(authenticate.rejected, (state, action) => {
        state.error_message = "Invalid Credentials";
      });
  },
});

export const authenticate = createAsyncThunk("user/login", async (credentials) => {
  const request = await axios.post("/api/auth/sign", credentials);
  const response = await request.data;

  localStorage.setItem("access_token", response.access_token);
  return response;
});

export const { resetState } = userSlice.actions;
export default userSlice.reducer;

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const login = createAsyncThunk('auth/login', async (credentials) => {
//   const response = await axios.post('https://reqres.in/api/login', credentials);
//   localStorage.setItem('token', response.data.token); 
//   return response.data;
// });

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: { token: localStorage.getItem('token') || null, loading: false, error: null },
//   reducers: {
//     logout: (state) => { state.token = null; localStorage.removeItem('token'); },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(login.pending, (state) => { state.loading = true; state.error = null; })
//       .addCase(login.fulfilled, (state, action) => { state.loading = false; state.token = action.payload.token; })
//       .addCase(login.rejected, (state, action) => { state.loading = false; state.error = action.error.message; });
//   },
// });

// export const { logout } = authSlice.actions;
// export default authSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk('auth/login', async (credentials) => {
  await new Promise((resolve) => setTimeout(resolve, 500)); // Mô phỏng delay
  // Kiểm tra nếu có email và password (mock success)
  if (credentials.email && credentials.password) {
    const mockToken = `mock-token-${Date.now()}`; // Tạo token giả
    localStorage.setItem('token', mockToken); // Lưu token vào localStorage
    return mockToken;
  }
  throw new Error('Invalid credentials');
});

const authSlice = createSlice({
  name: 'auth',
  initialState: { token: localStorage.getItem('token') || null, loading: false, error: null },
  reducers: {
    logout: (state) => { state.token = null; localStorage.removeItem('token'); },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(login.fulfilled, (state, action) => { state.loading = false; state.token = action.payload; })
      .addCase(login.rejected, (state, action) => { state.loading = false; state.error = action.error.message; });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
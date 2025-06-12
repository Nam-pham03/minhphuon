import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('employees/fetchUsers', async ({ page, search, sort }) => {
  const response = await axios.get('https://reqres.in/api/users', {
    params: { page, q: search, sort },
  });
  return response.data;
});

export const addUser = createAsyncThunk('employees/addUser', async (user) => {
  const response = await axios.post('https://reqres.in/api/users', user);
  return response.data;
});

export const deleteUser = createAsyncThunk('employees/deleteUser', async (id) => {
  await axios.delete(`https://reqres.in/api/users/${id}`);
  return id;
});

const employeeSlice = createSlice({
  name: 'employees',
  initialState: {
    users: [],
    loading: false,
    error: null,
    searchTerm: '',
    sortBy: 'email',
    currentPage: 1,
    totalPages: 1,
  },
  reducers: {
    setSearchTerm: (state, action) => { state.searchTerm = action.payload; state.currentPage = 1; },
    setSortBy: (state, action) => { state.sortBy = action.payload; state.currentPage = 1; },
    setPage: (state, action) => { state.currentPage = action.payload; },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.data;
        state.totalPages = action.payload.total_pages;
      })
      .addCase(fetchUsers.rejected, (state, action) => { state.loading = false; state.error = action.error.message; })
      .addCase(addUser.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(addUser.fulfilled, (state, action) => { state.loading = false; state.users.push(action.payload); })
      .addCase(addUser.rejected, (state, action) => { state.loading = false; state.error = action.error.message; })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => user.id !== action.payload);
      });
  },
});

export const { setSearchTerm, setSortBy, setPage } = employeeSlice.actions;
export default employeeSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  const response = await fetch('https://api.spacexdata.com/v4/rockets');
  const data = await response.json();
  return data;
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    list: [],
  },
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.list = action.payload;
      });
  },
});

export default rocketsSlice.reducer;
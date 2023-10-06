import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSneakers = createAsyncThunk('sneakers/fetchSneakersStatus', async (params) => {
        const { sortBy, order, category, search, currentPage} = params;
        const { data } = await axios.get(
            `https://64dcc9eee64a8525a0f725c0.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`
          );
      return data;
    }
  )

const initialState = {
  items: [],
  status: 'loading',
};

const sneakersSlice = createSlice({
  name: 'sneakers',
  initialState,
  reducers: {
    setItems(state, action) {
        state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchSneakers.pending]: (state) => {
        state.status = 'loading';
        state.items = [];
    },
    [fetchSneakers.fulfilled]: (state, action) => {
        state.items = action.payload;
        state.status = 'success';
    },
    [fetchSneakers.rejected]: (state, action) => {
        state.status = 'error';
        state.items = [];
    },
  },
});

export const { setItems } = sneakersSlice.actions;

export default sneakersSlice.reducer;
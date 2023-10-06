 import { createSlice } from '@reduxjs/toolkit'
 
 const initialState = {
    searchValue: '',
    categoryId: 0,
    currentPage: 1  ,
    sort: {
        // и прописываем какие параметры будут отрисовыватся изначально для стейта сортировки
        name: 'rating',
        sortProperty: 'rating',
      }
 };

 const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId(state, action) {
            state.categoryId = action.payload;
        },
        setSort(state, action) {
            state.sort = action.payload;
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload;
        },
    }
 });

 export const {setCategoryId, setSort, setCurrentPage, setFilters} = filterSlice.actions;

 export default filterSlice.reducer;
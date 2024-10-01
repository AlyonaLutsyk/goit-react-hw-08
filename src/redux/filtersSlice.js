import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: "",
  reducers: {
    setFilter(state, action) {
      return action.payload;
    },
  },
});


export const { setFilter } = filtersSlice.actions;

export const selectNameFilter = (state) => state.filters;

export default filtersSlice.reducer;

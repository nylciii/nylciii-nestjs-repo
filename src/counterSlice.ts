import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchNumber = createAsyncThunk(
  "counter/fetchNumber",
  async () => {
    const res = await Promise.resolve(10);
    return res;
  }
);

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0, loading: false },
  reducers: {
    increment: (state: { value: number; }) => {
      state.value += 1;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNumber.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNumber.fulfilled, (state, action) => {
        state.loading = false;
        state.value = action.payload;
      });
  }
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const FetchAPI = createAsyncThunk('Counter/fetch', async params => {
  console.log('params --> ', params);
  const response = await fetch('https://reqres.in/api/users?delay=1');
  console.log('Return api data...');
  return await response.json();
});

const initialState = {
  value: 0,
  array: [],
  isLoading: false,
  error: null,
};

const CounterReducer = createSlice({
  name: 'Counter',
  initialState: initialState,
  reducers: {
    Increment: state => {
      console.log('Increment reducer ...');
      state.value += 1;
    },
    Decrement: state => {
      console.log('Decrement reducer ...');
      state.value -= 1;
    },
    IncrementByAmount: (state, action) => {
      console.log('Increment by amount ...');
      state.value += action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(FetchAPI.pending, state => {
      console.log('Pending......');
      state.isLoading = true;
    });
    builder.addCase(FetchAPI.fulfilled, (state, action) => {
      console.log('Fulfill......');
      state.array = action.payload;
      state.isLoading = false;
    });
    builder.addCase(FetchAPI.rejected, (state, action) => {
      console.log('Rejected......');
      state.isLoading = false;
      state.error = action;
    });
  },
});

export const { Increment, Decrement, IncrementByAmount } =
  CounterReducer.actions;

export default CounterReducer.reducer;

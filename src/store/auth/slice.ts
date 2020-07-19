import {createSlice} from '@reduxjs/toolkit';

export const initialState = {
  isFetching: false,
  data: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authFetching(state) {
      state.isFetching = true;
      state.data = null;
      state.error = null;
    },
    authFetched(state) {
      state.isFetching = false;
      state.data = {};
      state.error = null;
    },
    authFetchError(state, action) {
      state.isFetching = false;
      state.data = {};
      state.error = {
        status: action.payload.status,
        message: action.payload.message,
      };
    },
    resetState() {
      return initialState;
    },
  },
});

export const {
  authFetching,
  authFetched,
  authFetchError,
  resetState,
} = authSlice.actions;

export default authSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '@/store';
import { getToken, setToken as setTokenInCookie } from '@/utils/auth';
import { appApi } from '@/services';

interface AppState {
  token: string;
  errMsg: string;
  userInfo: {}
}

const initialState: AppState = {
  token: getToken(),
  errMsg: '',
  userInfo: {}
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = '';
    },
    setErrMsg: (state, action: PayloadAction<string>) => {
      state.errMsg = action.payload;
    },
    clearErrMsg: (state) => {
      state.errMsg = '';
    }
  }
});

export const { setToken, clearToken, setErrMsg, clearErrMsg } = appSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const checkLogin = (data: any): AppThunk => async (dispatch) => {
  try {
    const { token } = await appApi.checkLogin(data);
    setTokenInCookie(token);
    dispatch(setToken(token));
  } catch (err) {
    dispatch(setErrMsg(err.toString()));
  }
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectToken = (state: RootState) => state.app.token;
export const selectErrMsg = (state: RootState) => state.app.errMsg;

export default appSlice.reducer;

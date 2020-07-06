import { createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from '../../env.json';
import {getAccessToken, getData} from '../../services/apiService';

const initialState = {
  loading: false,
  users: [],
  error: '',
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchUsersBegin(state) {
      state.loading = true;
    },
    fetchUsersSuccess(state, action) {
      state.loading = false;
      // @ts-ignore
      state.users = state.users.concat(action.payload);
      state.error = '';
    },
    fetchUsersFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchUsersBegin, fetchUsersSuccess, fetchUsersFailure } = usersSlice.actions;
export default usersSlice.reducer;

export const searchUsers = (searchTerm: string, page?: 1 | number) => function (dispatch: any) {
  dispatch(fetchUsersBegin());
  getData(`${API_BASE_URL}/search/users?page=${page}&query=${searchTerm}`)
    .then((response) => {
      if (response.errors) {
        dispatch(fetchUsersFailure(response.errors[0]));
      } else {
        dispatch(fetchUsersSuccess(response.results));
      }
    })
    .catch((error) => {
      dispatch(fetchUsersFailure(error));
    });
};

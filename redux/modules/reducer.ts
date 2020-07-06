import { combineReducers } from '@reduxjs/toolkit';

import usersReducer from './usersSlice';

const appReducer = combineReducers({
  users: usersReducer,
});

export default appReducer;

export type RootState = ReturnType<typeof appReducer>;

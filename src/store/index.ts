import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import commitDetailSlice from "./commitDetailSlice";
import commitsSlice from "./commitsSlice";

const rootReducer = combineReducers({
  commits: commitsSlice,
  commitDetail: commitDetailSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;

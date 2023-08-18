import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import commitsSlice from "./commitsSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["commits"],
};

// Combine all reducers as root reducer
const rootReducer = combineReducers({
  commits: commitsSlice,
});

// Persist the root reducer
// const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
export default store;

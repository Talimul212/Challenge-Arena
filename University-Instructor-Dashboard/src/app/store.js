import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";
import userSlice from "../features/users/userSlice";
import FacultySlice from "../features/Faculty/FacultySlice";
import teachersSlice from "../features/Teachers/teachersSlice";
import coursesSlice from "../features/Courses/coursesSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["users"],
};

const rootReducer = combineReducers({
  user: userSlice,
  facultyList: FacultySlice,
  teachersList: teachersSlice,
  coursesList: coursesSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);

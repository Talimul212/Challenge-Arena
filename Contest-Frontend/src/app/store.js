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
import examRoutineSlice from "../features/examRoutine/examRoutineSlice";
import coursesSlice from "../features/course/coursesSlice";
import classRoutineSlice from "../features/classRoutine/classRoutineSlice";
import CompletecourseSlice from "../features/completeCourse/CompletecourseSlice";
import teachersSlice from "../features/teachers/teachersSlice";
import authSlice from "../features/auth/authSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  auth: authSlice,
  user: userSlice,
  examRoutine: examRoutineSlice,
  courseList: coursesSlice,
  classRoutine: classRoutineSlice,
  completeCourse: CompletecourseSlice,
  teachers: teachersSlice,
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
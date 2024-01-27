import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";

import rootSaga from "./rootSaga";
import rootReduser from "./rootReduser";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReduser(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(
      sagaMiddleware
    ),
  devTools: process.env.NODE_ENV !== "production",
  preloadedState: {},
});

sagaMiddleware.run(rootSaga);

export type AppDispath = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;

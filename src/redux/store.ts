import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import darkModeReducer from "./slices/dark-mode-slices";
import rootSaga from "./saga";
import tripHistorySelector from "./slices/trip-history-slices";
const rootReducer = combineReducers({
  darkMode: darkModeReducer,
  tripHistory: tripHistorySelector,
});
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

export default store;

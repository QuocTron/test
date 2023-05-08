import { all } from "redux-saga/effects";

import tripHistorySaga from "./trip-history-saga";

export default function* rootSaga() {
  yield all([tripHistorySaga()]);
}

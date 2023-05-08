import { takeEvery } from "redux-saga/effects";

export default function* tripHistorySaga() {
  console.log("trips history");
  yield takeEvery("GET_LIST_TRIPS_HISTORY", function* (action: any) {
    action.callback({ foo: "bar" });
  });
}

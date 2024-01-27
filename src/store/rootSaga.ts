import { all } from "redux-saga/effects";
import { watchAllDota } from "./dota/saga";

export default function* rootSaga() {
  yield all([watchAllDota()]);
}

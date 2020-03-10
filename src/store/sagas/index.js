import { all, takeEvery } from "redux-saga/effects";

import * as common from "../common/types";
import { setLoading } from "./common";

export default function* rootSaga() {
  yield all([
      takeEvery(common.INTIATE_LOADING, setLoading)
  ]);
}

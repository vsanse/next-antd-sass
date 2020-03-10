import { put } from "redux-saga/effects";
import * as actions from "../common/actions";

export function* setLoading(action) {
    console.log(action)
    yield put(actions.setLoading(action.status))
}
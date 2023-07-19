import { takeLatest, pull, call, all, put } from "redux-saga/effects";
import {
  FETCH_DATA_REQUEST,
  fetchDataError,
  fetchDataSuccess,
} from "../actions/actions";
import { fetchApiData } from "../api/api";

function* FetchData() {
  try {
    const data = yield call(fetchApiData);
    yield put(fetchDataSuccess(data));
  } catch (error) {
    yield put(fetchDataError(error));
  }
}

function* watchDummy() {
  yield takeLatest(FETCH_DATA_REQUEST, FetchData);
}

export default function* rootSaga() {
  yield all([watchDummy()]);
}

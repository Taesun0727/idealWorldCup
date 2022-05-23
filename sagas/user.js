import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

import { 
  CHANGE_MY_INFO_REQUEST,
  CHANGE_MY_INFO_SUCCESS,
  CHANGE_MY_INFO_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_IN_SUCCESS,
  SIGN_IN_REQUEST,
  SIGN_IN_FAILURE,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_REQUEST,
  SIGN_OUT_FAILURE,
  LOAD_MY_INFO_REQUEST,
  LOAD_MY_INFO_SUCCESS,
  LOAD_MY_INFO_FAILURE,
} from '../reducers/user'

function changeMyInfoAPI(data) {
  return axios.post('/user/changeinfo', data)
}

function* changeMyInfo(action) {
  try {
    yield call(changeMyInfoAPI, action.data);
    yield put({
      type: CHANGE_MY_INFO_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: CHANGE_MY_INFO_FAILURE,
      error: err.response.data,
    })
  }
}

function loadMyInfoAPI() {
  return axios.get('/user')
}

function* loadMyInfo() {
  try {
    const result = yield call(loadMyInfoAPI);
    yield put({
      type: LOAD_MY_INFO_SUCCESS,
      data: result.data,
    })
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_MY_INFO_FAILURE,
      error: err.response.data,
    })
  }
}

function signUpAPI(data) {
  return axios.post('/user/signup', data)
}

function* signUp(action) {
  try {
    yield call(signUpAPI, action.data);
    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    })
  }
}

function signInAPI(data) {
  return axios.post('/user/signin', data)
}

function* signIn(action) {
  try {
    const result = yield call(signInAPI, action.data);
    yield put({
      type: SIGN_IN_SUCCESS,
      data: result.data,
    })
  } catch (err) {
    console.error(err);
    yield put({
      type: SIGN_IN_FAILURE,
      error: err.response.data,
    })
  }
}

function signOutAPI() {
  return axios.post('/user/signout');
}

function* signOut() {
  try {
    yield call(signOutAPI);
    yield put({
      type: SIGN_OUT_SUCCESS,
    })
  } catch (err) {
    console.error(err);
    yield put({
      type: SIGN_OUT_FAILURE,
      error: err.response.data,
    })
  }
}

function* watchChangeMyInfo() {
  yield takeLatest(CHANGE_MY_INFO_REQUEST, changeMyInfo);
}

function* watchLoadMyInfo() {
  yield takeLatest(LOAD_MY_INFO_REQUEST, loadMyInfo);
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

function* watchSignIn() {
  yield takeLatest(SIGN_IN_REQUEST, signIn);
}

function* watchSignOut() {
  yield takeLatest(SIGN_OUT_REQUEST, signOut);
}

export default function* userSaga() {
  yield all([
    fork(watchChangeMyInfo),
    fork(watchLoadMyInfo),
    fork(watchSignUp),
    fork(watchSignIn),
    fork(watchSignOut),
  ]);
}
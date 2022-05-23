import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  UPLOAD_IMAGES_FAILURE,
  UPLOAD_IMAGES_REQUEST,
  UPLOAD_IMAGES_SUCCESS,
  CREATE_WORLDCUP_REQUEST,
  CREATE_WORLDCUP_SUCCESS,
  CREATE_WORLDCUP_FAILURE,
  LOAD_POST_REQUEST,
  LOAD_POST_SUCCESS,
  LOAD_POST_FAILURE
} from '../reducers/post';

function loadPostsAPI(lastId) {
  return axios.get(`/post?lastId=${lastId || 0}`)
}

function* loadPosts(action) {
  try {
    const result = yield call(loadPostsAPI, action.lastId);
    yield put({
      type: LOAD_POST_SUCCESS,
      data: result.data
    })
  } catch (err) {
    console.log(err);
    yield put({
      type: LOAD_POST_FAILURE,
      error: err.response.data,
    })
  }
}

function createWorldcupAPI(data) {
  return axios.post('/post/create', data)
}

function* createWorldcup(action) {
  try {
    yield call(createWorldcupAPI, action.data);
    yield put({
      type: CREATE_WORLDCUP_SUCCESS,
    })
  } catch (err) {
    console.log(err);
    yield put({
      type: CREATE_WORLDCUP_FAILURE,
      error: err.response.data,
    })
  }
}

function uploadImagesAPI(data) {
  return axios.post('/post/images', data)
}

function* uploadImages(action) {
  try {
    const result = yield call(uploadImagesAPI, action.data);
    yield put({
      type: UPLOAD_IMAGES_SUCCESS,
      data: result.data,
    })
  } catch (err) {
    console.log(err);
    yield put({
      type: UPLOAD_IMAGES_FAILURE,
      error: err.response.data,
    })
  }
}

function* watchUploadImages() {
  yield takeLatest(UPLOAD_IMAGES_REQUEST, uploadImages);
}

function* watchUpcreateWorldcup() {
  yield takeLatest(CREATE_WORLDCUP_REQUEST, createWorldcup);
}

function* watchUploadPosts() {
  yield takeLatest(LOAD_POST_REQUEST, loadPosts);
}

export default function* postSaga() {
  yield all([
    fork(watchUploadImages),
    fork(watchUpcreateWorldcup),
    fork(watchUploadPosts),
  ]);
}
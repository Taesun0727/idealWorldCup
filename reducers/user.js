import produce from "../util/produce";

export const initialState = {
  changeMyInfoLoading: false,
  changeMyInfoDone: false,
  changeMyInfoError: null,
  loadMyInfoLoading: false,
  loadMyInfoDone: false,
  loadMyInfoError: null,
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
  signInLoading: false,
  signInDone: false,
  signInError: null,
  signOutLoading: false,
  signOutDone: false,
  signOutError: null,
  me: null,
  userInfo: null,
};

export const CHANGE_MY_INFO_REQUEST = 'CHANGE_MY_INFO_REQUEST';
export const CHANGE_MY_INFO_SUCCESS = 'CHANGE_MY_INFO_SUCCESS';
export const CHANGE_MY_INFO_FAILURE = 'CHANGE_MY_INFO_FAILURE';

export const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
export const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
export const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';

export const SIGN_OUT_REQUEST = 'SIGN_OUT_REQUEST';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
export const SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE';

export const loginRequestAction = (data) => ({
  type: SIGN_IN_REQUEST,
  data,
});

export const logoutRequestAction = () => ({
  type: SIGN_OUT_REQUEST, 
})

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case CHANGE_MY_INFO_REQUEST:
      draft.changeMyInfoLoading = true;
      draft.changeMyInfoError = null;
      draft.changeMyInfoDone = false;
      break;
    case CHANGE_MY_INFO_SUCCESS:
      draft.changeMyInfoLoading = false;
      draft.changeMyInfoDone = true;
      break;
    case CHANGE_MY_INFO_FAILURE:
      draft.changeMyInfoLoading = false;
      draft.changeMyInfoError = action.error;
      break;
    case LOAD_MY_INFO_REQUEST:
      draft.loadMyInfoLoading = true;
      draft.loadMyInfoError = null;
      draft.loadMyInfoDone = false;
      break;
    case LOAD_MY_INFO_SUCCESS:
      draft.loadMyInfoLoading = false;
      draft.me = action.data;
      draft.loadMyInfoDone = true;
      break;
    case LOAD_MY_INFO_FAILURE:
      draft.loadMyInfoLoading = false;
      draft.loadMyInfoError = action.error;
      break;
    case SIGN_UP_REQUEST:
      draft.signUpLoading = true;
      draft.signUpError = null;
      draft.signUpDone = false;
      break;
    case SIGN_UP_SUCCESS:
      draft.signUpLoading = false;
      draft.signUpDone = true;
      break;
    case SIGN_UP_FAILURE:
      draft.signUpLoading = false;
      draft.signUpError = action.error;
      break;
    case SIGN_IN_REQUEST:
      draft.signInLoading = true;
      draft.signInError = null;
      draft.signInDone = false;
      break;
    case SIGN_IN_SUCCESS:
      draft.signInLoading = false;
      draft.me = action.data;
      draft.signInDone = true;
      break;
    case SIGN_IN_FAILURE:
      draft.signInLoading = false;
      draft.signInError = action.error;
      break;
    case SIGN_OUT_REQUEST:
      draft.signOutLoading = true;
      draft.signOutError = null;
      draft.signOutDone = false;
      break;
    case SIGN_OUT_SUCCESS:
      draft.signOutLoading = false;
      draft.me = null;
      draft.signOutDone = true;
      break;
    case SIGN_OUT_FAILURE:
      draft.signOutLoading = false;
      draft.signOutError = action.error;
      break;
    default:
      break;
  }
})

export default reducer;
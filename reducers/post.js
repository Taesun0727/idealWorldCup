import produce from '../util/produce';

export const initialState = {
  images: [],
  posts: [],
  uploadImagesLoading: false,
  uploadImagesDone: false,
  uploadImagesError: false,
  createWorldcupLoading: false,
  createWorldcupDone: false,
  createWorldcupError: false,
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: false,
}

export const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUESE';
export const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
export const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';

export const CREATE_WORLDCUP_REQUEST = 'CREATE_WORLDCUP_REQUESE';
export const CREATE_WORLDCUP_SUCCESS = 'CREATE_WORLDCUP_SUCCESS';
export const CREATE_WORLDCUP_FAILURE = 'CREATE_WORLDCUP_FAILURE';

export const LOAD_POST_REQUEST = 'LOAD_POST_REQUESE';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';

export const REMOVE_IMAGE = 'REMOVE_IMAGE';

export const CHANGE_NAME = 'CHANGE_NAME';

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case CREATE_WORLDCUP_REQUEST:
      draft.createWorldcupLoading = true;
      draft.createWorldcupError = null;
      draft.createWorldcupDone = false;
      break;
    case CREATE_WORLDCUP_SUCCESS:
      draft.createWorldcupLoading = false;
      draft.createWorldcupDone = true;
      break;
    case CREATE_WORLDCUP_FAILURE:
      draft.createWorldcupLoading = false;
      draft.createWorldcupError = action.error;
      break;
    case UPLOAD_IMAGES_REQUEST:
      draft.uploadImagesLoading = true;
      draft.uploadImagesDone = false;
      draft.uploadImagesError = null;
      break;
    case UPLOAD_IMAGES_SUCCESS:
      draft.images = draft.images.concat(action.data)
      draft.uploadImagesLoading = false;
      draft.uploadImagesDone = true;
      break;
    case UPLOAD_IMAGES_FAILURE:
      draft.uploadImagesLoading = false;
      draft.uploadImagesError = action.error;
      break;
    case LOAD_POST_REQUEST:
      draft.loadPostLoading = true;
      draft.loadPostDone = false;
      draft.loadPostError = null;
      break;
    case LOAD_POST_SUCCESS:
      draft.posts = draft.posts.concat(action.data);
      draft.loadPostLoading = false;
      draft.loadPostDone = true;
      break;
    case LOAD_POST_FAILURE:
      draft.loadPostLoading = false;
      draft.loadPostError = action.error;
      break;
    case REMOVE_IMAGE:
      draft.images = draft.images.filter((v, i) => i !== action.data)
    case CHANGE_NAME:
      draft.images[action.index].name = action.data.name
  }
})

export default reducer;
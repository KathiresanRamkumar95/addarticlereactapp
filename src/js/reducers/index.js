import { ADD_ARTICLE, EMPTY_TITLE } from "../constants/action-types";

const initialState = {
  articles: [],
  message: ""
};

function rootReducer(state = initialState, action) {
  if (action.type == ADD_ARTICLE) {
    return Object.assign({}, state, {
      message: action.payload.message,
      articles: state.articles.concat(action.payload.article)
    });
  }
  if (action.type == EMPTY_TITLE) {
    return Object.assign({}, state, {
      message: action.payload.message
    });
  }
  return state;
}

export default rootReducer;

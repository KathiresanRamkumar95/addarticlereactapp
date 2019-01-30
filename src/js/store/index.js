import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import { forbiddenWordsMiddleware } from "../middleware";

const storeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  storeEnhancer(applyMiddleware(forbiddenWordsMiddleware))
);

export default store;

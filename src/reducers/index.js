import { combineReducers } from "redux";
import ArticleLists from "./reducer_articlelists";

const rootReducers = combineReducers({
  articlelists: ArticleLists
});

export default rootReducers;

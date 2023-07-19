import { combineReducers } from "redux";
import MyComponentReducer from "./MyComponent.reducer";

const rootReducer = combineReducers({
  MyComponent: MyComponentReducer,
});

export default rootReducer;

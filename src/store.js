import { legacy_createStore } from "redux";
import { rootReducer } from "./redux/reducers";

export const store = legacy_createStore(rootReducer);

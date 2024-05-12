import { combineReducers } from "redux";
import themeReducer from "./reducer/themeReducer";

export const root = combineReducers({
  theme: themeReducer,
});

export type rootType = ReturnType<typeof root>;

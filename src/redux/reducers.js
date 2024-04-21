import {
  ADD_DATA,
  ADD_USER,
  LOGIN,
  LOGOUT,
  REMOVE_USER,
  TOGGLE_THEME,
} from "./actionTypes";
import { combineReducers } from "redux";

const initialUserState = JSON.parse(localStorage.getItem("users")) || [];

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case ADD_USER:
      const newStateAdd = [...state, action.payload];
      localStorage.setItem("users", JSON.stringify(newStateAdd));
      return newStateAdd;
    case REMOVE_USER:
      const newStateRemove = state.filter((user) => user.id !== action.payload);
      localStorage.setItem("users", JSON.stringify(newStateRemove));
      return newStateRemove;
    default:
      return state;
  }
};

const initialLoginState = localStorage.getItem("loginStatus") === "true";

const loginReducer = (state = initialLoginState, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem("loginStatus", true);
      return true;
    case LOGOUT:
      localStorage.removeItem("loginStatus");
      return false;
    default:
      return state;
  }
};

const initialChatState = JSON.parse(localStorage.getItem("chats")) || [];
const chatReducer = (state = initialChatState, action) => {
  switch (action.type) {
    case ADD_DATA:
      const newStateAdd = [...state, action.payload];
      return newStateAdd;
    default:
      return state;
  }
};

const initialTheme = localStorage.getItem("theme") || "light";

const themeReducer = (state = initialTheme, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      const curr = state === "light" ? "dark" : "light";
      localStorage.setItem("theme", curr);
      return curr;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  users: userReducer,
  login: loginReducer,
  chats: chatReducer,
  theme: themeReducer,
});

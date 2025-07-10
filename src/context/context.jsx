import { createContext, useReducer, useState } from "react";

const ThemeContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
  loding: false,
  error: null,
};

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return { ...state, loading: true, error: null };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return { ...state, loading: false, error: action.payload };
    case "LOGOUT":
      return { ...initialState };
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  // const themeToggling = () => {
  //   setTheme((prev) => (prev === "light" ? "dark" : "light"));
  // };
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

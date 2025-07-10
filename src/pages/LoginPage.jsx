import React, { useContext } from "react";
import ThemeContext from "../context/context";

const LoginPage = () => {
  const { state, dispatch } = useContext(ThemeContext);
  const { isAuthenticated, user, error, loading } = state;

  const handleLogin = () => {
    dispatch({ type: "LOGIN_START" });
    setTimeout(() => {
      const tempUser = { name: "anshu", email: "anshu7sah@gmail.com" };
      dispatch({ type: "LOGIN_SUCCESS", payload: tempUser });
    }, 1000);
  };
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="h-screen flex items-center justify-center">
      {loading ? (
        <p>Loading...</p>
      ) : isAuthenticated ? (
        <>
          <p>Welcome, {user.name}</p>
          <button
            onClick={handleLogout}
            className="py-5 px-10 bg-red-700 cursor-pointer"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <button
            onClick={handleLogin}
            className="py-5 px-10 bg-red-700 text-white  cursor-pointer"
          >
            Login
          </button>
          {error && <p className="text-red-800">{error}</p>}
        </>
      )}
    </div>
  );
};

export default LoginPage;

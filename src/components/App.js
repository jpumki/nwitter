import AppRouter from "./Router";
import React, { useState, useEffect } from "react";
import firebase from "../fbase";
import { authService } from "../fbase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedin, setIsLoggedIn] = useState(false);
  // Get user infromation right away
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? <AppRouter isLoggedin={isLoggedin} /> : "Initializing..."}
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  );
}

export default App;

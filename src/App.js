import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Login from "./components/auth/Login";
import Quora from "./components/Quora";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import { isNirmaEmail, NIRMA_ONLY_MESSAGE } from "./utils/auth";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        if (!isNirmaEmail(authUser.email)) {
          window.alert(NIRMA_ONLY_MESSAGE);
          auth.signOut();
          return;
        }

        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
            displayName: authUser.displayName,
            photo: authUser.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return <div className="App">{user ? <Quora /> : <Login />}</div>;
}

export default App;

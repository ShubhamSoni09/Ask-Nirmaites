import React, { useState } from "react";
import "./Login.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { auth, provider } from "../../firebase";
import { isNirmaEmail, NIRMA_ONLY_MESSAGE } from "../../utils/auth";
import logo from "./logo.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    auth.signInWithPopup(provider).catch((e) => {
      alert(e.message);
    });
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    if (!isNirmaEmail(email)) {
      window.alert(NIRMA_ONLY_MESSAGE);
      return;
    }

    auth.signInWithEmailAndPassword(email, password).catch((e) => {
      alert(e.message);
    });
  };

  const registerSignIn = (e) => {
    e.preventDefault();

    if (!isNirmaEmail(email)) {
      window.alert(NIRMA_ONLY_MESSAGE);
      return;
    }

    auth.createUserWithEmailAndPassword(email, password).catch((e) => {
      alert(e.message);
    });
  };

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__logo">
          <img src={logo} alt="ASK NIRMAITES" />
        </div>

        <div className="login__desc">
          <p>A place to share knowledge and understand more about the campus!</p>
        </div>

        <div className="login__auth">
          <div className="login__authOptions">
            <button type="button" className="login__authOption" onClick={signIn}>
              <img
                className="login__googleAuth"
                src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                alt="Google"
              />
              <span>Continue with Nirma ID</span>
            </button>
            <div className="login__authDesc">
              <p>
                <span className="login__link">Only @nirmauni.ac.in emails</span>{" "}
                are allowed. By continuing you agree to Ask Nirmaites&apos;{" "}
                <span className="login__link">Terms of Service</span> and{" "}
                <span className="login__link">Privacy Policy</span>.
              </p>
            </div>
          </div>

          <div className="login__divider">
            <span>or</span>
          </div>

          <div className="login__emailPass">
            <h4 className="login__label">Sign in with email</h4>
            <div className="login__inputFields">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="name@nirmauni.ac.in"
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="login__forgButt">
              <small>Forgot password?</small>
            </div>
            <div className="login__actions">
              <button type="button" className="login__btn login__btn--primary" onClick={handleSignIn}>
                Login
              </button>
              <button type="button" className="login__btn login__btn--secondary" onClick={registerSignIn}>
                Register
              </button>
            </div>
          </div>
        </div>

        <div className="login__credits">
          <p>
            Handcrafted with <span className="login__heart">❤️</span> by{" "}
            <strong>Shivam and Shubham</strong>
          </p>
        </div>

        <div className="login__lang">
          <p>हिन्दी</p>
          <ArrowForwardIosIcon fontSize="small" />
        </div>

        <div className="login__footer">
          <p>About</p>
          <p>Contact</p>
          <p>&copy; Ask Nirmaites</p>
        </div>
      </div>
    </div>
  );
}

export default Login;

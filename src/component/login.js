import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="loginscreenparentcontainer">
      <div className="loginscreenleftcontainer">
        <div>Board.</div>
      </div>
      <div className="loginscreenrightcontainer">
        <div>
          <h1>Sign In</h1>
          <div className="loginscreenrightcontainersecondrow">
            Sign in to your account
          </div>
          <div className="signinpotionbuttoncontainer">
            <button className="graytext loginformsigninbutton" type="button">
              <FcGoogle /> Sign in with Google
            </button>
            <button className="graytext loginformsigninbutton" type="button">
              <AiFillApple /> Sign in with Apple
            </button>
          </div>
          <div className="logincontainer">
            <label className="loginpagelable">Email address</label>
            <input
              type="text"
              className="loginpageinput"
              placeholder="Email address"
            />
            <label className="loginpagelable">Password</label>
            <input
              type="password"
              className="loginpageinput"
              placeholder="Password"
            />
            <Link to="*">Forgot password?</Link>
            <button type="button" className="loginpagesignbutton">
              Sign In
            </button>
          </div>
          <div className="graytext loginpagedonthaveaccountlink">
            Don't have an account? <Link to="*">Register here</Link>
          </div>
        </div>
      </div>
      <Link to="/">Home</Link>
    </div>
  );
}

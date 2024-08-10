import React from "react";

import { Link } from "react-router-dom";
import "../../App.css";

const Login = () => {
  return (
    <section>
      <div className="main-container">
        <div className="back-img">
          <div className="back">
            <img src="/img/Eggs 2.jpg" alt="" />
          </div>
          <form class="main-form mt-32">
            <p className="text-[20px] font-semibold">Please Login In</p>
            <div>
              <label>
                <span>Email</span>
                <input placeholder="Email" name="email" type="text" class="input" />
              </label>
            </div>

            <div className="grid md:grid-cols-2 md:gap-3 mt-2">
                <label>
                  <span>Password</span>
                  <input
                    placeholder="Password"
                    type="text"
                    class="input "
                    name="username"
                  />
                </label>
                <label>
                  <span>Confirm Password</span>
                  <input
                    placeholder="Password"
                    type="text"
                    class="input"
                    name="confirmpassword"
                  />
                </label>
              </div>

            <div className="submit-btn">
              <button>Login</button>
            </div>
            <p class="signin">
              forget password ?
              <Link className="mx-2" to="/registration">
                signup
              </Link>
              <Link to="/forget">forget</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;

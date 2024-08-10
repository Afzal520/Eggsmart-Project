import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
const Forget = () => {
  return (
    <section>
      <div className="main-container">
        <div className="back-img">
          <div className="back">
          <img src="/img/Eggs 2.jpg" alt="" />
          </div>
          <form class="main-form ">
            <div className="form_title mt-32">
              <div className="profile-img">
                <img src="/img/forget-img.png" alt="" />
              </div>
            </div>

            <div>
              <label>
                <span>Email</span>
                <input placeholder="Email" type="text" class="input" />
              </label>
            </div>

            <div className="submit-btn">
              <button>Get OTP</button>
            </div>

            <p class="signin">
              Already have an acount ? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Forget;

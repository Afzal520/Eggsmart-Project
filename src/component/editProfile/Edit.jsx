import React from "react";
import "../../App.css"
import {Link} from "react-router-dom"
const Edit = () => {
  return (
    <section>
    <div className="main-container">
      <div className="back-img py-7">
        <div className="back">
          <img src="/img/Eggs 2.jpg" alt="" />
        </div>
        <form class="main-form ">
          <h3 className="text-[30px] font-semibold">Edit Your Profile:</h3>
          <h3 className="text-[20px]">
            
          </h3>
          <div className="grid md:grid-cols-2 md:gap-3">
            <label>
              <span>Username</span>
              <input
                placeholder="eg:Eggsmart12"
                type="text"
                class="input "
                name="username"
              />
            </label>
            <label>
              <span>Password</span>
              <input
                placeholder="Password"
                type="text"
                class="input"
                name="Password"
              />
            </label>
          </div>
          <label>
            <span>Email</span>
            <input
              placeholder="abc@gmail.com"
              name="email"
              type="email"
              class="input"
            />
          </label>
          <div className="grid md:grid-cols-2 md:gap-3">
            <label>
              <span>Form Name</span>
              <input
                placeholder="Name of poultry Form"
                name="email"
                type="text"
                class="input"
              />
            </label>
            <label>
              <span>mobile number</span>
              <input
                placeholder="1234567890"
                name="email"
                type="text"
                class="input"
              />
            </label>
          </div>

          
          <div className="grid md:grid-cols-2 md:gap-3">
            <label>
              <span>Country</span>
              <input
                placeholder="Country"
                name="email"
                type="text"
                class="input"
              />
            </label>
            <label>
              <span>PIN Code</span>
              <input
                placeholder="PIN Code"
                name="email"
                type="text"
                class="input"
              />
            </label>
          </div>
          <label>
            <span>Address</span>
            <input
              placeholder="Address"
              name="password"
              type="text"
              class="input"
            />
          </label>
        

          <div className="submit-btn">
            <button>Update</button>
          </div>
          <p class="signin">
            Back to  ? <Link to="/">Home</Link>
          </p>
        </form>
      </div>
    </div>
  </section>
  );
};

export default Edit;

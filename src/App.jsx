import ChangePassword from "./component/changeP/ChangePassword";
import Edit from "./component/editProfile/Edit";
import Flock from "./component/flock/Flock";
import Forget from "./component/forget/Forget";
import Header from "./component/header/Header";
import Login from "./component/login/Login";
import Registration from "./component/registration/Registration";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Update from "./component/update/Update";
import Footer from "./component/footer/Footer";
import Flocks from "./page/flockpage/Flocks";
import Mobilemenu from "./component/mobilMenu/Mobilemenu";
import Dashboard from "./page/dashboard/Dashboard";
import { useState } from "react";
function App() {
  // show And Hide Progress Bar
  let [hide,sethide]= useState(true)
  function Handler(a){
    sethide(a)
  }
  return (
    <>
      <BrowserRouter>
        <Header Handler={Handler}></Header>
        <Routes>
          <Route path="/registration" element={<Registration />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/flock" element={<Flock />} />
          <Route path="/update" element={<Update />} />
          <Route path="/login" element={<Login />} />
          <Route path="/change" element={<ChangePassword />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/" element={<Flocks Hide={hide} />} />
          <Route path="/dashboard" element={<Dashboard Hide={hide}  />} />
        </Routes>

        <Mobilemenu />
        {/* <Footer/> */}
      </BrowserRouter>
    </>
  );
}

export default App;

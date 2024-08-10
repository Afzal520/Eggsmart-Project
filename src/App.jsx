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

function App() {
  return (
    <>
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path="/registration" element={<Registration />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/flock" element={<Flock/>} />
          <Route path="/update" element={<Update/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/change" element={<ChangePassword/>}/>
          <Route path="/forget" element={<Forget />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Layout from "../Layout";
import Login from "./Components/LogIn/Login";
import Logout from "./Components/LogOut/Logout";
import Signup from "./Components/SignUp/Signup";
import About from "./Components/About/About";

function App() {
  const [userLogin, setUserLogin] = useState(false);
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    company: "",
    phone: "",
  });

  return (
    <>
      <Routes>
        <Route path="" element={<Layout userStatus={userLogin}/>}>
          <Route
            path="/"
            element={
              <Signup userStatus={userLogin} chnageStatus={setUserLogin} userData={setData}/>
            }
          />
          <Route
            path="/login"
            element={
              <Login userStatus={userLogin} chnageStatus={setUserLogin} setUserData={setData}/>
            }
          />
          <Route
            path="/logout"
            element={<Logout userStatus={setUserLogin} />}
          />
          <Route path="/about" element={<About userStatus={userLogin} userInfo={data}/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

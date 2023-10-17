/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import Navbar from "./src/Components/Header/Navbar";
import Footer from "./src/Components/Footer/Footer";
const Layout = (props) => {
  const data = props.userStatus;
  return (
    <>
      <div
        className="layout"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100vh",
          width: "100%",
        }}
      >
        <Navbar userStatus={data}/>
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;

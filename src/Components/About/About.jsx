/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const About = (props) => {
  const data = props.userInfo;
  const navigateLogin = useNavigate();
  useEffect(() => {
    if (!props.userStatus) {
      navigateLogin("/login");
    }
  });
  return (
    <>
      <div className="about-container">
        <div className="small-about-container">
          <div
            className="img-container"
          >
            <div
              className="small-img-container"
              style={{
                backgroundImage:
                  "url(https://img.freepik.com/free-psd/3d-nft-icon-developer-male-illustration_629802-6.jpg?size=626&ext=jpg&uid=R105040576&ga=GA1.2.1094827709.1695459647&semt=sph",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div className="text-container">
            <div className="name-fields">
              <p>
                Name : <span className="user-details">{data.firstname}</span>
              </p>
              <p>
                Last Name :{" "}
                <span className="user-details">{data.lastname}</span>
              </p>
            </div>
            <div className="company-mobile">
              <p>
                Company : <span className="user-details">{data.company}</span>
              </p>
              <p>
                Mobile : <span className="user-details">{data.phone}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

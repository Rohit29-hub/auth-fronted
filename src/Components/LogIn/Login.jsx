/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import axios from 'axios'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = (props) => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('') 
  const userLoginAbout = useNavigate();

  function checkUserLogin(){
    try{
        axios.post('http://localhost:4000/login',{email,password})
        .then((res)=>{
          props.setUserData(res.data);
          props.chnageStatus(true);
          userLoginAbout('/about')
        })
        .catch((err)=>{
          alert('Login details is not Found !')
          console.log(err.response.data)
        })
    }
    catch(err){
      console.log('Something want wrong ',err)
    }
  }

  return (
    <>
      <div className="login-container">
        <div className="login-container2 mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mb-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login your account
          </h2>
          <form className="space-y-6">
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <label
                htmlFor="email"
                className="block text-1xl font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={(e)=>setEmail(e.target.value)}
                  autoComplete="email"
                  required
                  className="block w-full  p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-1xl font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={(e)=>setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  className="block w-full p-2 font-3xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={checkUserLogin}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login in
              </button>
            </div>
          </form>

          <p className="mt-2 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link
              to={"/"}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Create new Account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;

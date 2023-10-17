/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
const Logout = (props) => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const userLogout = useNavigate();
  

  function deleteData(e) {
    e.preventDefault();
    try { 
      axios
        .post("http://localhost:4000/logout", {email,password})
        .then((res) => {
          if(res.status === 200){
            userLogout('/');
            props.userStatus(false);
          }
        })
        .catch((err) => {
          alert(err.response.data.message)
        });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <div className="log-container">
        <div className="log-container2 mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mb-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Log out account
          </h2>
          <form className="space-y-6">
            <div>
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
                  autoComplete="email"
                  required
                  onChange={(e)=>{setEmail(e.target.value)}}
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
                  onChange={(e)=>{setPassword(e.target.value)}}
                  autoComplete="current-password"
                  required
                  className="block w-full p-2 font-3xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={deleteData}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log out
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Logout;

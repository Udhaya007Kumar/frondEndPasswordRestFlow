
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";





const Login = () => {

    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const [showPssword,setShowPassword] =useState(false)
    const [token,settoken] =useState()
    const navigate = useNavigate();



    const handleSubmit = async(e)=>{
        e.preventDefault();
        const payload = {email,password};
        await axios.post("https://passwordrestflow-gyxy.onrender.com/api/auth/login",payload)
        .then((res)=>{toast.success(res.data.message)
            settoken(res.data.token)
            navigate("/home")
          
        })
        .catch((error)=>{
          toast.error(error.response.data.message)
        });
       
        setemail("");
        setpassword("");
    
       }

    return (
      <div>
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-200 text-gray-700">
          <form
            className="flex flex-col bg-white rounded shadow-lg p-12 mt-12 "
            onSubmit={handleSubmit}
          >
            <h1 className="font-bold text-2xl text-slate-800  text-center">
              Login
            </h1>

            <label className="font-semibold  pt-5 text-xl" htmlFor="name">
              Email
            </label>
            <input
              className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded-xl focus:outline-none focus:ring-2"
              type="Email"
              name="Email"
              id="Email"
              placeholder="Enter Your Email"
              required
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <label className="font-semibold  pt-5 text-xl" htmlFor="name">
              Password
            </label>
            <div className="relative">
              <div>
                <input
                  className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded-xl focus:outline-none focus:ring-2"
                  type={showPssword ? "text" : "password"}
                  name="Password"
                  id="Password"
                  placeholder="Enter Your Password"
                  required
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
              </div>
              <div
                className="absolute top-6 right-6 "
                onClick={() => setShowPassword(!showPssword)}
              >
                <FaEye />
              </div>
            </div>

            <button
              className="flex items-center justify-center h-12 px-6 w-64 bg-indigo-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-indigo-400"
              type="submit"
            >
              Login
            </button>
            <h5 className="pt-5 text-center text-slate-700 ">
              <span className="text-gray-400">
                <Link to={"/Forgotpassword"}>Forgot password</Link>
              </span>{" "} 
              <Link to={"/register"}>Register</Link>
            </h5>
          </form>
        </div>
      </div>
    );
};

export default Login;

import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ResetPassword = () => {
    
 
    const [password,setpassword] = useState("");
    const [showPssword,setShowPassword] =useState(false);
    const {id,otp} =useParams();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = { password };
    
        try {
            const res = await axios.post(`https://passwordrestflow-gyxy.onrender.com/api/auth/reset-password/${id}/${otp}`, payload);
            toast.success(res.data.message);
            settoken(res.data.token);
            navigate("/")
        } catch (error) {
           
           // const errorMessage = error.response ? error.response.data.message : "An error occurred";
            toast.error(error);
        } finally {
            setpassword("");
        }
    };


    return (
        <div>
            <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-200 text-gray-700">
          <form
            className="flex flex-col bg-white rounded shadow-lg p-12 mt-12 "
            onSubmit={handleSubmit}
          >
            <h1 className="font-bold text-2xl text-slate-800  text-center">
              Reset Password
            </h1>
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
              Update Password
            </button>
            
          </form>
        </div>
        </div>
    );
};

export default ResetPassword;
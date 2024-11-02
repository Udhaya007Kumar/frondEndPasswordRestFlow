
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




const Forgotpassword = () => {
    const [email,setemail] = useState("");


    const handleSubmit = async(e)=>{
        e.preventDefault();
        const payload = {email};
        await axios.post("https://passwordrestflow-gyxy.onrender.com/api/auth/forgotpassword",payload)
        .then((res)=>{toast.success(res.data.message)
            settoken(res.data.token)
            navigate("/home")
          
        })
        .catch((error)=>{
          toast.error(error.response.data.message)
        });
       
        setemail("");
    
       }

    return (
        <div>
            <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-200 text-gray-700">
          <form
            className="flex flex-col bg-white rounded shadow-lg p-12 mt-12 "
            onSubmit={handleSubmit}
          >
            <h1 className="font-bold text-2xl text-slate-800  text-center">
            Forgot password?
            </h1>
             <h6 className='pt-3 text-gray-400'>Don't fret! Just type in your email and we will send <br /> you a code to reset your password!</h6>
            <label className="font-semibold  pt-5 text-xl" htmlFor="name">
              Your Email
            </label>
            <input
              className="flex items-center h-12 px-4  bg-gray-200 mt-2 rounded-xl focus:outline-none focus:ring-2"
              type="Email"
              name="Email"
              id="Email"
              placeholder="Enter Your Email"
              required
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <button
              className="flex items-center justify-center h-12 px-6  bg-indigo-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-indigo-400"
              type="submit"
            >
              Reset password
            </button>     
          </form>
        </div>
        </div>
    );
};

export default Forgotpassword;
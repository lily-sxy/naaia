"use client"

import Link from "next/link";
import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

const Signin = () => {
    return (
        <>
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col items-center justify-center w-full px-20 text-center"> 
        <div className="rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="py-11">
              <h2 className="text-3xl font-bold text-indigo-600 mt-20 mb-5">Sign in to Account</h2>
              <div className="flex flex-col items-center">
                <div className="bg-indigo-100 w-64 p-2 flex items-center mb-3">
                <FaRegEnvelope className="text-gray-400 mr-2 " /> 
                <input type="email" name="email" placeholder="Email" className="bg-indigo-100 outline-none text-sm"/>
                </div>  
                <div className="bg-indigo-100 w-64 p-2 flex items-center mb-3">
                <MdLockOutline className="text-gray-400 mr-2 " /> 
                  <input type="password" name="password" placeholder="Password" className="bg-indigo-100 outline-none text-sm"/>
                </div> 
                <div className="flex justify-between w-64 mb-5">
                  <label className="flex items-center text-xs text-indigo-600"><input type="checkbox" name="remember" className="mr-1" />
                  Remember me</label>
                  <Link href="/" className="text-xs text-indigo-600 hover:underline">Forgot Password?</Link>  
                </div>
                <Link href="/" className="border-2 border-indigo-600 text-indigo-600 rounded-full px-12 py-2 inline-block font-semibold hover:bg-indigo-600 hover:text-white">
                  Sign in
                </Link>
              </div> 
            </div>
            
          </div>

          <div className="w-2/5 bg-indigo-600 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">Become A Member</h2>
            <p className="mt-6 mb-10">Fill up personal information and start journey with us.</p>
            <Link href="/" className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-indigo-600">
            Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
    
        </>
    );
  }

export default Signin;
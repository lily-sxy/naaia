
import {FaFacebookF, FaLinkedinIn, FaGoogle, FaEnvelope} from 'react-icons/fa'
import {MdLockOutline} from 'react-icons/md'
import React, { useEffect, useState } from "react";
import { validateEmail } from "../lib/utils";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function Signin(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [emailInPutError, setEmailInputError] = useState(false);
    const [passwordInPutError, setPasswordInputError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        validate();
      }, [email, password]);
    
    function validate() {
        let emailIsValid = validateEmail(email);
    
        if (!emailIsValid) {
          setEmailInputError(true);
          return;
        }
        if (password.length < 6) {
          setPasswordInputError(true);
        } else {
          setEmailInputError(false);
          setPasswordInputError(false);
        }
      }
    
      if (isLoading) {
        return (
          <div>
             <p className="flex h-full">Loading...</p>;
          </div>  
        );
    }

    async function handleSubmit(e) {
        setIsLoading(true);
        e.preventDefault();
        let res = await signIn("credentials", {
          email,
          password,
          callbackUrl: `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}`,
          redirect: false,
        });
        setIsLoading(false);
    
        if (res?.ok) {
          // toastsuccess
          console.log("success");
          router.push("/");
          return;
        } else {
          // Toast failed
          setError("Failed! Check you input and try again.");
          // return;
          console.log("Failed", res);
        }
        return res;
    }


    return(
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl" >
                <div className = "w-3/5 p-5">
                    <div className="text-left font-bold text-xl"> 
                    NA<span className="text-indigo-500">AI</span>A
                    </div>
                    <div className="py-10 mb-2">
                      {error && (
                      <div className="flex w-full py-3 p-1 rounded-md bg-red-500 text-white">
                        {error}
                      </div>
                      )}
                        <h2 className="text-3xl font-bold text-indigo-500 mb-2">Sign in to Account</h2>
                        <div className="border-2 w-10 border-indigo-500 inline-block mb-2"></div>
                        <div className="flex justify-center my-2">
                            <a href="#" className="border-2 rounded-full border-indigo-100 px-2 py-2 mx-1">
                                <FaFacebookF className="text-sm"/>
                            </a>
                            <a href="#" className="border-2 rounded-full border-indigo-100 px-2 py-2 mx-1">
                                <FaLinkedinIn className="text-sm"/>
                            </a>
                            <a href="#" className="border-2 rounded-full border-indigo-100 px-2 py-2 mx-1">
                                <FaGoogle className="text-sm"/>
                            </a>
                        </div>

                        <p className="text-indigo-200 my-3">or use email log in</p>
                        <div className="flex flex-col items-center">
                            <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                                <FaEnvelope className="text-gray-400 mr-2"/>
                                <input type="email" name="email" placeholder="Email" 
                                className={`border-${
                                  emailInPutError ? "red-500" : ""
                                } bg-gray-100 outline-none text-xs flex-1 m-2`}
                                id="email"
                                onChange={(e) => {
                                  setEmail(e.target.value);
                                }}/>
                            </div>
                            <div className="bg-gray-100 w-64 p-2 flex items-center">
                                <MdLockOutline className="text-gray-400 mr-2"/>
                                <input type="password" name="password" placeholder="Password" 
                                 className={`border-${
                                  passwordInPutError ? "red-500" : ""
                                } bg-gray-100 outline-none text-xs flex-1 m-2`}
                                id="email"
                                onChange={(e) => {
                                  setPassword(e.target.value);
                                }}/>
                            </div>
                            <div className="flex justify-between w-64 mt-3 mb-3">
                                <label className="flex items-center text-xs"> 
                                    <input type="checkbox" name="rememberMe" className="mr-1"/>Remember me
                                </label>
                                <a href="#" className="text-xs">Forgot Password?</a>
                            </div>
                            <button
                            className={`border-2 border-indigo-500 text-indigo-500 rounded-full px-12 py-2 font-semibold inline-block mt-3 hover:bg-indigo-500 hover:text-white focus:outline-none focus:shadow-outline ${
                              isLoading ? 'cursor-not-allowed opacity-50' : ''}`}
                              onClick={handleSubmit}
                              disabled={isLoading}
                              >
                                {isLoading ? 'Loading...' : 'Sign In'}
                            </button>
                    </div>
                </div>
                </div>{/*sign in section*/}
                <div className = "w-2/5 p-5 bg-indigo-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px">
                    <h2 className="text-3xl font-bold mb-2">Welcome, Friend!</h2>
                    <div className="border-2 w-10 border-white inline-block mb-2"></div>
                    <p className="mb-2">Sign up and start the AI journey with us</p>
                    <a href="/sign-up" className="border-2 border-white rounded-full px-12 py-2 inline-block mt-10 font-semibold hover:bg-white hover:text-indigo-500">Sign Up</a>
                </div>
          </div>
            
        </main>
    )
}
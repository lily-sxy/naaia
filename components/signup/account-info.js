
import {FaFacebookF, FaLinkedinIn, FaGoogle, FaEnvelope} from 'react-icons/fa'
import {MdLockOutline} from 'react-icons/md'
import React, { useEffect, useState } from "react";
import { validateEmail } from "../../lib/utils";
import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation';
import axios from 'axios';

const STEPS = {
    INFO: 1,
    PLAN: 2,
    CONFIRM: 3,
  }
export default function AcccountInfo({ formData, handleChange, setStep}){
    const {firstname, lastname, email, password, confirmPassword, passError } = formData;

    const router = useRouter()

    useEffect(()=>{
        validatePassword(password, confirmPassword);
    }, [password, confirmPassword]);
    
    function validatePassword(pass, confirmPass){
        let isValid = pass === confirmPass;
        if (!isValid) {
            handleChange(passError, true)
        }
        else{
            handleChange(passError, false)
        }
    }

    async function handleSubmit(e){
        e.preventDefault();
        setStep(STEPS.PLAN);
    }


    return(
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <div className="rounded-2xl shadow-2xl flex w-2/3 max-w-4xl" >
            <div className = "w-3/5 p-3 bg-white text-indigo-500 rounded-tl-2xl rounded-bl-2xl">
                    <div className="py-10 mb-2">
                    <h2 className="text-3xl font-bold mb-2">Create an account</h2>
                    <div className="border-2 w-10 border-indigo-500 inline-block mb-2"></div>
                        <div className="flex flex-col items-center">

                            <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 rounded-md">
                                <input 
                                type="firstName" 
                                name="firstName" 
                                placeholder="First Name" 
                                className='bg-gray-100 outline-none text-xs flex-1 m-2'
                                onChange={(e) => {handleChange("firstname", e.target.value)}}/>
                            </div>

                            <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 rounded-md">
                                <input 
                                type="lastName" 
                                name="lastName" 
                                placeholder="Last Name" 
                                className='bg-gray-100 outline-none text-xs flex-1 m-2'
                                onChange={(e) => {handleChange("lastname", e.target.value)}}/>
                            </div>
                            
                            <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 rounded-md">
                                <input type="email" 
                                name="email" 
                                placeholder="Email" 
                                className='bg-gray-100 outline-none text-xs flex-1 m-2'
                                onChange={(e) => {handleChange("email", e.target.value)}}/>
                            </div>

                            <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 rounded-md">
                                <input type="password" 
                                name="password" 
                                placeholder="Password" 
                                className='bg-gray-100 outline-none text-xs flex-1 m-2'
                                onChange={(e) => {handleChange("password", e.target.value)}}/>
                            </div>

                            <div className="bg-gray-100 w-64 p-2 flex items-center rounded-md">
                                <input type="password" 
                                name="cpassword" 
                                placeholder="Confirm Password" 
                                className='bg-gray-100 outline-none text-xs flex-1 m-2'
                                onChange={(e) => {handleChange("confirmPassword", e.target.value)}}/>
                                {passError && (<p className="text-red-500 text-xs italic"> Password do not match!</p>)}
                            </div>
                            <div className="flex justify-between w-64 mt-3 mb-3">
                                <label className="flex items-center text-xs"> 
                                    <input type="checkbox" name="rememberMe" className="mr-1"/> <text>I accept the <strong>Privacy Policy</strong></text>
                                </label>
                            </div>
                            <div>
                                <button
                                className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2  px-4 rounded  focus:outline-none  focus:shadow-outline"
                                onClick={handleSubmit}>
                                    Sign Up
                                </button>
                            </div>
                            <a href="/sign-up/plans" className="border-2 border-indigo-500 text-indigo-500 rounded-full px-12 py-2 inline-block mt-3 font-semibold hover:bg-indigo-500 hover:text-white">Next</a>
                        </div>
                    </div>
                </div>
                <div className = "bg-indigo-500 url w-2/5 p-5  text-white rounded-tr-2xl rounded-br-2xl">
                    <div className="text-right font-bold text-xl text-white"> 
                        NA<span className="text-lime-500">AI</span>A
                    </div> 
                   
                    <div className='flex items-center justify-center h-full'>
                        <h2 className="text-3xl font-bold ">Welcome to join the community!</h2> 
                    </div>
                    
                </div>
                
            </div>
            
        </main>
    )
}
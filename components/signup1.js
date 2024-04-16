
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import axios from 'axios';


export default function SignIn({}){
    const [lastname, setLastName] = useState();
    const [firstname, setFirstName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [passError, setPassError] = useState(false);

    const router = useRouter()

    useEffect(()=>{
        validatePassword(password, confirmPassword);
    }, [password, confirmPassword]);
    
    function validatePassword(pass, confirmPass){
        let isValid = pass === confirmPass;
        if (!isValid) {
            setPassError(true)
        }
        else{
            setPassError(false)
        }
    }

    async function handleSubmit(e){
        e.preventDefault();
        const userData = {
            firstname: String(firstname),
            lastname: String(lastname),
            email: String(email),
            password: String(password),
        };

        console.log("Request payload", userData);
        const res = await axios.post("/api/user/create",{
            method:"POST",
            body: JSON.stringify(userData),
            headers:{
                "Content-Type": "application/json",
            },
        });

        console.log("reponse:", res);
        console.log("response sucessful: ", res.status==200);

        if(res.status==200){
            router.push('/sign-up/plans')
        }else{
            console.log("failed")
        }
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
                                onChange={(e) => {setFirstName(e.target.value)}}/>
                            </div>

                            <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 rounded-md">
                                <input 
                                type="lastName" 
                                name="lastName" 
                                placeholder="Last Name" 
                                className='bg-gray-100 outline-none text-xs flex-1 m-2'
                                onChange={(e) => {setLastName(e.target.value)}}/>
                            </div>
                            
                            <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 rounded-md">
                                <input type="email" 
                                name="email" 
                                placeholder="Email" 
                                className='bg-gray-100 outline-none text-xs flex-1 m-2'
                                onChange={(e) => {setEmail(e.target.value)}}/>
                            </div>

                            <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 rounded-md">
                                <input type="password" 
                                name="password" 
                                placeholder="Password" 
                                className='bg-gray-100 outline-none text-xs flex-1 m-2'
                                onChange={(e) => {setPassword(e.target.value)}}/>
                            </div>

                            <div className="bg-gray-100 w-64 p-2 flex items-center rounded-md">
                                <input type="password" 
                                name="cpassword" 
                                placeholder="Confirm Password" 
                                className='bg-gray-100 outline-none text-xs flex-1 m-2'
                                onChange={(e) => {setConfirmPassword(e.target.value)}}/>
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
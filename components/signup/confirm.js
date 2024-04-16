import { useRouter } from 'next/navigation';
import getStripe from '../../lib/stripe';
import {toast} from 'react-toastify';
import axios from 'axios';

export default function Confirm({formData, plan}){
    const router = useRouter();
    async function handleSubmit(e) {
        e.preventDefault();
        const res = await axios.post("/api/checkout", { 
            method: "POST",
            //body: JSON.stringify(userData),
            //body: JSON.stringify({amount}),
            headers: {
            "Content-Type": "application/json",},
        });

        if (res.status != 200){
            console.error(res.message);
            return
        }
        const {sessionURL} = await res.data;

        console.log("sessionId", sessionURL)
        //redirect to Checkout
        const stripe = getStripe();
        //if getStrip failed:
        if (!stripe){
            throw new Error("cannot connect to stripe server");
        }
    
        try{
            console.log("try")
            router.push(sessionURL)
        }catch(error){
            toast.error("Failed to start transaction!");
        }
    };
return(
    <div>
        <div><p className=' text-black'>{ formData.firstname}</p></div>
        <div><p className=' text-black'>{ formData.lastname}</p></div>
        <div><p className=' text-black'>{ formData.email}</p></div>
        <div><p className=' text-black'>{ formData.password}</p></div>
        <div><p className=' text-black'>{ plan}</p></div>
        <button onClick={handleSubmit} className="bg-blue-700 hover:bg-blue-800 duration-200 px-8 py-4 text-white"> Checkout </button>
    </div>
)
}

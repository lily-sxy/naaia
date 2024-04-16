"use client"
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider=({children}) => {
    const [userInfo, setUserInfo] = useState({
        plan:"",
        price: 0,
        firstname:"",
        lastname:"",
        email:"",
        password:"",
    })

    const updatePlanPrice = (newPlan) => {
        setUserInfo(prevState => ({
            ...prevState,
            plan: newPlan.plan,
            price: newPlan.price
        }));
    };

    return (
        <UserContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </UserContext.Provider>
    )
}
export const useUser = () => useContext(UserContext);
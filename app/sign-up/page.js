"use client"

import React from "react";
import Stepping from "../../components/stepping";
import AcccountInfo from "../../components/signup/account-info";
import Plans from "../../components/signup/plan";
import Confirm from "../../components/signup/confirm";
import { useRouter } from "next/navigation";
import { useState } from "react";



const STEPS = {
  INFO: 1,
  PLAN: 2,
  CONFIRM: 3,
}

const Home = () => {
  const router = useRouter();
  const [step, setStep] = useState(STEPS.INFO)
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    passError: false
  });
  //firstname={firstname} setFirstName={setFirstName}
  //<SignIn firstname={firstname} setFirstName={setFirstName} />

  const [plan, setPlan] = useState();

  const handleChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
    console.log(formData)
  };

    return (
        <>
        {step === STEPS.INFO && (
        <>
          <Stepping currentPage="account"/>
          <AcccountInfo formData={formData} handleChange={handleChange} setStep={setStep} />
        </>
        )}
        {step === STEPS.PLAN && (
        <>
          <Stepping currentPage="Plans"/>
          <Plans setPlan={setPlan} setStep={setStep} />
        </>
        )}
        {step === STEPS.CONFIRM && (
        <>
          <Stepping currentPage="Confirm"/>
          <Confirm formData={formData} plan={plan} />
        </>
        )}
        </>
    );
  }

export default Home;
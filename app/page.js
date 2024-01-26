"use client"

import Hero from "../components/hero" ;
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import {benefit} from "../components/data";
import Benefits from "../components/benefits";


const Home = () => {
    return (
      <>
        <Navbar />
        <Hero />
        <Benefits data={benefit} />
        <Footer/>
      </>
    );
  }

export default Home;
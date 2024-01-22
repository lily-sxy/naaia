"use client"

import Hero from "../components/hero" ;
import Navbar from "../components/navbar";

import {benefit} from "../components/data";
import Benefits from "../components/benefits";
import Footer from "../components/footer";

const Home = () => {
    return (
      <>
        <Navbar />
        <Hero />
        <Benefits data={benefit} />
        <Footer />
      </>
    );
  }

export default Home;
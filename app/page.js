"use client"

import Hero from "../components/hero" ;
import {benefit} from "../components/data";
import Benefits from "../components/benefits";
import Footer from "../components/footer";

const Home = () => {
    return (
      <>
        <Hero />
        <Benefits data={benefit} />
        {/* <Footer /> */}
      </>
    );
  }

export default Home;
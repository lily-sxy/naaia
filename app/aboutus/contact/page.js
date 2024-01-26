"use client"

import Navbar from "../../../components/navbar";
import Container from "../../../components/container";
import { address, email } from "../../../components/data";
import Contents from "../../../components/content";
import Footer from "../../../components/footer";



const Contact = () => {
    return (
        <>
    <Navbar />
    <Container className="flex flex-wrap justify-center max-w-full">
        <div className="flex w-full lg:w-1/2">
          <div>
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight">
              Contact NAAIA
           </h1>
        
            <Contents data={address} />
            <Contents data={email}/>
          </div>
        </div>
        <Footer />
        </Container>
        </>
    );
  }

export default Contact;
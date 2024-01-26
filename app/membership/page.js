"use client"

import Navbar from "../../components/navbar";
import Container from "../../components/container";
import { membership} from "../../components/data";
import Contents from "../../components/content";
import Footer from "../../components/footer";

const Membership = () => {
    return (
        <>
    <Navbar />
    <Container className="flex flex-wrap justify-center max-w-full">
        <div className="flex items-center w-full lg:w-1/2">
          <div>
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight">
                Membership
            </h1>
            <Contents data={membership} />
            
          </div>
        </div>
        <Footer />
        </Container>
        </>
    );
  }

export default Membership;
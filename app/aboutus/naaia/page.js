"use client"

import Navbar from "../../../components/navbar";
import Container from "../../../components/container";
import { goals, activities } from "../../../components/data";
import Contents from "../../../components/content";
import Footer from "../../../components/footer";

const Naaia = () => {
    return (
        <>
    <Navbar />
    <Container className="w-full flex flex-wrap justify-center max-w-full">
        <div className="flex w-full lg:w-1/2">
          <div>
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight">
              Who are we?
           </h1>
           <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-xl">
            The North America Artificial Intelligence Association aims to 
            advance and promote the AI research, education, spanning from 
            elementary levels to university and career training, technology 
            industrialization, and responsible use of artificial intelligence 
            for the benefit of society, by fostering collaboration among 
            AI professionals, academics, and industry leaders. 
            Our goal is to make AI accessible and useful for everyone, enhancing 
            learning, collaboration, and innovation in the professional world.
            </p>
            <Contents data={goals} />
            <Contents data={activities}/>
          </div>
        </div>
        <Footer />
        </Container>
        </>
    );
  }

export default Naaia;
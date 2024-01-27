"use client"

import Container from "../../../components/container";
import { bylawOne, bylawTwo,bylawThree,bylawFour,bylawFive,bylawSix,bylawSeven,bylawEight,bylawNine,bylawTen} from "../../../components/data";
import Contents from "../../../components/content";

const Bylaw = () => {
    return (
        <>
    <Container className="flex flex-wrap justify-center max-w-full">
      <div className="flex w-full lg:w-1/2">
          <div>
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight">
              AI Bylaw
           </h1>
           
            <Contents data={bylawOne} />
            <Contents data={bylawTwo}/>
            <Contents data={bylawThree}/>
            <Contents data={bylawFour}/>
            <Contents data={bylawFive}/>
            <Contents data={bylawSix}/>
            <Contents data={bylawSeven}/>
            <Contents data={bylawEight}/>
            <Contents data={bylawNine}/>
            <Contents data={bylawTen}/>
          </div>
        </div>
        </Container>
        </>
    );
  }

export default Bylaw;
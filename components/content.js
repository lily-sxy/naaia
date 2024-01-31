
import React from "react";
import Container from "./container";


const Contents = (props) => {
  const { data } = props;
  return (
    <>
      <Container className="flex flex-wrap mt-1 mb-1 lg:gap-5 lg:flex-nowrap">
    
          <div>
            <div className="flex flex-col w-full mt-2">
              <h3 className="max-w-2xl mt-3 text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-2xl">
                {data.title}
              </h3>
              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl">
                {data.desc}
              </p>
            </div>

            <div className="w-full mt-2">
              {data.bullets.map((item, index) => (
                <Content key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </Content>
              ))}
            </div>

          </div>
      </Container>
    </>
  );
};

function Content(props) {
  return (
    <>
      <div className="flex items-start mt-1 space-x-3">
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-4 h-4 ">
          
        </div>
        <div>
          <h4 className="text-base font-medium text-gray-800">
            {props.title}
          </h4>
        </div>
      </div>
    </>
  );
}

export default Contents;

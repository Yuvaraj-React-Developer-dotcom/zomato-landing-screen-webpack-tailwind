import React from "react";

const LayoutTwo = ({ item }) => {
  return (
    <div className="second-container py-[4.5rem]">
      <div className="grid grid-cols-1 lg:grid-cols-8 gap-[0.5rem]">
        <div className="lg:col-start-2 lg:col-span-3 content-center">
          <div className="text-[2rem] lg:text-[3rem] text-[#ffffff] font-black text-center">
            {item?.title}
          </div>
          <div className="mt-[1rem] lg:mt-[0] text-[1.125rem] lg:text-[1.5rem] text-[#ffffff] font-normal text-center">
            {item?.content}
          </div>
        </div>
        <div
          id={item?.className}
          className="lg:col-start-5 lg:col-span-3"
        ></div>
      </div>
    </div>
  );
};

export default LayoutTwo;

import React from "react";

const LayoutThree = ({ item }) => {
  return (
    <div className="second-container py-[4.5rem]">
      <div className="grid grid-cols-8 gap-[0.5rem] flex-col-reverse">
        <div id={item?.className} className="col-start-2 col-span-3"></div>
        <div className="col-start-5 col-span-3 content-center">
          <div className="text-[3rem] text-[#ffffff] font-black">
            {item?.title}
          </div>
          <div className="text-[1.5rem] text-[#ffffff] font-normal">
            {item?.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutThree;

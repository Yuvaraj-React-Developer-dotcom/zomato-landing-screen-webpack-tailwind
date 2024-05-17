import React from "react";
import { data } from "./data/sectionData";
const LayoutFour = () => {
  return (
    <div className="fourth-container py-[4.5rem]">
      <div className="grid grid-cols-1 gap-[0.5rem] mx-[1.5rem]">
        <div className="text-[2rem] lg:text-[3rem] text-[#ffffff] font-black text-center mb-[1.5rem]">
          Frequently Asked Questions
        </div>
        {data?.map((item) => (
          <div className="flex justify-between items-center p-[1.5rem] bg-[#2d2d2d] cursor-pointer">
            <div className="text-[1.125rem] lg:text-[1.5rem] text-[#ffffff]">
              {item?.title}
            </div>
            <div className="text-[red] ">
              <svg
                width="32"
                height="32"
                fill="#ffffff"
                class="bi bi-plus-lg"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                />
              </svg>
            </div>
          </div>
        ))}
        <div className="text-[1.25rem] mb-[1rem] font-normal text-[#ffffff] mt-[2.85rem] text-center">
          Ready to watch? Enter your email or mobile number to create or restart
          your membership.
        </div>
        <div className="flex justify-center ">
          <div class="grid grid-cols-1 lg:grid-cols-4 gap-2 lg:w-[80%]">
            <div class="lg:col-span-3">
              <input
                placeholder="Email or Mobile Number"
                type="text"
                className="w-[100%] h-[100%] text-[#ffffff] text-[1rem] py-[0.75rem] px-[1rem] border-[1px] rounded-[6px] border-[1px] border-[#73777B] bg-[#00000066]"
              ></input>
            </div>
            <div className="flex justify-center">
              <div className="text-[#ffffff] text-[1.5rem] font-medium px-[1.5rem] py-[0.75rem] bg-[#C11119] rounded-[6px]">
                Get Started
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutFour;

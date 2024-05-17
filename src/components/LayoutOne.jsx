import React from "react";

const LayoutOne = () => {
  return (
    <div className="first-container">
      <div className="shadow-bg"></div>
      <div className="second-bg">
        <div className="py-[1.5rem] md:px-[3rem] flex justify-between items-center xl:mx-[8.125rem]">
          <div className="image-controller">
            <div className="h-[100px] md:h-[130px]">
              <img
                className="w-[100%] h-[100%]"
                src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png"
                alt="logo"
              />
            </div>
          </div>
          <div>
            <div className="text-[0.875rem] text-[#ffffff] px-[1rem] py-[.5rem] font-bold bg-[#C11119] rounded-[6px]">
              Sign In
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[1rem] mt-[8%]">
          <div className="text-[2rem] text-center md:text-[3rem] font-black text-[#ffffff]">
            Unlimited movies, TV shows and more
          </div>
          <div className="text-[1.125rem] md:text-[1.5rem]  font-normal text-[#ffffff]">
            Watch anywhere. Cancel anytime.
          </div>
          <div className="text-[1.25rem] font-normal text-[#ffffff] text-center">
            Ready to watch? Enter your email or mobile number to create or
            restart your membership.
          </div>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-2">
            <div class="md:col-span-3">
              <input
                placeholder="Email or Mobile Number"
                type="text"
                className="w-[100%] h-[100%] text-[#ffffff] text-[1rem] py-[0.75rem] px-[1rem] border-[1px] rounded-[6px] border-[1px] border-[#73777B] bg-[#00000066]"
              ></input>
            </div>
            <div className="flex md:block justify-center">
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

export default LayoutOne;

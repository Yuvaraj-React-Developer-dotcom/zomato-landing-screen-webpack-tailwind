import React from "react";

const LayoutFive = () => {
  return (
    <div className="fifth-container py-[4.5rem]">
      <div className="px-[2rem] grid grid-cols-2 md:grid-cols-4">
        <div className="col-span-2 md:col-span-4 mb-[0.75rem] text-[#ffffff]">
          Questions? Call 000-800-919-1694
        </div>
        <div className="text-[#ffffff] text-[0.875rem] flex flex-col gap-[.5rem] underline">
          <div>FAQ</div>
          <div>Investor Relations</div>
          <div>Privacy</div>
          <div>Speed Test</div>
        </div>
        <div className="text-[#ffffff] text-[0.875rem] flex flex-col gap-[.5rem] underline">
          <div>Help Centre</div>
          <div>Jobs</div>
          <div>Cookie Preferences</div>
          <div>Legal Notices</div>
        </div>
        <div className="text-[#ffffff] text-[0.875rem] flex flex-col gap-[.5rem] underline">
          <div>Account</div>
          <div>Ways to Watch</div>
          <div>Cookie Preferences</div>
          <div>Legal Notices</div>
        </div>
        <div className="text-[#ffffff] text-[0.875rem] flex flex-col gap-[.5rem] underline">
          <div>Media Centre</div>
          <div>Terms of Use</div>
          <div>Contact Us</div>
        </div>
        <div className="col-span-2 md:col-span-4 text-[#ffffff] text-[0.875rem] mt-[1.5rem]">
          Netflix India
        </div>
      </div>
    </div>
  );
};

export default LayoutFive;

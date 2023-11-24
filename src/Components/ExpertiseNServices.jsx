import React from "react";
import ExpertiseNServiceCard from "./ExpertiseNServiceCard"; // Corrected import name
import imga from "../Images/imga.jpg";

function ExpertiseNService() {
  // Modified component name
  return (
    <div className="flex flex-col items-center px-3 md:px-12 lg:px-20 bg-[#0E1628] text-white pt-18">
      {/* <h1 className="text-lg font-serif font-bold pb-1">WHAT WE DO</h1> */}
      <h1 className="text-3xl font-serif font-semibold">
        Expertise & <span className="text-[#C68EF3]">Services</span>
      </h1>
      <div className="mt-10 text-[#B3BFBC] flex justify-center space-x-2 lg:space-x-16 md:space-x-16 sm:space-x-8 text-xl pb-6 bg-[#0E1628]">
        <div className="group relative sm:h-[70px]">
          <h1 className="hover:text-white hover:cursor-pointer lg:mb-2 sm:mb-10">
            Uniforms
          </h1>
          <div className="hidden group-hover:block w-[60%] h-1 bg-white"></div>
        </div>

        <div className="group relative">
          <h1 className="hover:text-white hover:cursor-pointer mb-2">
            General Order Supplier
          </h1>
          <div className="hidden group-hover:block w-[60%] h-1 bg-white"></div>
        </div>

        <div className="group relative">
          <h1 className="hover:text-white hover:cursor-pointer mb-2">
            Accounting & ERP Sol.
          </h1>
          <div className="hidden group-hover:block w-[60%] h-1 bg-white"></div>
        </div>

        <div className="group relative">
          <h1 className="hover:text-white hover:cursor-pointer mb-2">
            Website Dev.
          </h1>
          <div className="hidden group-hover:block w-[60%] h-1 bg-white"></div>
        </div>
      </div>
      <hr className="-mt-10 sm:-mt-7 lg:w-[69%] md:w-[58%] sm:w-[100%] lg:mx-[230px] opacity-10" />
      <br />
      <ExpertiseNServiceCard /> {/* Corrected component name */}
      <br />
      <br />
    </div>
  );
}

export default ExpertiseNService; // Modified export name

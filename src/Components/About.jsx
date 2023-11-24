import React from "react";
import imga from "../Images/imga.jpg";

function About() {
  return (
    <div name="about" className="flex items-center flex-col space-y-6 lg:flex-row lg:space-x-10 px-6 md:px-12 lg:px-20  mt-12 lg:mt-20 md:mt-20 sm:mt-20">
      <div className="w-full lg:w-[45%]">
        <h1 className="text-[#C68EF3] text-3xl lg:text-4xl md:text-3xl font-sans font-bold">
          Pioneering <span className="text-white">Excellence,</span>
        </h1>
        <h1 className="text-3xl lg:text-4xl md:text-3xl text-white font-sans font-bold">
          Focused on <span className="text-[#C68EF3]">you</span>
        </h1>
        <p className="text-[#C0C0C0] mt-3 lg:mt-4 md:mt-4">
          At Bhajanka Global, we are dedicated to transforming your business
          dreams into reality. Share with us the challenges you face, your
          business objectives, and the unique requirements that define your
          journey. Together, let's unlock the full potential of your business
          and pave the way for unparalleled success.
        </p>
        <button className="mt-4 px-4 py-2 border-2 border-none rounded-md bg-[#EB4A4A] hover:bg-[#af5252] text-white">
          Who are we!
        </button>
      </div>
      <div>
        <img
          className="w-full md:w-[550px] h-auto rounded-lg"
          src={imga}
          alt="img-1"
        />
      </div>
    </div>
  );
}

export default About;

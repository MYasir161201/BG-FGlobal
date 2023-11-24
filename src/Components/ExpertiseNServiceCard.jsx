import React from "react";
import imga from "../Images/imga.jpg";

function ExpertiseNServiceCard() {
  return (
    <div className="flex flex-row items-center lg:mx-[230px] space-x-4 lg:space-x-12 md:space-x-6 sm:space-x-6 w-[100%] lg:w-[70%] md:w-[90%] sm:w-[90%]">
      <div className="">
        <img
          className="w-[350px] rounded-lg"
          src={imga}
          alt=""
        />
      </div>

      <div className="w-[450px]">
        <h1 className="text-lg sm:text-xl lg:text-2xl md:text-2xl text-white font-serif font-bold mb-2">
          Uniforms:
        </h1>
        <div className="mb-4">
          <li className="text-[#C0C0C0]">
            Hello, this is the 1st point of your content.
          </li>

          <li className="text-[#C0C0C0]">
            Hello, this is the 2nd point of your content.
          </li>
          <li className="text-[#C0C0C0]">
            Hello, this is the 3rd point of your content.
          </li>
        </div>
        <button className="mt-4 px-4 py-2 border-2 border-none rounded-md bg-[#EB4A4A] hover:bg-[#af5252] text-white">
          Know More
        </button>
      </div>
    </div>
  );
}

export default ExpertiseNServiceCard;

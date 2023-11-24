import React from "react";

function ReasonCard(props) {
  return (
    // bg-[#211047b2] hover:bg-[#21104754]
    <div className="w-[85%] lg:w-[400px] aspect-auto p-4  border-[1px] border-zinc-600 hover:cursor-pointer rounded-lg mb-4 mr-2">
      <button className="px-4 py-1 bg-[#C68EF3] rounded-lg mb-6 lg:mb-10 md:mb-10 sm:mb-10">
        #{props.number}
      </button>
      <div className="align-middle">
        <h1 className="text-2xl p-2 font-serif font-semibold text-white">
          {props.name}
        </h1>
        <p className="font-sans text-[#C0C0C0] mb-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex voluptate
          facilis fugit earum accusantium repudiandae odio dolor perspiciatis
          consectetur deleniti, quod, distinctio possimus porro! Ipsa, minus.
          Deserunt iste id ea.
        </p>
      </div>
    </div>
  );
}

export default ReasonCard;

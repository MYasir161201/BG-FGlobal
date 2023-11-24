import React from "react";
import NewTestimonial from "./NewTestimonial";

function TestimonialCard(props) {
  return (
    <>
    <div className="flex-row sm:w-[520px] p-6 md:w-[680px] lg:w-[720px] h-[250px] items-center border-[1px] border-zinc-600">
      <div className="flex space-x-2">
        <img
          className="w-[50px] h-[50px] rounded-full"
          src={props.img}
          alt="user"
        />
        <div>
          <h1 className="mt-1">{props.name}</h1>
        </div>
      </div>
      <div>
        <h1 className="text-left font-sans text-[#C0C0C0] mt-5">
          {props.review}
        </h1>
      </div>
    </div>
    <NewTestimonial />
    </>
  );
}

export default TestimonialCard;

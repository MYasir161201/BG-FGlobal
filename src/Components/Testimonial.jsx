import React from "react";
import TestimonialCard from "./TestimonialCard";
import imagess from "../Images/avatarimg.jpg";

const review =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facere quaerat hic est. Nobis sapiente omnis, qui molestiae corporis modi adipisci rerum dolorum fugiat doloribus. Dolor veritatis libero et incidunt.";

function Testimonial() {
  return (
    <div name="testimonials" className="w-full pb-10 text-gray-300 bg-[#0E1628] flex flex-col justify-center items-center pt-4 px-5 md:px-12 lg:px-20">
      <h1 className="mb-8 text-4xl font-bold">
        Client <span className="text-[#C68EF3]">Feedback</span>
      </h1>
      <div className="flex flex-col items-center w-full">
        <TestimonialCard img={imagess} review={review} name="Ritick" />
      </div>
    </div>
  );
}

export default Testimonial;

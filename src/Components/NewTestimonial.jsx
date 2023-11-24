import React from "react";

function NewTestimonial() {

  function handleSubmit(e){
    e.preventDefault();
    e.target.reset();
 }

  return (

    <div className="w-full text-gray-300 bg-[#0E1628] flex justify-center items-center px-5 md:px-12 lg:px-20">
      <form
        action=""
        method="POST"
        className="flex flex-col max-w-[750px] w-full lg:px-7 md:px-7"
        onSubmit={handleSubmit}
      >
        <div className="pb-2 ">
          <p className="pt-4 text-white">
            <span className="text-[#C68EF3] text-2xl font-semibold">
              Share Your Experience:-
            </span>{" "}
            {/* :- Help Us Grow with Your Review! */}
          </p>
        </div>
        <textarea
          className="p-2 bg[#ccd6f6] text-black rounded-sm"
          rows="6"
          placeholder="Message"
          name="message"
        ></textarea>
        <button className="text-white rounded-md  bg-[#EB4A4A] border-2 hover:bg-[#af5252] px-4 py-2 my-4 mx-auto ">
          Submit Review
        </button>
      </form>
    </div>
  );
}

export default NewTestimonial;

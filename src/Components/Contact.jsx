import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full text-gray-300 bg-[#0E1628] flex justify-center items-center pt-6 px-5 md:px-12 lg:px-20"
    >
      <form
        action=""
        method="POST"
        className="flex flex-col max-w-[750px] w-full"
      >
        <div className="pb-8">
          <center>
            <p className="text-4xl font-bold ">
              Contact <span className="text-[#C68EF3]">Us</span>
            </p>
          </center>
          <p className="pt-8">
            Submit the form below or shoot me an email - xyz@gmail.com
          </p>
        </div>
        <input
          className="-mt-6 p-2 bg[#ccd6f6] text-black"
          placeholder="Enterprise Name"
          type="text"
          name="name"
        />
        <input
          className="mt-4 p-2 bg[#ccd6f6] text-black"
          placeholder="Name"
          type="text"
          name="name"
        />
        <input
          className="my-4 p-2 bg[#ccd6f6] text-black"
          placeholder="Email"
          type="email"
          name="email"
        />
        <input
          className="mb-4 p-2 bg[#ccd6f6] text-black"
          placeholder="Phone Number"
          type="number"
          name="email"
        />
        <textarea
          className="p-2 bg[#ccd6f6] text-black"
          rows="10"
          placeholder="Message"
          name="message"
        ></textarea>
        <button className="text-white rounded-md  bg-[#EB4A4A] border-2 hover:bg-[#af5252] px-4 py-2 my-8 mx-auto flex items-center">
          Let's collaborate
        </button>
      </form>
    </div>
  );
};

// <button className="mt-4 px-4 py-2 border-2 border-none rounded-md bg-[#EB4A4A] hover:bg-[#af5252] text-white  ">
//           Who are we!
//         </button>
export default Contact;

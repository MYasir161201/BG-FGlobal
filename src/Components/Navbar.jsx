import React from "react";
import logo from "../Images/logo_final1.jpeg";
import { Link } from "react-scroll";
// md:fixed w-full flex pl-6 md:pl-12 lg:pl-20 pr-6 py-4 border-b-2
function Navbar() {
  return (
    <div className="md:fixed w-full flex pl-6 md:pl-12 lg:pl-20 pr-6 py-4 border-b-2  bg-[#0E1628]">
      <div className="text-white font-serif">
        <img
          className="w-[170px] border-2 border-opacity-9e0  border-white rounded-sm"
          src={logo}
          alt=""
        />
        {/* <h1>BHAJANKA GLOBAL</h1> */}
      </div>
      <div className="hidden lg:flex md:flex sm:flex sm:space-x-3 lg:space-x-6 space-x-6 ml-[20%] lg:ml-[50%] md:ml-[40%] text-[#767d8b] h-[18px] lg:mt-3">
        <div className=" group relative">
          <h1 className="cursor-pointer text-[#af5252] "><Link to="about" smooth={true} duration={500}>About Us</Link></h1>
          <div className="hidden group-hover:block w-6 h-1 bg-white"></div>
        </div>
        <div className="group relative">
          <h1 className="cursor-pointer hover:text-white text-[#C0C0C0]">
            <Link to="products" smooth={true} duration={500}>Product & Services</Link>
          </h1>

          <div className="hidden group-hover:block w-6 h-1 bg-white text-[#C0C0C0]"></div>
        </div>
        <div className="group relative">
          <h1 className="cursor-pointer hover:text-white text-[#C0C0C0]">
          <Link to="testimonials" smooth={true} duration={500}>Testimonials</Link>
          </h1>
          <div className="hidden group-hover:block w-6 h-1 bg-white text-[#C0C0C0]"></div>
        </div>
        <div className="group relative">
          <h1 className="cursor-pointer hover:text-white text-[#C0C0C0]">
          <Link to="contact" smooth={true} duration={500}>Contact Us</Link>
          </h1>
          <div className="hidden group-hover:block w-6 h-1 bg-white"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

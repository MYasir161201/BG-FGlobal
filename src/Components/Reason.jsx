import React from "react";
import ReasonCard from "./ReasonCard";

function Reason() {
  return (
    <div className="bg-[#0E1628] px-3 md:px-12 lg:px-20">
      <h1 className="text-center pt-12 sm:pt-24 pb-6 text-3xl font-serif text-white font-semibold">
        Reason to choose <span className="text-[#C68EF3]">Bhajanka Global</span>
      </h1>
      <div className="flex flex-col items-center lg:flex-row pb-20">
        <ReasonCard name="Reliability" number="one" />
        <ReasonCard name="Transparency" number="two" />
        <ReasonCard name="Simplicity" number="three" />
      </div>
    </div>
  );
}

export default Reason;

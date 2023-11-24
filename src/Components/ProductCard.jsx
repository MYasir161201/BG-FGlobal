import React from "react";

const ProductCard = (props) => {
  return (
    <div className="flex space-x-2 border-[1px] border-zinc-600 mb-2">
      <img
        className="w-[180px] h-[220px] lg:w-[200px] lg:h-[300px] sm:w-[160px] sm:h-[240px] "
        src={props.img}
        alt="tally"
      />
      <img
        className="hidden lg:block md:block sm:block w-[180px] h-[220px] lg:w-[200px] lg:h-[300px] sm:w-[160px] sm:h-[240px]"
        src={props.img2}
        alt="hello"
      />
      <div className="text-white mt-7 sm:mt-4 lg:pl-4 md:pl-3 sm:pl-2">
        <h1 className="text-xs sm:text-lg md:text:lg lg:text-lg mr-2">
          {props.name} {props.description}
        </h1>
        <h1 className="text-[#C0C0C0] text-xs md:text:sm lg:text-sm pt-2">Rating: {props.rating}</h1>
        <h1 className="text-blue-500 text-sm">License</h1>

        <h1 className="font-sans lg:pt-2 sm:pt-1 text-base lg:text-2xl md:text-xl">
          {props.price} (<span className="text-sm">{props.breakdown}</span>)
        </h1>
      </div>
    </div>
  );
};

export default ProductCard;

// <div className="md:w-[400px] md:h-[500px] sm:w-[85%] aspect-auto p-4 border-2 border-none bg-[#211047b2] rounded-lg hover:bg-[#21104754] hover:cursor-pointer my-5">
//       <img className="h-[60%] w-full" src={props.img} />
//       <div className="align-middle">
//         <h1 className=" text-2xl p-2 font-serif font-semibold text-white">
//           {props.name}{" "}
//         </h1>
//         <p className=" font-sans text-[#767d8b]">{props.description} </p>
//         <h2 className="text-white text-2xl my-1">{props.price}</h2>
//       </div>
//     </div>

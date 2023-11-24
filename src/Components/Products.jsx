import React from "react";
import ProductCard from "./ProductCard";
import ProductImg from "../Images/ProductImg.jpg";
import tallyGold from "../Images/tallyGold.jpg";
import tallySilver from "../Images/tallySilver.jpg";
import tssback from "../Images/Tally_software_back.jpg";
import tgoldback from "../Images/tally-prime-gold back.png";
import tpsilverback from "../Images/tallyprimesilver_back.jpg";

const Products = () => {
  return (
    <div name="products" className="bg-[#0E1628] px-6 md:px-12 lg:px-20 ">
      <h1 className="text-center pt-16 pb-6 text-3xl font-serif text-white font-semibold ">
        Our <span className="text-[#C68EF3]">Products</span>
      </h1>
      <div className="lg:w-[90%] sm:w-[100%] sm:grid sm:grid-cols-1 md:grid md:grid-cols-1 items-center sm:flex-col pb-20">
        <ProductCard
          img={ProductImg}
          img2={tssback}
          name="Tally Software Services (TSS) - Silver"
          description=" An annual software subscription for your existing TallyPrime/Tally.ERP 9 licenses (Enter serial number in the link received on e-mail)"
          price="₹4,248"
          breakdown="₹3,600 + 18% GST"
          rating="⭐⭐⭐⭐⭐"
        />
        <ProductCard
          img={tallyGold}
          img2={tgoldback}
          name="TallyPrime Gold"
          description="one software for all your business needs - Accounting, GST, Invoice, Inventory, MIS & more (No CD. E-mail delivery in 2 hours)"
          price="₹63,720"
          breakdown="₹54,000 + 18% GST"
          rating="⭐⭐⭐⭐⭐"
        />
        <ProductCard
          img={tallySilver}
          img2={tpsilverback}
          name="TallyPrime Silver"
          description="one software for all your business needs - Accounting, GST, Invoice, Inventory, MIS & more (No CD. E-mail delivery in 2 hours)"
          price="₹21,240"
          breakdown="₹18,000 + 18% GST"
          rating="⭐⭐⭐⭐⭐"
        />
        <ProductCard
          img={ProductImg}
          img2={tssback}
          name="Tally Software Services (TSS) - Silver"
          description=" An annual software subscription for your existing TallyPrime/Tally.ERP 9 licenses (Enter serial number in the link received on e-mail)"
          price="₹4,248"
          breakdown="₹3,600 + 18% GST"
          rating="⭐⭐⭐⭐⭐"
        />
      </div>
    </div>
  );
};

export default Products;

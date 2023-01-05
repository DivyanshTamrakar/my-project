import React from "react";
import Button from "../button/button";

function Trusted() {
  return (
    <div className="bg-productsBackground pb-16 text-white">
      <div className="container xl:mx-auto pt-8 md:pt-28 px-8 lg:px-20 2xl:px-40">
        {/* title */}
        <h1 className="text-4xl md:text-5xl font-bold py-1">Trusted by</h1>
        {/* description */}
        <p className="font-light text-xl my-3 mt-5">
          Leading companies across the globe have put their faith in us to drive
          innovation and develop tailored solutions for them.
        </p>
        <Button text="READ THE CASE STUDIES" />
      </div>
    </div>
  );
}

export default Trusted;

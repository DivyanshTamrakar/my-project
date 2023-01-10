import React from "react";
import Button from "../button/button";

type AppProps = {
  heading: string;
  subheading: string;
  partners: string[];
  buttonText: string;
};

function Trusted({ data }: { data: AppProps }) {
  console.log(data);
  return (
    <div className="bg-productsBackground pb-16 text-white">
      <div className="container xl:mx-auto pt-8 md:pt-28 px-8 lg:px-20 2xl:px-40">
        {/* title */}
        <h1 className="text-4xl md:text-5xl font-bold py-1">{data.heading}</h1>
        {/* description */}
        <p className="font-light text-xl my-3 mt-5 text-productText">
          {data.subheading}
        </p>
        <Button text={data.buttonText} />
      </div>
    </div>
  );
}

export default Trusted;

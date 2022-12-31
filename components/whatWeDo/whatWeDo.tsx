import React, { useState } from "react";
import DetailsCard from "./detailsCard";

function WhatWeDo() {
  const [data, setData] = useState([
    {
      icon: "https://geekyants.com/images/services/ux-ui.svg",
      heading: "UI / UX",
      description:
        " Unique designs for your product, guaranteed to be user-centric and a visual treat!",
    },
    {
      icon: "https://geekyants.com/images/services/web3.svg",
      heading: "Web3 @ GeekyAnts",
      description:
        "Start your journey into the new face of the web, with ultra-modern apps built in Web3 technology.",
    },
    {
      icon: "https://geekyants.com/images/services/business.svg",
      heading: "Business Analysis",
      description:
        "We discover, study and document business needs in collaboration with stakeholders and propose foolproof solutions that fit like a glove.",
    },
    {
      icon: "https://geekyants.com/images/services/quality-assurance.svg",
      heading: "Quality Assurance",
      description:
        "No compromise on the most important thing - the 'quality' of what we deliver. Exceeding your expectations is in our DNA.",
    },
    {
      icon: "https://geekyants.com/images/services/ux-ui.svg",
      heading: "UI / UX",
      description:
        " Unique designs for your product, guaranteed to be user-centric and a visual treat!",
    },
    {
      icon: "https://geekyants.com/images/services/web3.svg",
      heading: "Web3 @ GeekyAnts",
      description:
        "Start your journey into the new face of the web, with ultra-modern apps built in Web3 technology.",
    },
    {
      icon: "https://geekyants.com/images/services/business.svg",
      heading: "Business Analysis",
      description:
        "We discover, study and document business needs in collaboration with stakeholders and propose foolproof solutions that fit like a glove.",
    },
    {
      icon: "https://geekyants.com/images/services/quality-assurance.svg",
      heading: "Quality Assurance",
      description:
        "No compromise on the most important thing - the 'quality' of what we deliver. Exceeding your expectations is in our DNA.",
    },
  ]);
  return (
    <div className="flex h-auto full-width-container pt-20 ">
      <div className="m-auto">
        <h2 className="font-bold text-5xl">What We Do Best</h2>
        <div className="font-light text-xl mt-10 max-w-6xl">
          500+ projects deep and still going deeper in the Mobile & Web App
          development space. From A to Z of building beautiful apps, we do
          everything in-house, GeekyAnts style.
        </div>
        <div className="ease-in duration-300 bg-primaryButton p-2 rounded font-bold w-48 text-white px-9 mt-10 hover:flex hover:justify-between hover:px-6 cursor-pointer hover:ease-in hover:duration-300">
          LET&apos;S TALK
          <span>&#8594;</span>
        </div>
        <section>
          <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-20">
              {data.map((item, index) => {
                return <DetailsCard key={index} item={item} />;
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default WhatWeDo;

import React, { useState } from "react";
import ListItem from "../ListItem/listItem";

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
    <div className="flex h-auto full-width-container">
      <div className="m-auto py-28 pl-6 pr-2">
        <h2 className="font-bold text-5xl max-[768px]:text-4xl">
          What We Do Best
        </h2>
        <div className="font-light text-xl mt-10 max-w-6xl max-[768px]:text-lg">
          500+ projects deep and still going deeper in the Mobile & Web App
          development space. From A to Z of building beautiful apps, we do
          everything in-house, GeekyAnts style.
        </div>
        <div className="w-40 ease-in duration-300 bg-primaryButton p-2 rounded font-bold text-white px-6 mt-10 hover:flex hover:justify-between hover:px-3 cursor-pointer ">
          LET&apos;S TALK
          <span>&#8594;</span>
        </div>

        <section>
          <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-16">
              {data.map((item, index) => {
                return <ListItem key={index} item={item} from="/whatWeDo" />;
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default WhatWeDo;

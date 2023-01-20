import React, { useState } from "react";
import TechTabs from "./TechTabs";
import Button from "../button/button";
import TechCards from "./TechCards";

const Tech = ({ data }: { data: any }) => {
  const [activeTab, setActiveTab] = useState<string>("Top");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-zinc-100 pb-16">
      <div className="container xl:mx-auto py-8 md:py-28 px-8 lg:px-20 2xl:px-40">
        {/* title */}
        <h1 className="text-4xl md:text-5xl font-bold">{data.heading}</h1>

        {/* description */}
        <p className="font-light text-xl my-4 tracking-wide">
          {data.subheading}
        </p>

        {/* button */}
        <div className="mt-5">
          <Button text={data.buttonText} />
        </div>

        {/* tabs */}
        <TechTabs
          activeTab={activeTab}
          handleTabClick={handleTabClick}
          categories={data.categories}
        />

        {/* tech cards */}
        <TechCards activeTab={activeTab} data={data} />
      </div>
    </div>
  );
};

export default Tech;

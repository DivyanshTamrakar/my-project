import React from "react";
import Button from "../button/button";
import CommunitiyCard from "../CommunityCard/CommunitiyCard";

const Communities = ({ data }: { data: any }) => {
  return (
    <div className="bg-white pb-16">
      <div className="container xl:mx-auto py-8 md:py-28 px-8 lg:px-20 2xl:px-40">
        {/* title */}
        <h1 className="text-4xl md:text-5xl font-bold py-1">Communities</h1>

        {/* description */}
        <p className="font-light text-xl my-3 mt-5">
          Learn from subject matter experts, interact with tech enthusiasts, and
          experiment on your learnings. Join one of our communities to upgrade
          your skillset.
        </p>

        {/* button */}
        <div className="mt-12">
          <Button text="LEARN MORE" />
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-6 justify-items-center md:justify-items-start mt-20">
          {data.map((community: any, index: number) => (
            <CommunitiyCard key={index} item={community} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Communities;

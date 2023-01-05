import React from "react";
import Button from "../button/button";
import CommunitiyCard from "./CommunitiyCard";

type Communitycard = {
  id: number;
  name: string;
  image: string;
  bgColor: string;
};
type AppProps = {
  heading: string;
  subheading: string;
  buttonText: string;
  communities: Communitycard[];
};
const Communities = ({ data }: { data: AppProps }) => {
  return (
    <div className="bg-white pb-16">
      <div className="container xl:mx-auto py-8 md:py-28 px-8 lg:px-20 2xl:px-40">
        {/* title */}
        <h1 className="text-4xl md:text-5xl font-bold py-1">{data.heading}</h1>

        {/* description */}
        <p className="font-light text-xl my-3 mt-5">{data.subheading}</p>

        {/* button */}
        <div className="mt-5">
          <Button text={data.buttonText} />
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-6 justify-items-center md:justify-items-start mt-20">
          {data.communities.map((community: Communitycard) => (
            <CommunitiyCard key={community.id} item={community} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Communities;

import React from "react";
import AnimatedButton from "../button/animatedButton";
import ImageCard from "../ListItem/card";
type button = {
  text: string;
  icon: string;
};

type insight = {
  title: string;
  image: string;
  id: number;
  description: string;
  date: string;
};

type AppProps = {
  insightData: insight[];
  heading: string;
  subheading: number;
  buttonText: button[];
};

const Insights = ({ data }: { data: AppProps }) => {
  return (
    <div className="bg-zinc-100 pb-16">
      <div className="container xl:mx-auto py-8 md:py-28 px-8 lg:px-20 2xl:px-40">
        {/* title */}
        <h1 className="text-4xl md:text-5xl font-bold py-1">{data.heading}</h1>
        {/* description */}
        <p className="font-light text-xl my-3 mt-5">{data.subheading}</p>

        <div className="flex flex-col md:flex-row items-start mb-10 mt-8 md:mb-20 md:mt-12">
          {/* tech blog */}
          {data.buttonText.map((item: button, index: number) => {
            return (
              <AnimatedButton key={index} text={item.text} icon={item.icon} />
            );
          })}
        </div>
        {/* blog cards */}
        <div className=" mt-8 md:mt-20 grid grid-cols-1 mx-2 md:mx-0 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.insightData.map((item: insight) => {
            return <ImageCard key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Insights;

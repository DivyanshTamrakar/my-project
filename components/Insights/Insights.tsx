import React from "react";
import AnimatedButton from "../button/animatedButton";
import BlogCard from "./blogCard";

const Insights = ({ data }: { data: any }) => {
  return (
    <div className="bg-zinc-100 pb-16">
      <div className="container xl:mx-auto py-8 md:py-28 px-8 lg:px-20 2xl:px-40">
        {/* title */}
        <h1 className="text-4xl md:text-5xl font-bold py-1">Insights</h1>
        {/* description */}
        <p className="font-light text-xl my-3 mt-5">
          Read about everything that goes on inside the brilliant minds of our
          Geeks and understand GeekyAnts better through our blog.
        </p>

        <div className="flex flex-col md:flex-row items-start mb-10 mt-8 md:mb-20 md:mt-12">
          {/* tech blog */}
          <AnimatedButton text="READ OUR TECH BLOG" type="tech" />

          {/* business blog */}
          <AnimatedButton text="READ OUR BUSINESS BLOG" type="business" />
        </div>
        {/* blog cards */}
        <div className=" mt-8 md:mt-20 grid grid-cols-1 mx-2 md:mx-0 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item: any) => {
            return <BlogCard key={item.id} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Insights;

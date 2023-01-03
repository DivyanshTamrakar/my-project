import React from "react";

import Image from "next/image";

const BlogCard = ({ data }: { data: any }) => {
  console.log(data);
  return (
    <div className="flex flex-col mt-3 h-full rounded-md cursor-pointer bg-white shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 ease-out">
      {/* image */}
      <div className="h-36">
        <Image
          src={data.image}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-full object-cover rounded-t-md"
          alt="Blog realted"
        />
      </div>

      <div className="relative pt-4 pb-8 px-4">
        {/* title */}
        <h3 className="text-base md:text-2xl text-[#414141] font-semibold">
          {data.title}
        </h3>

        {/* description */}
        <div className="mb-3 overflow-hidden pt-3 text-[#34333a] font-light tracking-wider">
          {data.description}
        </div>

        {/* date */}
        <p className="p-0 text-sm text-[#34333a] font-light">{data.date}</p>
      </div>
    </div>
  );
};

export default BlogCard;

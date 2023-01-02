import Image from "next/image";
import React from "react";
import GeekImage from "../../public/images/logo.svg";

function Banner({ data }: { data: any }) {
  return (
    <section className="overflow-x-hidden relative">
      <div className="container xl:mx-auto px-4 md:px-12 2xl:px-32 flex flex-col justify-center mt-28 md:mt-44 pb-28">
        <div className="z-10 leading-loose">
          <h1 className="text-6xl lg:text-8xl leading-tight font-extrabold animate-fade">
            {data.header[0]}
          </h1>
          <h1 className="text-6xl lg:text-8xl leading-tight font-extrabold animate-fade-slow">
            {data.header[1]}
          </h1>
          <h1 className="text-6xl lg:text-8xl leading-tight font-extrabold animate-fade-slower">
            {data.header[2]}
          </h1>
        </div>

        <div className="text-2xl lg:text-4xl font-light lg:w-2/3 xl:w-1/2 2xl:w-2/5 mt-8 md:mt-20 z-10 !leading-normal">
          {data.subheading}

          <div className="inline pl-2.5 absolute">
            <span className="block whitespace-nowrap animate-slideIn overflow-hidden opacity-0">
              {data.options[0]}.
            </span>
          </div>
          <div className="inline pl-2.5 absolute">
            <span className="block whitespace-nowrap animate-slideIn-fast overflow-hidden opacity-0">
              {data.options[1]}.
            </span>
          </div>
          <div className="inline pl-2.5 absolute">
            <span className="block whitespace-nowrap animate-slideIn-normal overflow-hidden opacity-0">
              {data.options[2]}.
            </span>
          </div>

          <div className="inline pl-2.5 absolute">
            <span className="block whitespace-nowrap animate-slideIn-slow overflow-hidden opacity-0">
              {data.options[3]}.
            </span>
          </div>

          <div className="inline pl-2.5 absolute">
            <span className="block whitespace-nowrap animate-slideIn-slower overflow-hidden opacity-0">
              {data.options[4]}.
            </span>
          </div>

          <div className="inline pl-2.5 absolute">
            <span className="block whitespace-nowrap animate-slideIn-slowest overflow-hidden opacity-0">
              {data.options[5]}.
            </span>
          </div>
        </div>

        <ul className="flex items-center mt-8 md:mt-24 2xl:mt-32">
          <li>
            <button className="p-2 uppercase mr-3 px-6 md:px-10 rounded bg-primaryButton text-white text-sm md:text-base font-bold">
              {data.button}
            </button>
          </li>

          <li className="hidden lg:block">
            <button className="p-2 mx-3 text-xl text-[#34333a] hover:text-primary transition-colors tracking-wider hover:text-primaryButton">
              Products
            </button>
          </li>

          <li className="hidden lg:block">
            <button className="p-2 mx-3 text-xl text-[#34333a] hover:text-primary transition-colors tracking-wider hover:text-primaryButton">
              Services
            </button>
          </li>

          <li className="hidden lg:block">
            <button className="p-2 mx-3 text-xl text-[#34333a] hover:text-primary transition-colors tracking-wider hover:text-primaryButton">
              Our Work
            </button>
          </li>

          <li className="hidden lg:block">
            <button className="p-2 mx-3 text-xl text-[#34333a] hover:text-primary transition-colors tracking-wider hover:text-primaryButton">
              Solutions
            </button>
          </li>

          <li className="hidden lg:block">
            <button className="p-2 text-lg text-[#34333a] hover:text-primary transition-colors tracking-wider hover:text-primaryButton">
              More
            </button>
          </li>
        </ul>
      </div>

      <Image
        src={GeekImage}
        alt="GeekyAnts Logo"
        className="absolute right-[-10%] md:right-0 xl:right-[-10%] 2xl:right-0 max-w-[50%] md:max-w-[75%] top-0 mt-[-10%] xl:max-w-[50%]"
      />
    </section>
  );
}

export default Banner;

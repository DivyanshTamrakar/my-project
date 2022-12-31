import Image from "next/image";
import React from "react";
import GeekImage from "../../public/images/logo.svg";
function Banner() {
  return (
    <section className="overflow-x-hidden relative">
      <div className="container xl:mx-auto px-4 md:px-12 2xl:px-32 flex flex-col justify-center mt-28 md:mt-44 pb-28">
        <div className="z-10 leading-loose">
          <h1 className="text-6xl lg:text-8xl leading-tight font-extrabold animate-fade">
            Research.
          </h1>
          <h1 className="text-6xl lg:text-8xl leading-tight font-extrabold animate-fade-slow">
            Collaborate.
          </h1>
          <h1 className="text-6xl lg:text-8xl leading-tight font-extrabold animate-fade-slower">
            Build.
          </h1>
        </div>

        <div className="text-2xl lg:text-4xl font-light lg:w-2/3 xl:w-1/2 2xl:w-2/5 mt-8 md:mt-20 z-10 !leading-normal">
          Design & development studio turning ideas into
          <div className="inline pl-2.5 absolute">
            <span className="block whitespace-nowrap animate-slideIn overflow-hidden opacity-0">
              mobile apps.
            </span>
          </div>
          <div className="inline pl-2.5 absolute">
            <span className="block whitespace-nowrap animate-slideIn-fast overflow-hidden opacity-0">
              web apps.
            </span>
          </div>
          <div className="inline pl-2.5 absolute">
            <span className="block whitespace-nowrap animate-slideIn-normal overflow-hidden opacity-0">
              solutions.
            </span>
          </div>
          {/* reality */}
          <div className="inline pl-2.5 absolute">
            <span className="block whitespace-nowrap animate-slideIn-slow overflow-hidden opacity-0">
              reality.
            </span>
          </div>
          {/* open source */}
          <div className="inline pl-2.5 absolute">
            <span className="block whitespace-nowrap animate-slideIn-slower overflow-hidden opacity-0">
              open source.
            </span>
          </div>
          {/* apps */}
          <div className="inline pl-2.5 absolute">
            <span className="block whitespace-nowrap animate-slideIn-slowest overflow-hidden opacity-0">
              apps.
            </span>
          </div>
        </div>

        <ul className="flex items-center mt-8 md:mt-24 2xl:mt-32">
          <li>
            <button className="p-2 mr-3 px-6 md:px-10 rounded bg-primaryButton text-white text-sm md:text-base font-bold">
              LET&apos;S TALK
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

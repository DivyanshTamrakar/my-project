/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

function ImageCard({ item }: any) {
  console.log({ item });
  return (
    <div className="mt-2 flex justify-center cursor-pointer hover:mt-1 ease-out duration-300">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <img className="rounded-t-lg " src={item.url} alt="something" />
        <div className="p-6">
          <h5 className="text-meetupText text-xl font-bold mb-2 tracking-wide">
            {item.title}
          </h5>
          <p className="text-black300 font-light tracking-wide text-base mb-4">
            {item.description}
          </p>
          <div className="text-black text-base mb-0">{item.date}</div>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;

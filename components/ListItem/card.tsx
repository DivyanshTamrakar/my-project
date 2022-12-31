/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

function ImageCard({ item }: any) {
  return (
    <div className="flex justify-center">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <img
          className="rounded-t-lg "
          src="https://geekyants.com/_next/image/?url=https%3A%2F%2Fstatic-cdn.geekyants.com%2Ftechevent%2F98%2F2022-12-01%2F500836644-1669903972.png&w=3840&q=75"
          alt="something"
        />

        <div className="p-6">
          <h5 className="text-meetupText text-xl font-bold mb-2 tracking-wide">
            {item.heading}
          </h5>
          <p className="text-black300 text-base mb-4">{item.description}</p>
          <div className="text-black text-base mb-0">10 Dec, 2022</div>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;

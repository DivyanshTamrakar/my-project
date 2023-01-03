import Image from "next/image";
import React from "react";
import { formatDate } from "../../helper/formatDate";

function ImageCard({ item }: any) {
  return (
    <div className="flex h-auto justify-center cursor-pointer shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 ease-out">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <div className="h-36">
          <Image
            src={item.image}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-full object-cover rounded-t-md"
            alt="Blog realted"
          />
        </div>
        <div className="px-6 pt-4">
          <h5 className="text-meetupText text-xl font-bold mb-2 tracking-wide">
            {item.title}
          </h5>
          <p className="text-black300 font-light tracking-wide text-base mb-4">
            {item.description}
          </p>
          <div className="text-gray text-light mb-2 text-sm">
            {formatDate(item.date)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;

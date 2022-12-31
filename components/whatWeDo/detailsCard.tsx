import Image from "next/image";
import React from "react";

function DetailsCard({ item }: any) {
  return (
    <div className="flex leading-relaxed">
      <div>
        <Image src={item.icon} alt="divyansh" height={62} width={62} />
      </div>
      <div className="ml-7">
        <h2 className="tracking-wide font-bold text-3xl">{item.heading}</h2>
        <div className="mt-1 max-w-md font-light leading-relaxed text-lg">
          {item.description}
        </div>
      </div>
    </div>
  );
}

export default DetailsCard;

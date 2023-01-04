import React, { useState } from "react";
import Image from "next/image";

type Props = {
  name: string;
  image: string;
  bgColor: string;
};

const CommunitiyCard = ({ item }: { item: Props }) => {
  return (
    <div>
      {/* div with bg */}
      <div
        className={`flex items-center justify-center p-10 h-44 cursor-pointer`}
        style={{
          backgroundColor: item.bgColor,
        }}
      >
        {/* image */}
        <Image
          src={item.image}
          alt={item.name}
          width="0"
          height="0"
          sizes="100vw"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      {/* text */}
      <div className="pt-2 text-center">
        <span className="text-xl text-black font-bold pt-2">{item.name}</span>
      </div>
    </div>
  );
};

export default CommunitiyCard;

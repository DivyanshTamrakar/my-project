import Image from "next/image";
import React from "react";
type AppProps = {
  item: {
    icon: string;
    heading: string;
    description: string;
  };
  from: string;
};
function ListItem({ item, from }: AppProps) {
  return (
    <div className="flex leading-relaxed">
      <div>
        <Image
          color="text-black"
          src={item.icon}
          alt="divyansh"
          height={62}
          width={62}
        />
      </div>
      <div className="ml-7">
        <h2 className="tracking-wide font-bold text-3xl">{item.heading}</h2>
        <div
          className={`mt-1 max-w-md font-light leading-relaxed text-lg ${
            from === "/ourProd" ? "text-productText" : "text-black"
          }`}
        >
          {item.description}
        </div>
      </div>
    </div>
  );
}

export default ListItem;

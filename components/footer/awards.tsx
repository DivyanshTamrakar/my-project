import Image from "next/image";
import React from "react";

function Awards({ item }: { item: any }) {
  return (
    <div className="w-3/4">
      <Image
        src={item}
        width="0"
        height="0"
        sizes="100vw"
        className="w-full"
        alt="Clutch"
      />
    </div>
  );
}

export default Awards;

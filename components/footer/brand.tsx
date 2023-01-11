import Image from "next/image";
import React from "react";

function Brand({ certificates }: { certificates: any }) {
  return (
    <div>
      <div className="w-12 mx-3 hover:opacity-90">
        <Image
          src={certificates.src}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-fit object-contain"
          alt="ISO"
        />
      </div>
    </div>
  );
}

export default Brand;

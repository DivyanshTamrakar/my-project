import Image from "next/image";
import React from "react";

function Social({ data }: { data: any }) {
  return (
    <div className="mr-[0.625rem] mb-[0.625rem] flex justify-center items-center w-11 h-11 rounded-full bg-[#222323]">
      <Image
        src={data.src}
        width="0"
        height="0"
        sizes="100vw"
        className="w-6 h-6 object-contain"
        alt="Instagram"
      />
    </div>
  );
}

export default Social;

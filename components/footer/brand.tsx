import Image from "next/image";
import React from "react";

function Brand() {
  return (
    <div className="flex items-center rounded w-fit py-4 px-6 bg-[#222323]">
      {/* iso */}
      <div className="w-16 hover:opacity-90 cursor-pointer">
        <Image
          src="https://geekyants.com/_next/static/images/iso-7ebc35916d948223d7fe64287f3e1305.svg"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-fit object-contain"
          alt="ISO"
        />
      </div>

      {/* gms */}
      <div className="w-12 mx-3 hover:opacity-90">
        <Image
          src="https://geekyants.com/_next/static/images/gms-a59b7e2942dba344e5235c1360b77f12.svg"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-fit object-contain"
          alt="ISO"
        />
      </div>

      {/* aiao-bar */}
      <div className="w-12 hover:opacity-90">
        <Image
          src="https://geekyants.com/_next/static/images/aiao-f8a0bbbcd7b6dfbcbfe41e062a0cef9a.svg"
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

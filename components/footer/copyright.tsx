import React from "react";

function CopyRight({ data }: { data: any }) {
  return (
    <div className="mt-10 bg-[#161617] py-4">
      <div className="container xl:mx-auto flex-col flex md:flex-row justify-between px-8 lg:px-20 2xl:px-40">
        <span className="block text-white tracking-wider opacity-70 font-light text-sm">
          {data.name}
        </span>

        <span className="block text-white tracking-wider opacity-70 font-light text-sm">
          {data.policy}
        </span>
      </div>
    </div>
  );
}

export default CopyRight;

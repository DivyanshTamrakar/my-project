import React from "react";

function Button({ text }: { text: string }) {
  return (
    <div className="w-44 ease-in duration-300 bg-primaryButton p-2 rounded font-bold text-white px-6 mt-10 hover:flex hover:justify-between hover:px-3 cursor-pointer ">
      {text}
      <span>&#8594;</span>
    </div>
  );
}

export default Button;

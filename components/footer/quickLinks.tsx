import React from "react";

function List({ item }: { item: any }) {
  return (
    <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-3 lg:gap-0">
      <li className="py-1 w-full opacity-70 text-sm text-white cursor-pointer hover:opacity-100 transition-opacity duration-250 leading-6 font-normal">
        {item}
      </li>
    </ul>
  );
}

export default List;

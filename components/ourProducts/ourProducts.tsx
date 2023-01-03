import React, { useState } from "react";
import Button from "../button/button";
import ListItem from "../ListItem/listItem";

function OurProducts({ data }: { data: any }) {
  return (
    <div className="flex h-auto full-width-container bg-productBg text-white">
      <div className="m-auto py-28 pl-6 pr-2">
        <h2 className="font-bold text-5xl max-[768px]:text-4xl">
          Open Source & Products
        </h2>
        <div className="font-light text-productText text-xl mt-10 max-w-6xl max-[768px]:text-lg">
          Made out of our love for experiments or out of sheer necessity to
          solve problems in the development sphere, our open source
          contributions and products are built for you.
        </div>
        <Button text="LEARN MORE" />
        <section>
          <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-20">
              {data.data.sourceProducts.map((item: any, index: number) => {
                return <ListItem key={item.id} item={item} from="/ourProd" />;
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default OurProducts;

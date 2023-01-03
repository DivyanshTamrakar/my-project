import React, { useState } from "react";
import Button from "../button/button";
import ListItem from "../ListItem/listItem";

function WhatWeDo({ data }: { data: any }) {
  return (
    <div className="flex h-auto full-width-container">
      <div className="m-auto py-28 pl-6 pr-2">
        <h2 className="font-bold text-5xl max-[768px]:text-4xl">
          What We Do Best
        </h2>
        <div className="font-light text-xl mt-10 max-w-6xl max-[768px]:text-lg">
          500+ projects deep and still going deeper in the Mobile & Web App
          development space. From A to Z of building beautiful apps, we do
          everything in-house, GeekyAnts style.
        </div>
        <Button text="LET'S TALK" />
        <section>
          <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-16">
              {data.data.work.map((item: any) => {
                return <ListItem key={item.id} item={item} from="/whatWeDo" />;
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default WhatWeDo;

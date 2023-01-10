import React from "react";
import Button from "../button/button";
import ListItem from "../ListItem/listItem";

type service = {
  heading: string;
  icon: string;
  description: string;
  id: number;
};

type AppProps = {
  heading: string;
  subheading: string;
  buttonText: string;
  services: service[];
};

function WhatWeDo({ data }: { data: AppProps }) {
  return (
    <div className="flex h-auto full-width-container">
      <div className="m-auto py-28 pl-6 pr-2">
        <h2 className="font-bold text-5xl max-[768px]:text-4xl">
          {data.heading}
        </h2>
        <div className="font-light text-xl mt-10 max-w-6xl max-[768px]:text-lg">
          {data.subheading}
        </div>
        <Button text={data.buttonText} />
        <section>
          <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-16">
              {data.services.map((item: service) => {
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

import React, { useState } from "react";
import ListItem from "../ListItem/listItem";

function OurProducts() {
  const [data, setData] = useState([
    {
      icon: "https://geekyants.com/images/product/builderx_new.svg",
      heading: "BuilderX",
      description: "Cloud based design tool that codes.",
    },
    {
      icon: "https://geekyants.com/images/product/nativebase.svg",
      heading: "NativeBase",
      description: "UI Library for React Native & Vue Native",
    },
    {
      icon: "https://geekyants.com/images/product/apibeats.svg",
      heading: "apibeats",
      description: "A battle-tested API maintenance platform",
    },
    {
      icon: "https://geekyants.com/images/product/syncstate_new.svg",
      heading: "SyncState",
      description: "State Management for React",
    },
    {
      icon: "https://geekyants.com/images/product/reactPluggable.svg",
      heading: "React Pluggable",
      description: "Add features without changing existing code",
    },
    {
      icon: "https://geekyants.com/images/product/topgeek.svg",
      heading: "Topgeek",
      description: "Streamline evaluation, for companies and interviewees",
    },
  ]);
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
        <div className="ease-in duration-300 bg-primaryButton p-2 rounded font-bold w-48 text-white px-9 mt-10 hover:flex hover:justify-between hover:px-6 cursor-pointer hover:ease-in hover:duration-300">
          LEARN MORE
          <span>&#8594;</span>
        </div>
        <section>
          <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-20">
              {data.map((item, index) => {
                return <ListItem key={index} item={item} from="/ourProd" />;
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default OurProducts;

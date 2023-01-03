import React from "react";
import Button from "../button/button";
import BlogCard from "../Insights/blogCard";
import ImageCard from "../ListItem/card";

function CommunityMeetups({ data }: { data: any }) {
  return (
    <section className="flex h-auto full-width-container bg-productBg text-white pl-9">
      <div className="m-auto py-28 pl-6 pr-2">
        <h2 className="font-bold text-5xl max-[768px]:text-4xl">
          Community Meetups
        </h2>
        <div className="font-light text-productText text-xl mt-4 max-w-6xl max-[768px]:text-lg">
          We love the developer communities around the globe and host/organize
          regular meetups (now virtual) to talk about the latest tech. We also
          attend tech conferences worldwide!
        </div>
        <Button text="LEARN MORE" />
        <section>
          <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
              {data.map((item: any, index: number) => {
                return <ImageCard key={index} item={item} />;
              })}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default CommunityMeetups;

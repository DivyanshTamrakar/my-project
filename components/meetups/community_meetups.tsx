import React from "react";
import Button from "../button/button";
import ImageCard from "../ListItem/card";

type AppProps = {
  title: string;
  image: string;
  id: number;
  description: string;
  date: string;
};

function CommunityMeetups({ data }: { data: AppProps[] }) {
  return (
    <section className="flex h-auto full-width-container bg-productBg text-white">
      <div className="m-auto py-28 pl-28 pr-2 max-[768px]:pl-10">
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
              {data.map((item: AppProps) => {
                return <ImageCard key={item.id} item={item} />;
              })}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default CommunityMeetups;

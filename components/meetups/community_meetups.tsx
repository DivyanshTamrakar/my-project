import React, { useState } from "react";
import Button from "../button/button";
import ImageCard from "../ListItem/card";

function CommunityMeetups() {
  const [data, setData] = useState([
    {
      icon: "https://geekyants.com/_next/image/?url=https%3A%2F%2Fstatic-cdn.geekyants.com%2Ftechevent%2F98%2F2022-12-01%2F500836644-1669903972.png&w=3840&q=75",
      heading: "React Native Hybrid Meet-Up",
      description:
        "Hello React Native enthusiasts, We are excited to announce that we are organising a React Native hybrid meet-up on 10th December, 2022! Grab the opportunity to",
      date: "10 Dec, 2022",
    },
    {
      icon: "https://geekyants.com/_next/image/?url=https%3A%2F%2Fstatic-cdn.geekyants.com%2Ftechevent%2F98%2F2022-12-01%2F500836644-1669903972.png&w=3840&q=75",
      heading: "React Native Hybrid Meet-Up",
      description:
        "Hello React Native enthusiasts, We are excited to announce that we are organising a React Native hybrid meet-up on 10th December, 2022! Grab the opportunity to",
      date: "10 Dec, 2022",
    },
    {
      icon: "https://geekyants.com/_next/image/?url=https%3A%2F%2Fstatic-cdn.geekyants.com%2Ftechevent%2F98%2F2022-12-01%2F500836644-1669903972.png&w=3840&q=75",
      heading: "React Native Hybrid Meet-Up",
      description:
        "Hello React Native enthusiasts, We are excited to announce that we are organising a React Native hybrid meet-up on 10th December, 2022! Grab the opportunity to",
      date: "10 Dec, 2022",
    },
  ]);
  return (
    <section className="flex h-auto full-width-container bg-productBg text-white">
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
              {data.map((item, index) => {
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

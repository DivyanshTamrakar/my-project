import Image from "next/image";
import React from "react";
import {
  AppProps,
  hireDevelopers,
  socialConnect,
} from "../../types/footer.types";
import Address from "./address";
import Awards from "./awards";
import Brand from "./brand";
import CopyRight from "./copyright";
import List from "./quickLinks";
import Social from "./social";

function Footer({ data }: { data: AppProps }) {
  console.log(data);
  return (
    <footer className="bg-black pt-8 md:pt-20">
      <div className="container xl:mx-auto mb-12 px-8 lg:px-20 2xl:px-40">
        {/* grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[2.25fr_1fr_1fr_1fr]">
          {/* left */}
          <div>
            {/* logo */}
            <Image
              src={data.image.url}
              width="0"
              height="0"
              sizes="100vw"
              className="w-1/2"
              alt="Geekyants logo"
            />

            {/* description */}
            <p className="py-6 pr-10 opacity-60 text-white">
              {data.subheading}
            </p>

            {/* brands */}
            <div className="flex items-center rounded w-fit py-4 px-4 bg-[#222323]">
              {data.certificate.map((item: { src: string }, index: number) => {
                return <Brand key={index} certificates={item} />;
              })}
            </div>

            {/* connect */}
            <div className="flex flex-col mt-8">
              <h6 className="uppercase mb-5 text-lg font-medium text-white opacity-70 tracking-wider">
                {data.socialConnect.heading}
              </h6>

              {/* social media icons */}
              <div className="flex flex-wrap w-full">
                {data.socialConnect.socialIcons.map(
                  (item: any, index: number) => {
                    return <Social key={item.name} data={item} />;
                  }
                )}
              </div>
            </div>
          </div>

          {/* quick links */}
          <div className="mt-8 lg:mt-0">
            {/* title */}
            <h6 className="text-white opacity-70 font-mediumm mb-6 text-lg uppercase">
              {data.quicklinks.heading}
            </h6>

            {/* list */}
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-3 lg:gap-0">
              {data.quicklinks.name.map((item: string, index: number) => {
                return <List key={index} item={item} />;
              })}
            </ul>
          </div>

          {/* hire developers */}
          <div className="mt-8 lg:mt-0">
            {/* title */}
            <h6 className="text-white opacity-70 font-mediumm mb-6 text-lg uppercase">
              {data.hireDevelopersComponent.heading}
            </h6>

            {/* list */}
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-3 lg:gap-0">
              {data.hireDevelopersComponent.name.map(
                (item: string, index: number) => {
                  return <List key={index} item={item} />;
                }
              )}
            </ul>
          </div>

          <div>
            <div className="mt-8 lg:mt-0">
              {/* title */}
              <h6 className="text-white opacity-70 font-mediumm mb-6 text-lg uppercase">
                {data.engagement.heading}
              </h6>

              {/* list */}
              <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-3 lg:gap-0">
                {data.engagement.enagagement.map((item: any, index: number) => {
                  return <List key={index} item={item} />;
                })}
              </ul>
            </div>

            <div className="lg:mt-8 mt-12">
              {/* title */}
              <h6 className="text-white opacity-70 font-mediumm mb-6 text-lg">
                {data.company.heading}
              </h6>

              {/* list */}
              <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-3 lg:gap-0">
                {data.company.name.map((item: any, index: number) => {
                  return <List key={index} item={item} />;
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* awards */}
        <div className="grid mt-14 grid-cols-3 md:grid-cols-7 items-center justify-items-center gap-14 py-10 border-y border-[#707070]">
          {data.awards.map((item: any, index: number) => {
            return <Awards key={index} item={item} />;
          })}
        </div>

        {/* addresses */}
        <div className="grid md:grid-cols-3 mt-10 gap-10 pt-12">
          {data.addresses.map((item: any) => {
            return <Address key={item.id} data={item} />;
          })}
        </div>
      </div>

      {/* copyright */}
      <CopyRight data={data.copyright} />
    </footer>
  );
}

export default Footer;

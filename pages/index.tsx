import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import WhatWeDo from "../components/whatWeDo/whatWeDo";
import OurProducts from "../components/ourProducts/ourProducts";
import Banner from "../components/Banner/banner";
import CommunityMeetups from "../components/meetups/community_meetups";
import LetsBuild from "../components/LetsBuild/letsBuild";
import Footer from "../components/footer/footer";
import { bannerData, communityMeetupData } from "../fetchData/fetchData";

const inter = Inter({ subsets: ["latin"] });

export const getStaticProps = async () => {
  const banner = await bannerData();
  const communitymeetups = await communityMeetupData();

  return { props: { banner, communitymeetups } };
};

export default function Home(props: any) {
  return (
    <>
      <main>
        <Banner data={props.banner.data.ban_ner[0]} />
        <CommunityMeetups
          data={props.communitymeetups.data.community_meetups}
        />
        <WhatWeDo />
        <OurProducts />
        <LetsBuild />
        <Footer />
      </main>
    </>
  );
}

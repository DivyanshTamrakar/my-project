import { Inter } from "@next/font/google";
import WhatWeDo from "../components/whatWeDo/whatWeDo";
import OurProducts from "../components/ourProducts/ourProducts";
import Banner from "../components/Banner/banner";
import CommunityMeetups from "../components/meetups/community_meetups";
import LetsBuild from "../components/LetsBuild/letsBuild";
import Footer from "../components/footer/footer";
import { fetchData } from "../fetchData/fetchData";
import {
  banneQuery,
  communitiQuery,
  communityMeetupQuery,
  insightsQuery,
  sourceProductQuery,
  workQuery,
} from "../fetchData/requestBody";
import Insights from "../components/Insights/Insights";
import Communities from "../components/Communities/Communities";

const inter = Inter({ subsets: ["latin"] });

export const getStaticProps = async () => {
  const banner = await fetchData(banneQuery);
  const communitymeetups = await fetchData(communityMeetupQuery);
  const work = await fetchData(workQuery);
  const communities = await fetchData(communitiQuery);
  const sourceProducts = await fetchData(sourceProductQuery);
  const insights = await fetchData(insightsQuery);
  return {
    props: {
      banner,
      communitymeetups,
      work,
      communities,
      sourceProducts,
      insights,
    },
  };
};

export default function Home(props: any) {
  console.log(props.communities.data.communities);
  return (
    <>
      <main>
        <Banner data={props.banner.data.ban_ner[0]} />
        <Communities data={props.communities.data.communities} />
        <Insights data={props.insights.data.insights} />
        <CommunityMeetups data={props.communitymeetups.data.communityMeetups} />
        <WhatWeDo data={props.work} />
        <OurProducts data={props.sourceProducts} />
        <LetsBuild />
        <Footer />
      </main>
    </>
  );
}

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
  footerQuery,
  insightsQuery,
  sourceProductQuery,
  trustedPartnerQuery,
  workQuery,
} from "../fetchData/requestBody";
import Insights from "../components/Insights/Insights";
import Communities from "../components/Communities/Communities";
import Tech from "../components/Tech/Tech";
import Carausal from "../components/caraousel/caraousal";
import Trusted from "../components/trusted/trusted";

const inter = Inter({ subsets: ["latin"] });

export const getStaticProps = async () => {
  const banner = await fetchData(banneQuery);
  const communitymeetups = await fetchData(communityMeetupQuery);
  const work = await fetchData(workQuery);
  const communities = await fetchData(communitiQuery);
  const sourceProducts = await fetchData(sourceProductQuery);
  const insights = await fetchData(insightsQuery);
  const footer = await fetchData(footerQuery);

  const trusted = await fetchData(trustedPartnerQuery);
  return {
    props: {
      banner,
      communitymeetups,
      work,
      communities,
      sourceProducts,
      insights,
      footer,
      trusted,
    },
  };
};

export default function Home(props: any) {
  return (
    <>
      <main>
        <Banner data={props.banner.data.ban_ner[0]} />
        <Trusted data={props.trusted.data.trustedPartner[0]} />
        <Carausal data={props.trusted.data.trustedPartner[0].partners} />
        <Insights data={props.insights.data.insights} />
        <Communities data={props.communities.data.communities[0].communities} />
        <CommunityMeetups
          data={props.communitymeetups.data.communityMeetup[0].meetups}
        />
        <WhatWeDo data={props.work} />
        <Tech />
        <OurProducts data={props.sourceProducts} />
        <LetsBuild />
        <Footer data={props.footer.data.footer[0]} />
      </main>
    </>
  );
}

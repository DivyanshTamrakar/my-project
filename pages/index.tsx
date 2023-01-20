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
  techWeLoveQuery,
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
  const techWeLove = await fetchData(techWeLoveQuery);

  return {
    props: {
      banner: banner.data.ban_ner[0],
      communitymeetups: communitymeetups.data.communityMeetup[0].meetups,
      work: work.data.whatWeDo[0],
      communities: communities.data.communities[0].communities,
      sourceProducts: sourceProducts.data.productsAndOpensource[0],
      insights: insights.data.Insights[0],
      footer: footer.data.footer[0],
      trusted: trusted.data.trustedPartner[0],
      techWeLove: techWeLove.data.techWeLove[0],
    },
  };
};

export default function Home({
  banner,
  trusted,
  insights,
  communities,
  communitymeetups,
  work,
  sourceProducts,
  footer,
  techWeLove,
}: any) {
  return (
    <>
      <main>
        <Banner data={banner} />
        <Trusted data={trusted} />
        <Carausal data={trusted.partners} />
        <Insights data={insights} />
        <Communities data={communities} />
        <CommunityMeetups data={communitymeetups} />
        <WhatWeDo data={work} />
        <Tech data={techWeLove} />
        <OurProducts data={sourceProducts} />
        <LetsBuild />
        <Footer data={footer} />
      </main>
    </>
  );
}

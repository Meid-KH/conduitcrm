import type { NextPage } from "next";
import Intro from "components/hompage/Intro";
import Leads from "components/hompage/Leads";
import Integration from "components/hompage/Integration";
import Testimonials from "components/hompage/Testimonials";
import Cta from "components/Cta";

const Home: NextPage = () => {
  return (
    <>
      <Intro />
      <Leads />
      <Integration />
      <Testimonials />
      <Cta />
    </>
  );
};

export default Home;

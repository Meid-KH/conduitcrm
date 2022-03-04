import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Logo from "components/Logo";
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

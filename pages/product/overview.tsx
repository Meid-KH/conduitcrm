import type { NextPage } from "next";
import Head from "next/head";
import Intro from "components/overview/Intro";
import Cta from "components/hompage/Cta";

const Overview: NextPage = () => {
	return (
		<>
			<Intro />
			<Cta />
		</>
	);
};

export default Overview;

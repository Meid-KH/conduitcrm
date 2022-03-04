import type { NextPage } from "next";
import Head from "next/head";
import Intro from "components/overview/Intro";
import Cta from "components/Cta";
import Lead from "components/overview/Lead";
import Pipeline from "components/overview/Pipeline";
import Crm from "components/overview/Crm";

const Overview: NextPage = () => {
	return (
		<>
			<Intro />
			<Lead />
			<Pipeline />
			<Crm />
			<Cta />
		</>
	);
};

export default Overview;

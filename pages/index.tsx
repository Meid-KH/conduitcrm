import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
	return (
		<div className="p-10 bg-gray-100">
			<h1 className="text-2xl font-bold text-gray-800">
				Welcome to Conduit CRM
			</h1>
		</div>
	);
};

export default Home;

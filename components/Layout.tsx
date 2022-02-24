import React from "react";
import Icon from "utils/Icon";
import Footer from "./Footer";
import Header from "./Header";

type PropType = {
	children: React.ReactNode;
};

const Layout = ({ children }: PropType) => {
	return (
		<div className="scroll-smooth h-screen min-h-screen overflow-x-hidden bg-primary-600 text-faded">
			<Header />
			{children}
			<Footer />
			<a
				href="#header"
				className="fixed right-5 bottom-5 grid place-items-center w-10 h-10 bg-primary-700 rounded-full border-2 border-faded"
			>
				<span className="w-5">
					<Icon name="arrow" />
				</span>
			</a>
		</div>
	);
};

export default Layout;

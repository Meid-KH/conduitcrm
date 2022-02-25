import React from "react";
import Icon from "utils/Icon";
import Footer from "./Footer";
import Header from "./Header";

type PropType = {
	children: React.ReactNode;
};

const Layout = ({ children }: PropType) => {
	return (
		<div className="h-screen__ min-h-screen__ overflow-x-hidden bg-primary-600 text-faded">
			<Header />
			{children}
			<Footer />
			<a
				href="#header"
				className="fixed right-5 bottom-5 grid place-items-center w-12 h-12 bg-primary-700 rounded-full border-2 border-faded"
			>
				<span className="w-6">
					<Icon name="arrow" />
				</span>
			</a>
		</div>
	);
};

export default Layout;

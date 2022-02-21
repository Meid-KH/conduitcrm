import React from "react";
import Footer from "./Footer";
import Header from "./Header";

type PropType = {
	children: React.ReactNode;
};

const Layout = ({ children }: PropType) => {
	return (
		<div className="overflow-x-hidden bg-primary-600 text-faded">
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;

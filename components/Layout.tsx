import React from "react";
import Footer from "./Footer";

type PropType = {
	children: React.ReactNode;
};

const Layout = ({ children }: PropType) => {
	return (
		<div className="overflow-x-hidden bg-primary-600 text-faded">
			{children}
			<Footer />
		</div>
	);
};

export default Layout;

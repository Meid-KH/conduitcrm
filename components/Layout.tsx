import React from "react";

type PropType = {
	children: React.ReactNode;
};

const Layout = ({ children }: PropType) => {
	return (
		<div className="overflow-x-hidden bg-primary-600 text-faded">
			{" "}
			{children}{" "}
		</div>
	);
};

export default Layout;

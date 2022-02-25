import React from "react";
import Icon from "utils/Icon";
import Footer from "./Footer";
import Header from "./Header";

type PropType = {
	children: React.ReactNode;
};

const Layout = ({ children }: PropType) => {
	return (
		<div className="h-screen__ min-h-screen__">
			<Header />
			{children}
			<Footer />
			<button
				onClick={() =>
					document.body.scrollIntoView({
						behavior: "smooth",
						block: "start",
					})
				}
				className="fixed right-5 bottom-5 grid place-items-center w-12 h-12 bg-primary-700 rounded-full border-2 border-faded hover:scale-95"
			>
				<span className="w-6">
					<Icon name="arrow" />
				</span>
			</button>
		</div>
	);
};

export default Layout;

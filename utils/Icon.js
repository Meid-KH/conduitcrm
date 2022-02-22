import React from "react";

const Icons = {
	arrow: () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M5 15l7-7 7 7"
			/>
		</svg>
	),
	plus: () => <i className="bg-red-400">plus</i>,
	default: () => <i className="bg-red-400">icon</i>,
};

const Icon = ({ name }) => {
	const IconElem = Icons[name] || Icon.default;
	return <IconElem />;
};

export default Icon;

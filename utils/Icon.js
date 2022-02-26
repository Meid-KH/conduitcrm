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
	hamburger: () => (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55.5 26">
			<g data-name="Group 116" transform="translate(-304 -27)">
				<line
					data-name="Line 9"
					x2="33"
					transform="translate(317 29.5)"
					fill="none"
					stroke="#05adf8"
					strokeLinecap="round"
					strokeWidth="5"
				/>
				<line
					data-name="Line 10"
					x2="35"
					transform="translate(306.5 40)"
					fill="none"
					stroke="#05adf8"
					strokeLinecap="round"
					strokeWidth="5"
				/>
				<line
					data-name="Line 11"
					x2="40"
					transform="translate(317 50.5)"
					fill="none"
					stroke="#05adf8"
					strokeLinecap="round"
					strokeWidth="5"
				/>
			</g>
		</svg>
	),
	close: () => (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.355 35.355">
			<g data-name="Group 117" transform="translate(-313.679 -27.822)">
				<line
					x2="40"
					transform="translate(317.215 31.358) rotate(45)"
					fill="none"
					stroke="#05adf8"
					strokeLinecap="round"
					strokeWidth="5"
				/>
				<line
					x2="40"
					transform="translate(317.215 59.642) rotate(-45)"
					fill="none"
					stroke="#05adf8"
					strokeLinecap="round"
					strokeWidth="5"
				/>
			</g>
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

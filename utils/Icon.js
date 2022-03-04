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
		<svg viewBox="0 0 32 30" xmlns="http://www.w3.org/2000/svg">
			<rect width="32" height="4" rx="2" fill="currentColor" />
			<rect y="13" width="20" height="4" rx="2" fill="currentColor" />
			<rect y="26" width="32" height="4" rx="2" fill="currentColor" />
		</svg>
	),
	close: () => (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.355 35.355">
			<g data-name="Group 117" transform="translate(-313.679 -27.822)">
				<line
					x2="40"
					transform="translate(317.215 31.358) rotate(45)"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="5"
				/>
				<line
					x2="40"
					transform="translate(317.215 59.642) rotate(-45)"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="5"
				/>
			</g>
		</svg>
	),
	// plus: () => <i className="bg-red-400">plus</i>,
	default: () => (
		<i className="bg-red-400__ underline text-sm font-light">icon</i>
	),
};

const Icon = ({ name }) => {
	const IconElem = Icons[name] ? Icons[name] : Icon.default;
	return <IconElem />;
};

export default Icon;

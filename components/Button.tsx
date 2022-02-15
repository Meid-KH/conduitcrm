import React from "react";

const Button = (props: any) => {
	const { primary } = props;

	if (primary == true) {
		<button
			className="px-12 py-[14px] text-center text-[21px] font-bold rounded-full border border-primary-600 text-white bg-gradient-to-r from-primary-500 via-primary-500 to-purple-500"
			{...props}
		>
			{props.children}
		</button>;
	}

	return (
		<button
			className="px-12 py-[14px] text-center text-[21px] font-bold rounded-full text-primary-500 bg-primary-700"
			{...props}
		>
			{props.children}
		</button>
	);
};

export default Button;

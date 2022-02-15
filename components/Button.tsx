import React from "react";

type ButtonProps = {
	children: React.ReactNode;
	primary?: Boolean;
};

const Button = ({ children, primary = false }: ButtonProps) => {
	return (
		<button
			className={`px-12 py-[14px] text-center text-[21px] font-bold rounded-full border transition hover:-translate-y-1 ${
				primary
					? "border-primary-700 text-white bg-gradient-to-r from-primary-500 via-primary-500 to-purple-500"
					: "border-primary-500 text-primary-500 bg-primary-700"
			}`}
			// {...props}
		>
			{children}
		</button>
	);
};

export default Button;

import React from "react";

type ButtonProps = {
	children: React.ReactNode;
	primary?: Boolean;
};

const Button = ({ children, primary = false }: ButtonProps) => {
	return (
		<button
			className={`border px-12 py-[14px] text-center text-[18px] font-semibold tracking-wider rounded-full transition hover:-translate-y-1 ${
				primary
					? "border-0 text-white bg-gradient-to-r from-primary-500 via-primary-500 to-purple-500"
					: "text-primary-500 border-blue-500"
			}`}
			// {...props}
		>
			{children}
		</button>
	);
};

export default Button;

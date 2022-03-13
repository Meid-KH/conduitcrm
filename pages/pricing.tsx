import Button from "components/Button";
import Link from "next/link";
import React from "react";
import Icon from "utils/Icon";

const PricingCols = [
	{
		name: "Individual",
		price: "0",
		featured: true,
	},
	{
		name: "Basic",
		price: "7",
		featured: false,
	},
	{
		name: "Standard",
		price: "12",
		featured: false,
	},
	{
		name: "Pro",
		price: "21",
		featured: false,
	},
	{
		name: "Enterprise",
		price: "32",
		featured: false,
	},
];

const ProductFeatures = [
	{
		name: "Users",
		individual: "Unlimited",
		basic: "Unlimited",
		standard: "Unlimited",
		pro: "Unlimited",
		enterprise: "Unlimited",
	},
	{
		name: "Contacts",
		individual: "500",
		basic: "2,500",
		standard: "5,000",
		pro: "Unlimited",
		enterprise: "Unlimited",
	},
	{
		name: "Tasks",
		individual: true,
		basic: true,
		standard: true,
		pro: true,
		enterprise: true,
	},
	{
		name: "Users",
		individual: "Unlimited",
		basic: "Unlimited",
		standard: "Unlimited",
		pro: "Unlimited",
		enterprise: "Unlimited",
	},
	{
		name: "Contacts",
		individual: "500",
		basic: "2,500",
		standard: "5,000",
		pro: "Unlimited",
		enterprise: "Unlimited",
	},
	{
		name: "Tasks",
		individual: false,
		basic: false,
		standard: true,
		pro: true,
		enterprise: true,
	},
];

const pricing = () => {
	return (
		<>
			<section className="pt-16 lg:pt-20 pb-32 lg:pb-48 bg-primary-700">
				<div className="container px-6 mx-auto overflow-hidden">
					<div className=" text-faded relative z-10 max-w-[1086px] mx-auto text-center">
						<h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-wide capitalize__ mb-6 lg:mb-8">
							<span className="block ">
								Super charge with{" "}
								<span className="text-primary-500">
									Conduit
								</span>
							</span>
						</h1>
						<p className="mx-auto leading-relaxed text-lg lg:max-w-2xl">
							Fuel your pipeline with a modern, mobile-friendly
							workflow that eliminates the need for constant email
							communication to manage your contacts.
						</p>
						<div className="flex flex-wrap justify-center gap-5 mt-10">
							<Link href="/">
								<a className="block">
									<Button primary>
										<div className="flex items-center gap-2">
											Get started
											<span className="w-6 rotate-90 -mr-6">
												<Icon name="arrow" />
											</span>
										</div>
									</Button>
								</a>
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section
				className="relative pt-20 lg:py-40 pb-40 lg:pb-64
        before:absolute before:-skew-y-2 before:-translate-y-16 before:top-0 before:left-0 before:h-40 before:w-full before:bg-white 
        bg-white text-primary-600"
			>
				<div className="relative z-10">
					<div className="container lg:px-6 mx-auto">
						<div
							className="overflow-y-auto"
							style={{
								WebkitMaskImage:
									"linear-gradient(to right, transparent, black 10px, black 90%, transparent)",
							}}
						>
							<table className="table-fixed min-w-full">
								<thead className="border-b-2 border-primary-600">
									<tr>
										<th className="py-3 px-4 align-bottom text-left text-lg font-semibold">
											Features
										</th>
										{PricingCols.map((item, index) => (
											<th
												key={index}
												className={`py-3 px-4 pt-4 text-base font-semibold ${
													item?.featured &&
													"bg-primary-500/10 rounded-tl-lg rounded-tr-lg"
												}`}
											>
												{item?.name}
												<p className="text-sm font-medium tracking-wide text-gray-600 pt-2 pb-10">
													<span className="text-4xl font-bold text-primary-500">
														${item?.price}
													</span>
													/user
												</p>
											</th>
										))}
									</tr>
								</thead>
								<tbody>
									{ProductFeatures?.map((item, index) => (
										<tr
											key={index}
											className="border-b border-primary-600/10"
										>
											<td className="py-4 px-4 font-medium">
												{item?.name}
											</td>
											<td className="py-6 px-4 text-sm text-center capitalize bg-primary-500/10">
												{convertBoolean(
													item?.individual
												)}
											</td>
											<td className="py-6 px-4 text-sm text-center capitalize">
												{convertBoolean(item?.basic)}
											</td>
											<td className="py-6 px-4 text-sm text-center capitalize">
												{convertBoolean(item?.standard)}
											</td>
											<td className="py-6 px-4 text-sm text-center capitalize">
												{convertBoolean(item?.pro)}
											</td>
											<td className="py-6 px-4 text-sm text-center capitalize">
												{convertBoolean(
													item?.enterprise
												)}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<div className="mt-10 lg:mt-16 text-center">
							<Link href="/">
								<a className="inline-block mx-auto">
									<Button primary>
										<div className="flex items-center gap-2">
											Get started
											<span className="w-6 rotate-90 -mr-6">
												<Icon name="arrow" />
											</span>
										</div>
									</Button>
								</a>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

const convertBoolean = (value: boolean | string) => {
	return typeof value == "boolean" ? (
		value ? (
			<span className="inline-block mx-auto w-6 text-primary-500">
				<Icon name="check" />
			</span>
		) : (
			"--"
		)
	) : (
		value
	);
};

export default pricing;

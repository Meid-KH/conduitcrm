import Button from "components/Button";
import Link from "next/link";
import React from "react";
import Icon from "utils/Icon";
import { useRouter } from "next/router";

const PricingCols = [
  {
    name: "individual",
    price: "0",
    featured: false,
    description:
      "For professionals looking to dive in into Conduit's Lead Processing platform",
  },
  {
    name: "basic",
    price: "11",
    featured: false,
    description:
      "For teams to dive into deals and multiple pipelines beyond individual capabilities",
  },
  {
    name: "standard",
    price: "29",
    featured: true,
    description:
      "The most popular option for organizations to automate tasks, and communicate with their leads",
  },
  {
    name: "pro",
    price: "39",
    featured: false,
    description:
      "Dive in into more powerful resources, marketing campaigns, and click to call integrations.",
  },
  {
    name: "enterprise",
    price: "--",
    featured: false,
  },
];

const ProductFeatures = [
  {
    name: "Users",
    individual: "1",
    basic: "Unlimited",
    standard: "Unlimited",
    pro: "Unlimited",
    enterprise: "Unlimited",
    featured: PricingCols.find((col) => col.featured)?.name,
  },
  {
    name: "Contacts",
    individual: "500",
    basic: "2,500",
    standard: "5,000",
    pro: "Unlimited",
    enterprise: "Unlimited",
    featured: PricingCols.find((col) => col.featured)?.name,
  },
  {
    name: "Tasks",
    individual: true,
    basic: true,
    standard: true,
    pro: true,
    enterprise: true,
    featured: PricingCols.find((col) => col.featured)?.name,
  },
  {
    name: "Properties",
    individual: true,
    basic: true,
    standard: true,
    pro: true,
    enterprise: true,
    featured: PricingCols.find((col) => col.featured)?.name,
  },
  {
    name: "Tags",
    individual: true,
    basic: true,
    standard: true,
    pro: true,
    enterprise: true,
    featured: PricingCols.find((col) => col.featured)?.name,
  },
  {
    name: "Deals",
    individual: false,
    basic: true,
    standard: true,
    pro: true,
    enterprise: true,
    featured: PricingCols.find((col) => col.featured)?.name,
  },
  {
    name: "Pipelines",
    individual: "1",
    basic: "2 per user",
    standard: "10 per user",
    pro: "25 per user",
    enterprise: "Unlimited",
    featured: PricingCols.find((col) => col.featured)?.name,
  },
  {
    name: "Automation",
    individual: false,
    basic: false,
    standard: true,
    pro: true,
    enterprise: true,
    featured: PricingCols.find((col) => col.featured)?.name,
  },
  {
    name: "Client Experience",
    individual: false,
    basic: false,
    standard: true,
    pro: true,
    enterprise: true,
    featured: PricingCols.find((col) => col.featured)?.name,
  },
  {
    name: "Phone provisioning",
    individual: false,
    basic: false,
    standard: true,
    pro: true,
    enterprise: true,
    featured: PricingCols.find((col) => col.featured)?.name,
  },
  {
    name: "SMS",
    individual: false,
    basic: false,
    standard: true,
    pro: true,
    enterprise: true,
    featured: PricingCols.find((col) => col.featured)?.name,
  },
  {
    name: "SMS Monthly Credits",
    individual: false,
    basic: false,
    standard: "500 credits",
    pro: "1000 credits",
    enterprise: "2000+ credits",
    featured: PricingCols.find((col) => col.featured)?.name,
  },
  {
    name: "Click to Call",
    individual: false,
    basic: false,
    standard: false,
    pro: true,
    enterprise: true,
    featured: PricingCols.find((col) => col.featured)?.name,
  },
  {
    name: "Integrations",
    individual: false,
    basic: false,
    standard: false,
    pro: true,
    enterprise: true,
    featured: PricingCols.find((col) => col.featured)?.name,
  },
  {
    name: "Drip Campaigns",
    individual: false,
    basic: false,
    standard: false,
    pro: true,
    enterprise: true,
    featured: PricingCols.find((col) => col.featured)?.name,
  },
  {
    name: "Multiple Organizations",
    individual: false,
    basic: false,
    standard: false,
    pro: false,
    enterprise: true,
    featured: PricingCols.find((col) => col.featured)?.name,
  },
  {
    name: "Playbook Marketplace",
    individual: false,
    basic: false,
    standard: false,
    pro: false,
    enterprise: true,
    featured: PricingCols.find((col) => col.featured)?.name,
  },
  {
    name: "Customer Support",
    individual: "Docs",
    basic: "Docs, Email",
    standard: "Docs, Email",
    pro: "Docs, Email (1-day response)",
    enterprise: "Docs, Email (2-hr response), Phone",
    featured: PricingCols.find((col) => col.featured)?.name,
  },
  {
    name: "Customer Experience Support",
    individual: false,
    basic: false,
    standard: false,
    pro: false,
    enterprise: "Video call setup and support",
    featured: PricingCols.find((col) => col.featured)?.name,
  },
  {
    name: "Feature Requests",
    individual: false,
    basic: false,
    standard: false,
    pro: false,
    enterprise: true,
    featured: PricingCols.find((col) => col.featured)?.name,
  },
];

const pricing = () => {
  return (
    <>
      <Intro />
      <PricingTable />
    </>
  );
};

const Intro = () => (
  <section className="pt-16 lg:pt-20 pb-32 lg:pb-48 bg-primary-700">
    <div className="container px-6 mx-auto overflow-hidden">
      <div className=" text-faded relative z-10 max-w-[1086px] mx-auto text-center">
        <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-wide capitalize__ mb-6 lg:mb-8">
          <span className="block ">
            Super charge with <span className="text-primary-500">Conduit</span>
          </span>
        </h1>
        <p className="mx-auto leading-relaxed text-lg lg:max-w-2xl">
          Fuel your pipeline with a modern, mobile-friendly workflow that
          eliminates the need for constant email communication to manage your
          contacts.
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
);

const FeatureTD = ({
  isFeatured,
  children,
}: {
  isFeatured?: boolean;
  children: any;
}) => {
  return (
    <td
      className={`py-6 lg:py-8 px-4 text-sm text-center capitalize ${
        isFeatured && "bg-primary-500/10 rounded-tl-lg rounded-tr-lg"
      }`}
    >
      {children}
    </td>
  );
};

const PricingTable = () => {
  const router = useRouter();
  const handleOnRegister = (plan: string) => {
    router.push(`https://app.conduitcrm.com/register?plan=${plan}`);
  };

  return (
    <section
      className="relative py-20 lg:py-40 pb-40 lg:pb-64
        before:absolute before:-skew-y-2 before:-translate-y-16 before:top-0 before:left-0 before:h-40 before:w-full before:bg-white 
        bg-white text-primary-600"
    >
      <div className="relative z-10">
        <div className="container lg:px-6 mx-auto">
          <div className="overflow-y-auto">
            <table className="table-auto w-full mx-auto">
              <thead className="border-b-2 border-primary-600">
                <tr className="">
                  <th className="p-4 align-bottom text-left text-lg font-semibold">
                    Features
                  </th>
                  {PricingCols.map((item, index) => (
                    <th
                      key={index}
                      className={`p-4 mt-6 text-base font-semibold ${
                        item?.featured &&
                        "bg-primary-500/10 rounded-tl-lg rounded-tr-lg"
                      }`}
                    >
                      <div className="flex flex-col items-center min-h-full h-96">
                        <span className="uppercase text-xl">{item?.name}</span>
                        <p className="text-sm tracking-wide text-gray-600 mt-10 pb-10 font-normal flex items-center gap-3">
                          {item?.price === "--" ? (
                            <>
                              <button className="border border-slate-200 rounded-full py-2 px-7 text-sm">
                                Contact us
                              </button>
                            </>
                          ) : (
                            <>
                              <span className="text-6xl text-primary-500 font-light">
                                ${item?.price}
                              </span>
                              <span className="flex flex-col justify-start items-start">
                                {item.name === "individual" ? (
                                  <>
                                    <span>free</span>
                                    <span>forever</span>
                                  </>
                                ) : (
                                  <>
                                    <span>seat /</span>
                                    <span>month</span>
                                  </>
                                )}
                              </span>
                            </>
                          )}
                        </p>
                        <div className="pb-10 font-normal text-xs text-left">
                          {item.description}
                        </div>
                        {item.name !== "enterprise" ? (
                          <div className="pb-10 mt-auto mb-10">
                            <button
                              onClick={() => handleOnRegister(item.name)}
                              className="border border-slate-200 py-2 px-7 rounded-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 transition hover:-translate-y-1 text-white text-xs font-semibold"
                            >
                              {item.name === "individual" ? (
                                <span className="uppercase">register</span>
                              ) : (
                                <span className="uppercase">try for free</span>
                              )}
                            </button>
                          </div>
                        ) : null}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ProductFeatures?.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-primary-600/10 last:border-none"
                  >
                    <td className="py-6 lg:py-8 px-4 font-medium">
                      {item?.name}
                    </td>
                    <FeatureTD isFeatured={item?.featured === "individual"}>
                      {convertBoolean(item?.individual)}
                    </FeatureTD>
                    <FeatureTD isFeatured={item?.featured === "basic"}>
                      {convertBoolean(item?.basic)}
                    </FeatureTD>
                    <FeatureTD isFeatured={item?.featured === "standard"}>
                      {convertBoolean(item?.standard)}
                    </FeatureTD>
                    <FeatureTD isFeatured={item?.featured === "pro"}>
                      {convertBoolean(item?.pro)}
                    </FeatureTD>
                    <FeatureTD isFeatured={item?.featured === "enterprise"}>
                      {convertBoolean(item?.enterprise)}
                    </FeatureTD>
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

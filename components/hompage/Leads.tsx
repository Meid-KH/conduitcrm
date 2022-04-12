import React from "react";
import Button from "components/Button";
import LeadProcessing from "assets/img/lead-processing.png";
import RealEstateCrm from "assets/img/real-estate-crm.png";
import Icon from "utils/Icon";

const Leads = () => {
  return (
    <section
      style={{ boxShadow: "0 -10px 20px 1px #18c4ff33" }}
      className="bg-white py-10 lg:py-32 -skew-y-[2deg] -translate-y-24 lg:-mb-24"
    >
      <div className="container px-6 mx-auto skew-y-[2deg]">
        <div className="text-center max-w-5xl mx-auto mb-8 lg:mb-16">
          <h2 className="text-primary-600 font-bold text-3xl lg:text-5xl lg:leading-tight">
            Day-to-day <span className="text-primary-500">Lead Processing</span>{" "}
            can <br /> become unmanageable
          </h2>
          <p className="lg:text-xl lg:leading-normal lg:max-w-xl lg:mx-auto text-primary-400 mt-4">
            Processing leads on a daily basis can become unmanageable and can
            cost you and your leads, time, money, and your reputation.
          </p>
        </div>
        {/* Lead Processing  */}
        <img
          className="max-w-full w-[28rem] mx-auto mb-10 lg:mb-20"
          src={LeadProcessing.src}
          alt="Lead Processing"
        />
        <div className="text-center max-w-3xl mx-auto mb-7 lg:mb-14">
          <h2 className="text-primary-600 font-bold text-3xl lg:text-5xl lg:leading-tight">
            <span className="mr-2">The first Real Estate</span>
            <span className="text-primary-500">Lead Processing</span> platform
          </h2>
          <p className="lg:text-xl lg:leading-normal lg:max-w-xl lg:mx-auto text-primary-400 mt-4">
            With Conduit&#39;s lead-processing solution, you will stay <br />{" "}
            ahead by automating all lead processes without losing <br /> track
            from start to finish.
          </p>
          <div className="mt-12">
            <Button primary>
              <div className="flex items-center gap-2">
                Get started
                <span className="w-6 rotate-90 -mr-6">
                  <Icon name="arrow" />
                </span>
              </div>
            </Button>
          </div>
        </div>
        <img
          className="max-w-full w-[64rem] mx-auto"
          src={RealEstateCrm.src}
          alt="Real estate Crm"
        />
      </div>
    </section>
  );
};

export default Leads;

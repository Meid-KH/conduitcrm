import Button from "components/Button";
import Link from "next/link";
import React from "react";
import Icon from "utils/Icon";

const Cta = () => {
  return (
    <section className="bg-gradient-to-b from-primary-700 to-primary-600 pt-36 pb-44 lg:py-60">
      <div className="container px-6 mx-auto">
        <div className="text-center">
          <h4 className="text-3xl leading-snug lg:text-5xl lg:leading-tight text-faded font-semibold">
            The only LP-Platform.
            <span className="block font-light text-primary-500">
              Limitless stuff.
            </span>
          </h4>
          <div className="mt-5 lg:mt-10">
            <Link href="/pricing">
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
};

export default Cta;

import Button from "components/Button";
import React, { ChangeEvent, FormEvent, useCallback, useState } from "react";
import Icon from "utils/Icon";

interface SubmissionFormProps {
  [x: string]: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<SubmissionFormProps>({
    first: "",
    last: "",
    email: "",
    company: "",
    job: "",
    message: "",
    phone: "",
    "form-name": "contact",
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleOnChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {
      currentTarget: { name, value },
    } = event;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const encode = (data: SubmissionFormProps) => {
    return Object.keys(data)
      .map(
        (key: string) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(formData),
      })
        .then(() => {})
        .catch(() => {})
        .finally(() => setIsSubmitted(true));

      e.preventDefault();
    },
    [formData]
  );

  return (
    <>
      <section className="bg-primary-700 py-20 lg:py-32">
        <div className="container px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 pb-24">
            <div>
              <h1 className="text-5xl leading-tight font-bold tracking-wide uppercase mb-2 lg:mb-4">
                Contact our team
              </h1>
              <p className="text-xl font-light leading-normal tracking-wide">
                Meet with a product consultant to see <br />
                how{" "}
                <span className="text-primary-500 underline underline-offset-2">
                  conduitcrm.com
                </span>{" "}
                can fit your exact business needs
              </p>
            </div>
            {isSubmitted ? (
              <div className="p-6 lg:p-8 bg-white text-gray-500 rounded-lg shadow-lg shadow-primary-500">
                <div className="text-2xl text-center pt-20 pb-40">
                  Thank you for your submission. We will contact you shortly!
                </div>
              </div>
            ) : (
              <>
                <form
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="p-6 lg:p-8 bg-white text-gray-500 rounded-lg shadow-lg shadow-primary-500"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="grid gap-x-6 gap-y-5 xl:grid-cols-2 ">
                    <div className="space-y-1.5">
                      <label htmlFor="first" className="text-primary-600">
                        First name{" "}
                        <sup className="text-lg -top-[0.25em] text-red-500">
                          *
                        </sup>{" "}
                      </label>
                      <input
                        type="text"
                        name="first"
                        onChange={handleOnChange}
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="last" className="text-primary-600">
                        Last name{" "}
                        <sup className="text-lg -top-[0.25em] text-red-500">
                          *
                        </sup>{" "}
                      </label>
                      <input
                        type="text"
                        name="last"
                        onChange={handleOnChange}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-primary-600">
                        Work email{" "}
                        <sup className="text-lg -top-[0.25em] text-red-500">
                          *
                        </sup>{" "}
                      </label>
                      <input
                        type="email"
                        name="email"
                        onChange={handleOnChange}
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="company" className="text-primary-600">
                        Company name{" "}
                        <sup className="text-lg -top-[0.25em] text-red-500">
                          *
                        </sup>{" "}
                      </label>
                      <input
                        type="text"
                        name="company"
                        onChange={handleOnChange}
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-primary-600">
                        Phone{" "}
                        <sup className="text-lg -top-[0.25em] text-red-500">
                          *
                        </sup>{" "}
                      </label>
                      <input
                        type="text"
                        name="phone"
                        onChange={handleOnChange}
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="job" className="text-primary-600">
                        Job title{" "}
                        <sup className="text-lg -top-[0.25em] text-red-500">
                          *
                        </sup>{" "}
                      </label>
                      <input
                        type="text"
                        name="job"
                        onChange={handleOnChange}
                        required
                      />
                    </div>

                    <div className="space-y-1.5 xl:col-span-2">
                      <label htmlFor="message" className="text-primary-600">
                        How can we help you?
                        <sup className="text-lg -top-[0.25em] text-red-500">
                          *
                        </sup>{" "}
                      </label>
                      <textarea
                        name="message"
                        rows={6}
                        onChange={handleOnChange}
                        required
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="flex flex-col items-center space-y-5 mt-9">
                    <label htmlFor="" className="block text-sm">
                      By clicking submit, I acknowledge receipt of the{" "}
                      <span className="text-primary-600/80">
                        conduitcrm.com
                      </span>{" "}
                      <a
                        href=""
                        className="text-primary-500 underline-offset-2 hover:underline"
                      >
                        Privacy policy
                      </a>
                    </label>
                    <Button primary type="submit">
                      <div className="flex items-center gap-2">
                        Submit
                        <span className="w-6 rotate-90 -mr-6">
                          <Icon name="arrow" />
                        </span>
                      </div>
                    </Button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

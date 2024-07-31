import Image from "next/image";
import { FC } from "react";
import { Text } from "rizzui";

const Faq = () => {
  return (
    <div className="flex flex-col max-w-[740px] my-10 max-md:px-5 mx-auto">
      <div className="flex flex-col mb-5 w-full text-center max-md:max-w-full">
        <div className="self-center text-2xl md:text-4xl font-bold leading-10 text-[#2C2C2C] max-md:max-w-full">
          Frequently Asked Questions
        </div>
        <div className="mt-3 md:mt-5 text-sm md:text-base font-medium text-zinc-500 max-md:max-w-full">
          Our customer support is always available to provide answers to any of
          your questions but to begin with, here are some of our most asked
          questions.
          <br />
          How Does Billspot Work?
          <br />
        </div>
      </div>
      <div className="flex gap-5 justify-between px-px my-5 w-full md:text-xl font-bold leading-7 text-[#2C2C2C] max-md:flex-wrap max-md:my-5 max-md:max-w-full">
        <div>How do I fund my VTU wallet?</div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1074d176becbd0a2c990713546def389bfac1595c96533f32727443507f4d91a?apiKey=e3159558e3c24b7bb6f2db02f0873db3&&apiKey=e3159558e3c24b7bb6f2db02f0873db3"
          className="shrink-0 my-auto aspect-[0.96] w-[23px]"
        />
      </div>
      <div className="w-full border border-solid bg-stone-300 border-stone-300 min-h-[1px] max-md:max-w-full" />
      <div className="flex gap-5 justify-between px-px my-5 w-full md:text-xl font-bold leading-7 text-[#2C2C2C] max-md:flex-wrap max-md:my-5 max-md:max-w-full">
        <div>How do I create an account on VTU?</div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/09515d8a01a5000472f339c17f530840fa63bcf4b7eb8ac3307f6dceb31f007d?apiKey=e3159558e3c24b7bb6f2db02f0873db3&&apiKey=e3159558e3c24b7bb6f2db02f0873db3"
          className="shrink-0 my-auto aspect-[0.92] w-[22px]"
        />
      </div>
      <div className="pb-3 w-full text-[#2C2C2C] max-md:max-w-full">
        To create an account, download the VTU app, click on &quot;Sign
        Up,&quot; and fill in your personal information. Verify your email to
        complete the registration process.
      </div>
      <div className="w-full border border-solid bg-stone-300 border-stone-300 min-h-[1px] max-md:max-w-full" />
      <div className="flex gap-5 justify-between px-px my-5 w-full md:text-xl font-bold leading-7 text-[#2C2C2C] max-md:flex-wrap max-md:my-5 max-md:max-w-full">
        <div>What is the auto-renewal feature?</div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1074d176becbd0a2c990713546def389bfac1595c96533f32727443507f4d91a?apiKey=e3159558e3c24b7bb6f2db02f0873db3&&apiKey=e3159558e3c24b7bb6f2db02f0873db3"
          className="shrink-0 my-auto aspect-[0.92] w-[22px]"
        />
      </div>
      <div className="w-full border border-solid bg-stone-300 border-stone-300 min-h-[1px] max-md:max-w-full" />
      <div className="flex gap-5 justify-between px-px my-5 w-full md:text-xl font-bold leading-7 text-[#2C2C2C] max-md:flex-wrap max-md:my-5 max-md:max-w-full">
        <div>How do I convert airtime to cash?</div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1074d176becbd0a2c990713546def389bfac1595c96533f32727443507f4d91a?apiKey=e3159558e3c24b7bb6f2db02f0873db3&&apiKey=e3159558e3c24b7bb6f2db02f0873db3"
          className="shrink-0 my-auto aspect-[0.88] w-[21px]"
        />
      </div>
      <div className="w-full border border-solid bg-stone-300 border-stone-300 min-h-[1px] max-md:max-w-full" />
      <div className="flex gap-5 justify-between px-px my-5 w-full md:text-xl font-bold leading-7 text-[#2C2C2C] max-md:flex-wrap max-md:my-5 max-md:max-w-full">
        <div className="">
          Can I send airtime or data to multiple numbers?
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1074d176becbd0a2c990713546def389bfac1595c96533f32727443507f4d91a?apiKey=e3159558e3c24b7bb6f2db02f0873db3&&apiKey=e3159558e3c24b7bb6f2db02f0873db3"
          className="shrink-0 my-auto aspect-[0.88] w-[21px]"
        />
      </div>
      <div className="w-full border border-solid bg-stone-300 border-stone-300 min-h-[1px] max-md:max-w-full" />
      <div className="flex gap-5 justify-between px-px my-5 w-full md:text-xl font-bold leading-7 text-[#2C2C2C] max-md:flex-wrap max-md:my-5 max-md:max-w-full">
        <div>What is KYC, and why is it required?</div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1074d176becbd0a2c990713546def389bfac1595c96533f32727443507f4d91a?apiKey=e3159558e3c24b7bb6f2db02f0873db3&&apiKey=e3159558e3c24b7bb6f2db02f0873db3"
          className="shrink-0 my-auto aspect-[0.92] w-[22px]"
        />
      </div>
      <div className="w-full border border-solid bg-stone-300 border-stone-300 min-h-[1px] max-md:max-w-full" />
    </div>
  );
};

export default Faq;

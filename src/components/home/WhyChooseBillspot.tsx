import Image from "next/image";
import { FC } from "react";
import { Text } from "rizzui";

const WhyChooseBillspot = () => {
  return (
    <div className="my-10 px-32 max-md:px-5">
      <Text className="font-bold text-[18px] md:text-[24px] uppercase text-center pb-10">
        why choose billspot?
      </Text>
      <div className="flex justify-center items-center px-16 py-5 md:py-9 bg-[linear-gradient(114deg,#F7CE68_0%,#FBAB7E_100%)] rounded-[24px] md:rounded-[44px] max-md:px-5">
        <div className="w-full max-w-[1023px] max-md:max-w-full">
          <div className="grid md:grid-cols-2 md:gap-32">
            <div className="w[450px] h[500px] rounded-[30px] md:rounded-[44px] overflow-hidden max-md:w-full">
              <img className="" src="/images/why-choose.png" alt="" />
            </div>
            <div className="flex flex-col w-full md:w-[403px]">
              <div className="flex flex-col self-stretch my-auto text-zinc-800 max-md:mt-10 z-10">
                <div className="flex gap-5 relative">
                  <div className="shrink-0 self-start mt-1 w-6 h-6 bg-yellow-300 rounded-full border-bs-violet border-solid border-[6px] stroke-[6px]" />
                  <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                    <div className="text-xl font-bold leading-6">
                      Multi-Recipient Feature
                    </div>
                    <div className="mt-2 text-base leading-5">
                      Send airtime and data to multiple numbers with ease.
                    </div>
                  </div>
                  <div className="border border-bs-violet border-dotted w-px h-[250px] md:h-[300px] top-5 left-3 absolute -z-10"></div>
                </div>
                <div className="flex gap-5 mt-20 max-md:mt-10">
                  <div className="shrink-0 my-auto w-6 h-6 bg-yellow-300 rounded-full border-bs-violet border-solid border-[6px] stroke-[6px]" />
                  <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                    <div className="text-xl font-bold leading-6">
                      User-Friendly Interface
                    </div>
                    <div className="mt-2 text-base leading-5">
                      Enjoy a smooth experience with our intuitive design on
                      both mobile and web.
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 mt-16 max-md:mt-10">
                  <div className="shrink-0 my-auto w-6 h-6 bg-yellow-300 rounded-full border-bs-violet border-solid border-[6px] stroke-[6px]" />
                  <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                    <div className="text-xl font-bold leading-6">
                      Convenient Transactions
                    </div>
                    <div className="mt-3 text-base leading-5">
                      Easily purchase airtime, data, and pay bills all in one
                      app.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseBillspot;

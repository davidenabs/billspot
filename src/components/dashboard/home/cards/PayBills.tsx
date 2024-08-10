import { WifiIcon } from "@heroicons/react/16/solid";
import React from "react";
import { Button, Text } from "rizzui";

type Props = {};

const PayBills = (props: Props) => {
  return (
    <div className="hidden md:block">
      <div className="flex items-center gap-2">
        <Text className="w-fit">Pay Bills</Text>
        <div className="h-px w-[95%] bg-gray-200"></div>
      </div>

      <div className="flex items-center gap-16 mt-12">
        <Button className="flex flex-col self-center p-0">
          <div className="bg-[#F2EDFF] p-5 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke=""
              className="size-6 stroke-bs-violet"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>
          </div>
          <Text className="mt-2 font-medium">Buy Airtime</Text>
        </Button>

        <Button className="flex flex-col self-center p-0">
          <div className="bg-[#F2EDFF] p-5 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke=""
              className="size-6 stroke-bs-violet"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>
          </div>
          <Text className="mt-2 font-medium">Sell Airtime</Text>
        </Button>

        <Button className="flex flex-col self-center p-0">
          <div className="bg-[#F2EDFF] p-5 rounded-full">
            <WifiIcon className="w-6 text-bs-violet" />
          </div>
          <Text className="mt-2 font-medium">Buy Data</Text>
        </Button>

        <Button className="flex flex-col self-center p-0">
          <div className="bg-[#F2EDFF] p-5 rounded-full">
            <WifiIcon className="w-6 text-bs-violet" />
          </div>
          <Text className="mt-2 font-medium">Pay Cable TV</Text>
        </Button>

        <Button className="flex flex-col self-center p-0">
          <div className="bg-[#F2EDFF] p-5 rounded-full">
            <WifiIcon className="w-6 text-bs-violet" />
          </div>
          <Text className="mt-2 font-medium">Buy Electricity</Text>
        </Button>

        <Button className="flex flex-col self-center p-0">
          <div className="bg-[#F2EDFF] p-5 rounded-full">
            <WifiIcon className="w-6 text-bs-violet" />
          </div>
          <Text className="mt-2 font-medium">Fund Betting</Text>
        </Button>
      </div>
    </div>
  );
};

export default PayBills;

import React from "react";
import { EyeIcon } from "@heroicons/react/16/solid";
import { Button, Text } from "rizzui";
import { SendIcon } from "@/icons";

type Props = {};

const Wallet = (props: Props) => {
  return (
    <div className="flex flex-col rounded-3xl bg-black w-full h-[217px] p-7 space-y3">
      <div className="flex justify-between items-center text-white text-sm">
        <div className="flex items-center gap-2">
          <Text>Balance</Text>
          <div>
            <EyeIcon className="w-8" />
          </div>
        </div>

        <Text className="text-bs-yellow">Show Account Details</Text>
      </div>

      <div className="mt-3">
        <Text className="font-bold text-[#D5D5D5] text-3xl">
          ₦28,590.<span className="text-sm">00</span>
        </Text>
      </div>

      <div className="mt-5 flex gap-3 items-center text-white text-base">
        <div className="w-full h-[68px] bg-[#1D1D1D] rounded-lg flex justify-center items-center gap-2 ">
          <SendIcon className="w-8 h-8" />
          <Text>Top up</Text>
        </div>
        <div className="w-full h-[68px] bg-[#1D1D1D] rounded-lg flex justify-center items-center gap-2 ">
          <SendIcon className="w-8 h-8" />
          <Text>Transfer</Text>
        </div>
        <div className="w-full h-[68px] bg-[#1D1D1D] rounded-lg flex justify-center items-center gap-2 ">
          <SendIcon className="w-8 h-8" />
          <Text>Request</Text>
        </div>
      </div>
    </div>
  );
};

export default Wallet;

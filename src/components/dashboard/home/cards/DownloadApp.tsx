import React from "react";
import { EyeIcon } from "@heroicons/react/16/solid";
import { Button, Text } from "rizzui";
import { AndroidIcon, AppleIcon, SendIcon } from "@/icons";

type Props = {};

const DownloadApp = (props: Props) => {
  return (
    <div className="hidden md:flex flex- rounded-3xl bg-[linear-gradient(114deg,#85FFBD_0%,#FFFB7D_100%)] w-full h-[217px] p-7 overflow-hidden">
      <div className="flex flex-col my-auto w-[317px]">
        <Text className="font-bold text-[25px] w-fit">
          Download the Billspot<br></br>App & get started now
        </Text>
        <Button className="gap-2 bg-[#2C2C2C] w-fit text-bs-yellow px-5 py-7 mt-3">
          <div className="flex">
            <AndroidIcon className="h-[30px] w-[30px]" />
            <AppleIcon className="h-[30px] w-[30px]" />
          </div>
          <Text className="font-bold text-[16px]">Download Billspot</Text>
        </Button>
      </div>

      <div>
        <img
          className="w-[233px] -[196px]"
          src="/images/hand-holding-phone.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default DownloadApp;

"use client";
import Button from "@/components/forms/button";
import { CheckIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";
import { PinCode, Text, Password, Modal } from "rizzui";
import useNavigate from "@/utils/navigation";

export default function LoginPage() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { navigateTo } = useNavigate();

  return (
    <section>
      <div className="space-y-10">
        <form className="!t-24">
          <div className="w-full space-y-32 md:space-y-36">
            <div className="mt-10 w[500px]">
              <div className="flexgap-5 text-center">
                <div>
                  <Text className=" text-2xl font-bold text-zinc-800">
                    Check your phone
                  </Text>
                  <Text className="mt-1 w-full text-sm md:text-base text-zinc-500">
                    Please enter the code sent to the number sending in
                    ********5565
                  </Text>
                </div>
              </div>
              <div className="mt-10 space-y-5">
                <div>
                  <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#ababab] mb-4">
                    Enter Code
                  </p>
                  <PinCode
                    size="xl"
                    variant="outline"
                    className=""
                    inputClassName="border-0 ring-0 bg-neutral-100 !rounded-lg !w-[79px] !h-[70px]"
                  />
                </div>
              </div>
            </div>
            <div>
              <Text className="font-semibold text-center">
                Didn’t receive a code?{" "}
                <span className="bg-green-700 rounded-full px-1 text-white text-sm">
                  Resend
                </span>
              </Text>
              <Button
                onClick={() => navigateTo("/set-pin")}
                className="rounded-[12px] w-full h-[52px] !mt-5  md:!mt-10"
              >
                <span className="font-bold text-lg">Next</span>
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

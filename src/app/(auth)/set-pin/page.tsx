"use client";
import Button from "@/components/forms/button";
import { CheckIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";
import { PinCode, Text, Password, Modal } from "rizzui";
import useNavigate from "@/utils/navigation";

export default function LoginPage() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [changeText, setChangeText] = React.useState(false);
  const { navigateTo } = useNavigate();

  return (
    <section>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="bg-white rounded-2xl p-8 py-12 flex flex-col items-center justify-center text-center space-y-5">
          <div className="p-1 rounded-full bg-green-700 w-[63px] h-[63px] flex items-center justify-center">
            <CheckIcon className="text-white w-12" />
          </div>
          <Text className="w-[288px]">
            Account transaction PIN has been set up successfully
          </Text>
          <Button
            onClick={() => navigateTo("/dashboard")}
            className="rounded-[12px] h-[52px] md:w-[322px] w-full mx-auto"
          >
            <span className="font-bold text-lg">Let’s Go</span>
          </Button>
        </div>
      </Modal>
      <div className="space-y-10">
        <form className="!t-24">
          <div className="w-full space-y-32 md:space-y-44">
            <div className="mt-10">
              <div className="flex gap-5">
                <div className="h-[96px] w-[96px]">
                  <img src="/images/mail-box.png" alt="" className="w-fit" />
                </div>
                <div>
                  <Text className=" text-2xl font-bold text-zinc-800">
                    {!changeText ? "Create your PIN" : "Wait! Confirm your PIN"}
                  </Text>
                  <Text className="mt-1 w-full text-sm md:text-base text-zinc-500">
                    {!changeText
                      ? " Create a PIN for your account to secure your Billspot transactions"
                      : " Confirm the PIN your set for your account "}
                  </Text>
                </div>
              </div>
              <div className="mt-10 space-y-5">
                <div>
                  <PinCode
                    size="xl"
                    variant="outline"
                    className=""
                    inputClassName="border-0 ring-0 bg-neutral-100 !rounded-lg !w-[79px] !h-[70px]"
                  />
                </div>
              </div>
            </div>

            {!changeText ? (
              <Button
                onClick={() => setChangeText(true)}
                className="rounded-[12px] w-full h-[52px] !mt-32"
              >
                <span className="font-bold text-lg">Next</span>
              </Button>
            ) : (
              <Button
                onClick={() => setIsOpen(true)}
                className="rounded-[12px] w-full h-[52px] !mt-32"
              >
                <span className="font-bold text-lg">Set PIN</span>
              </Button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

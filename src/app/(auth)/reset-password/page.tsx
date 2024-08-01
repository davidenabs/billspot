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
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="bg-white rounded-2xl p-8 py-12 flex flex-col items-center justify-center text-center space-y-5">
          <div className="p-1 rounded-full bg-green-700 w-[63px] h-[63px] flex items-center justify-center">
            <CheckIcon className="text-white w-12" />
          </div>
          <Text className="w-[288px]">
            Your password has been reset successfully
          </Text>
          <Button
            onClick={() => navigateTo("/login")}
            className="rounded-[12px] h-[52px] md:w-[322px] w-full mx-auto"
          >
            <span className="font-bold text-lg">Login</span>
          </Button>
        </div>
      </Modal>
      <div className="space-y-10">
        <form className="!t-24">
          <div className="w-full">
            <div className="mt-10 w[500px]">
              <div className="flex gap-5">
                <div className="h-[96px] w-[96px]">
                  <img src="/images/mail-box.png" alt="" className="w-full" />
                </div>
                <div>
                  <Text className=" text-2xl font-bold text-zinc-800">
                    Check Your Email
                  </Text>
                  <Text className="mt-1 w-full text-sm md:text-base text-zinc-500">
                    We have sent a password reset code to your email address.
                    Input them correctly in the box below.
                  </Text>
                </div>
              </div>
              <div className="mt-10 space-y-5">
                <div>
                  <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#ababab] mb-4">
                    Enter OTP
                  </p>
                  <PinCode
                    size="xl"
                    variant="outline"
                    className=""
                    inputClassName="border-0 ring-0 bg-neutral-100 !rounded-lg !w-[79px] !h-[70px]"
                  />
                </div>

                <Password
                  label="New password"
                  placeholder=""
                  className="my-4"
                  inputClassName="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#808080] h-[60px] border-0 bg-transparent w-full !ring-0 focus:ring-none focus:border-none bg-neutral-100"
                  labelClassName="text-sm text-left text-[#2C2C2C] font-normal "
                />

                <div>
                  <Password
                    label="Confirm password"
                    placeholder=""
                    className="my-4"
                    inputClassName="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#808080] h-[60px] border-0 bg-transparent w-full !ring-0 focus:ring-none focus:border-none bg-neutral-100"
                    labelClassName="text-sm text-left text-[#2C2C2C] font-normal "
                  />

                  <div className="text-center text-base font-instrumentSans text-[#808080]">
                    <span>The code expires in ⏱ 09:50 </span>
                    <Link
                      href="/register"
                      className="font-medium text-[#00966D]"
                    >
                      Resend code
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Button
              onClick={() => setIsOpen(true)}
              className="rounded-[12px] w-full h-[52px] !mt-32"
            >
              <span className="font-bold text-lg">Recover password</span>
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

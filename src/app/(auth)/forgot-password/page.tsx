"use client";
import Button from "@/components/forms/button";
import Input from "@/components/forms/input";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";
import { Text } from "rizzui";
import goBack from "@/utils/backNavigationUtils";
import useNavigate from "../../../utils/navigation";

export default function LoginPage() {
  const { navigateTo } = useNavigate();
  return (
    <section>
      <div className="space-y-10">
        <Image
          src={"/images/billspot-logo.png"}
          width={100}
          height={100}
          alt="Billspot"
        />

        <div className="w-full">
          <div className="flex gap-5">
            <button onClick={goBack}>
              <ChevronLeftIcon className="p-0 m-0 w-10 font-extralight" />
            </button>
            <Text className=" text-3xl font-bold text-zinc-800">
              Reset Password 🔐
            </Text>
          </div>
          <Text className="mt-2 w-full text-sm md:text-xl text-zinc-500">
            Enter your registered email to reset your password
          </Text>
        </div>
        <form className="!t-24">
          <div className="xl:w-[500px] w-full h-[178px] space-y-4">
            <Input
              label="Email address"
              placeholder="name@mail.com"
              type="email"
              className="my-4"
            />

            <Button
              className="rounded-[12px] w-full h-[52px] !mt-[32px]"
              onClick={() => navigateTo("/reset-password")}
            >
              <span className="font-bold text-xl">Recover password</span>
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

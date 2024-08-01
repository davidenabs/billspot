"use client";
import Button from "@/components/forms/button";
import Input from "@/components/forms/input";
import useNavigate from "@/utils/navigation";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Text } from "rizzui";

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
          <Text className=" text-3xl font-bold text-zinc-800">
            Welcome Back
          </Text>
          <Text className="mt-2 w-full text-sm md:text-xl text-zinc-500">
            Enter your details to login
          </Text>
        </div>
        <form className="!mt-24 hidde">
          <div className="xl:w-[500px] w-full h-[178px] space-y-4">
            <Input
              label="Email address"
              placeholder="name@mail.com"
              type="email"
              className="my-4"
            />

            <Input
              label="Password"
              placeholder="Enter your password"
              type="password"
              className="my-4"
            />
            <div className="text-end ">
              <Link
                href={"/forgot-password"}
                className="text-sm font-medium text-[#1d1d1d]"
              >
                Forgot password?
              </Link>
            </div>

            <Button
              className="rounded-[12px] w-full h-[52px] !mt-[32px]"
              onClick={() => navigateTo("/verify-account")}
            >
              <span className="font-bold text-xl">Login</span>
            </Button>

            <div className="text-center text-base font-instrumentSans text-[#1d1d1d]">
              <span>Don’t have an account? </span>
              <Link href="/register" className="font-medium text-bs-violet">
                Create Account
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

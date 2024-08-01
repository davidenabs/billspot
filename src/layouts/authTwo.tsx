"use client";
import { appAtom } from "@/store/app";
import goBack from "@/utils/backNavigationUtils";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import { useAtom } from "jotai";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { Fragment, useCallback } from "react";
import { cn, Text } from "rizzui";

interface AuthTwoProps {
  children: React.ReactNode;
  title?: string; // Add title prop
}

function AuthTwo({ children, title = "" }: AuthTwoProps) {
  const searchParams = useSearchParams();
  const type = searchParams?.get("type");
  const [activeType, setActiveType] = React.useState(type);

  const [app, updateApp] = useAtom(appAtom);

  React.useEffect(() => {
    setActiveType(!type ? "citizen" : type);
  }, [type]);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams?.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <Fragment>
      <section className="md:p-20 max-md:p-5 !bg-white">
        <div className="flexgap-48items-center">
          <Image
            src={"/images/billspot-logo.png"}
            width={100}
            height={100}
            alt="Billspot"
          />
        </div>

        <div
          className={cn(
            "h-full py28 md:px-12 xl:px-0 w-full max-md:px5 lg:w-[500px] space-y-[52px] mx-auto md:-mt-10 mt-10",
            !app.showAuthTabs && "flex"
          )}
        >
          <div className="flex md:gap-10 gap-5 border-b pb-4 items-center">
            <button className="flex items-center text-sm" onClick={goBack}>
              <ChevronLeftIcon className="p-0 m-0  w-5 md:w-10 font-extralight" />
              <span>Go Back</span>
            </button>
            <Text className="text-xl md:text-3xl font-bold text-zinc-800">
              {title}
            </Text>
          </div>
          {children}
        </div>
      </section>
    </Fragment>
  );
}

export default AuthTwo;

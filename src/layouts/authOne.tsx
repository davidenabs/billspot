"use client";
import { appAtom } from "@/store/app";
import { useAtom } from "jotai";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { Fragment, useCallback } from "react";
import { cn, Text } from "rizzui";

function AuthOne({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
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
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-bs-violet text-white py-28 px-12 min-h-screen hidden lg:block">
          <div className="flex flex-col justify-between h-full pr-10 lg:pr-32">
            <div className="md:pr-1 lg:pr-40">
              <Text className="text-4xl font-extrabold leading-10">
                Making <span className="text-bs-yellow">bill payments</span>{" "}
                seamless and convenient just for you!
              </Text>
              <Text className="text-base mt-8">
                Manage airtime, data, bill payments, and more with ease.
                Experience convenience at your fingertips.
              </Text>
            </div>

            <div>
              <div className="border-2 border-white font-bold rounded-lg p-4 inline-block">
                Download Billspot App
              </div>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "h-full py-28 md:px-12 xl:px-0 w-full max-md:px-5 lg:w-[500px] space-y-[52px] mx-auto",
            !app.showAuthTabs && "flex"
          )}
        >
          {children}
        </div>
      </section>
    </Fragment>
  );
}

export default AuthOne;

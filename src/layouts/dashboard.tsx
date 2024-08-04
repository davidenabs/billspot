// "use client";
import {
  HelpIcon,
  HomeIcon,
  LegalIcon,
  ReferralIcon,
  SettingsIcon,
  TransactionIcon,
  WalletIcon,
  WarningIcon,
} from "@/icons";
import { appAtom } from "@/store/app";
import { useAtom } from "jotai";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { Fragment, useCallback } from "react";
import { cn, Text } from "rizzui";

function Dashboard({ children }: { children: React.ReactNode }) {
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
      <section className="flex gap-2 !bg-white h-screen">
        <div className="w-[390px] h-full bg-[#F9F7FF] p-12">
          <div className="mb-16">
            <Image
              src={"/images/billspot-logo.png"}
              width={100}
              height={100}
              alt="Billspot"
            />
          </div>
          <div className="my-3 p-5 rounded-xl bg-[#7c4dff]">
            <p className="flex items-center gap-5 text-xl font-bold text-left text-[#eeff41]">
              <HomeIcon className="w-8 h-8" />
              <span>Home</span>
            </p>
          </div>
          <div className="my-3 p-5">
            <p className="flex items-center gap-5 text-lg font-medium text-left text-[#808080]">
              <WalletIcon className="w-8 h-8" />
              <span>Wallet</span>
            </p>
          </div>
          <div className="my-3 p-5">
            <p className="flex items-center gap-5 text-lg font-medium text-left text-[#808080]">
              <TransactionIcon className="w-8 h-8" />
              <span>Transactions</span>
            </p>
          </div>
          <div className="my-3 p-5">
            <p className="flex items-center gap-5 text-lg font-medium text-left text-[#808080]">
              <ReferralIcon className="w-8 h-8" />
              <span>Referral</span>
            </p>
          </div>
          <div className="my-3 p-5">
            <p className="flex items-center gap-5 text-lg font-medium text-left text-[#808080]">
              <SettingsIcon className="w-8 h-8" />
              <span>Settings</span>
            </p>
          </div>
          <div className="my-3 p-5">
            <p className="flex items-center gap-5 text-lg font-medium text-left text-[#808080]">
              <LegalIcon className="w-8 h-8" />
              <span>Legal</span>
            </p>
          </div>
          <div className="my-3 p-5">
            <p className="flex items-center gap-5 text-lg font-medium text-left text-[#808080]">
              <HelpIcon className="w-8 h-8" />
              <span> Help &amp; Support</span>
            </p>
          </div>

          <div className="flex items-center gap-3 mt-16 p-5 rounded-xl bg-[#f9e6ee]">
            <WarningIcon className="w-[39px] h-[39px]" />
            <div className="flex flex-col justify-start items-start w-[187px]  gap-0.5">
              <p className="text-xs font-bold text-left text-[#2c2c2c]">
                Identity Verification
              </p>
              <p className="w-[187px] text-[10px] text-left text-[#808080]">
                Help us verify your account by providing your Bank Verification
                Number
              </p>
            </div>
          </div>
        </div>
        <div
          className={cn(
            ""
            // !app.showAuthTabs && "flex"
          )}
        >
          {children}
        </div>
      </section>
    </Fragment>
  );
}

export default Dashboard;

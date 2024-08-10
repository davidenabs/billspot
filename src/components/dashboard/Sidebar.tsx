"use client";
import {
  HelpIcon,
  HomeIcon,
  LegalIcon,
  LogoutIcon,
  MenuIcon,
  ReferralIcon,
  SettingsIcon,
  TransactionIcon,
  WalletIcon,
  WarningIcon,
} from "@/icons";
import { appAtom } from "@/store/app";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { useAtom } from "jotai";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { Fragment, useCallback, useState } from "react";
import { Avatar, Button, cn, Drawer, Text } from "rizzui";

type Props = {};

const sidebarItems = [
  {
    icon: <HomeIcon className="w-7 h-7 md:w-8 md:h-8" />,
    label: "Home",
    path: "/dashboard",
  },
  {
    icon: <WalletIcon className="w-7 h-7 md:w-8 md:h-8" />,
    label: "Wallet",
    path: "/wallet",
  },
  {
    icon: <TransactionIcon className="w-7 h-7 md:w-8 md:h-8" />,
    label: "Transactions",
    path: "/transactions",
  },
  {
    icon: <ReferralIcon className="w-7 h-7 md:w-8 md:h-8" />,
    label: "Referral",
    path: "/referral",
  },
  {
    icon: <SettingsIcon className="w-7 h-7 md:w-8 md:h-8" />,
    label: "Settings",
    path: "/settings",
  },
  {
    icon: <LegalIcon className="w-7 h-7 md:w-8 md:h-8" />,
    label: "Legal",
    path: "/legal",
  },
  {
    icon: <HelpIcon className="w-7 h-7 md:w-8 md:h-8" />,
    label: "Help & Support",
    path: "/help",
  },
];

const Sidebar = (props: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const [app, updateApp] = useAtom(appAtom);
  const toggleSidebar = () =>
    updateApp({ ...app, isSidebarOpen: !app.isSidebarOpen, placement: "left" });
  return (
    <>
     <div
          className={cn(
            "fixed lg:relative w-[298px] lg:w-[390px] h-full bg-[#F9F7FF] z50 transition-transform transform",
            app.isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          )}
        >
          <div className=" md:p-12">
            <div className="hidden md:block md:mb-16">
              <Image
                src={"/images/billspot-logo.png"}
                width={100}
                height={100}
                alt="Billspot"
              />
            </div>


            <div className="max-md:p-5">
              {sidebarItems.map((item) => (
                <div
                  key={item.label}
                  className={cn(
                    "my-3 p-3 md:p-5 rounded-xl cursor-pointer",
                    pathname === item.path
                      ? "bg-[#F2EDFF] md:bg-[#7c4dff] !text-bs-violet md:!text-bs-yellow"
                      : "text-[#808080] hover:bg-gray-200 "
                  )}
                  onClick={() => router.push(item.path)}
                >
                  <p className="flex items-center gap-5 md:text-lg font-medium text-left">
                    {item.icon}
                    <span>{item.label}</span>
                  </p>
                </div>
              ))}

              <div
                className={cn(
                  "md:hidden my-3 p-3 md:p-5 rounded-xl cursor-pointer text-red-500 hover:bg-gray-200 "
                )}
                onClick={() => {}}
              >
                <p className="flex items-center gap-5 md:text-lg font-medium text-left ">
                  <LogoutIcon />
                  <span>Log out</span>
                </p>
              </div>

              <div className="hidden md:flex items-center gap-3 mt-16 p-5 rounded-xl bg-[#f9e6ee]">
                <WarningIcon className="w-[39px] h-[39px]" />
                <div className="flex flex-col justify-start items-start w-[187px] gap-0.5">
                  <p className="text-xs font-bold text-left text-[#2c2c2c]">
                    Identity Verification
                  </p>
                  <p className="w-[187px] text-[10px] text-left text-[#808080]">
                    Help us verify your account by providing your Bank
                    Verification Number
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      <Drawer isOpen={app.isSidebarOpen} onClose={toggleSidebar}>
        <div
          className={cn(
            "fixed lg:relative w-[298px] lg:w-[390px] h-full bg-[#F9F7FF] z50 transition-transform transform",
            app.isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          )}
        >
          <div className=" md:p-12">
            <div className="hidden md:block md:mb-16">
              <Image
                src={"/images/billspot-logo.png"}
                width={100}
                height={100}
                alt="Billspot"
              />
            </div>

            <div className="w-full h-[207px] px-8 bg-[linear-gradient(114deg,#C2ACFF_0%,#7C4DFF_93.75%)]">
              <Button
                onClick={toggleSidebar}
                className="text-right -mr-[50px] mt-5 bg-white p-2 rounded-full float-end w-10 h-10"
              >
                <XMarkIcon className="text-red-500" />
              </Button>
              <div className="flex flex-col pt-14">
                <div className="flex items-center gap-3">
                  <div className="w-[61px] h-[61px] rounded-full border-2 overflow-hidden">
                    <Avatar
                      name="John Doe"
                      src="https://randomuser.me/api/portraits/women/40.jpg"
                      className="cursor-pointer w-full h-full"
                      size="xl"
                    />
                  </div>

                  <div className="flex flex-col text-white">
                    <Text className="font-bold ">Kizikings Adike</Text>
                    <Text className="font-thin ">@Kizzy3028</Text>
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-3 p-1 px-2 w-full rounded-xl bg-[#f9e6ee]">
                  <div>
                    <WarningIcon className="w-[29px] h-[29px]" />
                  </div>
                  <div className="flex flex-col justify-start items-start gap-0.5">
                    <p className="text-xs font-bold text-left text-[#2c2c2c]">
                      Identity Verification
                    </p>
                    <p className="text-[10px] text-left text-[#808080]">
                      Help us verify your account by providing your Bank
                      Verification Number
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-md:p-5">
              {sidebarItems.map((item) => (
                <div
                  key={item.label}
                  className={cn(
                    "my-3 p-3 md:p-5 rounded-xl cursor-pointer",
                    pathname === item.path
                      ? "bg-[#F2EDFF] md:bg-[#7c4dff] !text-bs-violet md:!text-bs-yellow"
                      : "text-[#808080] hover:bg-gray-200 "
                  )}
                  onClick={() => router.push(item.path)}
                >
                  <p className="flex items-center gap-5 md:text-lg font-medium text-left">
                    {item.icon}
                    <span>{item.label}</span>
                  </p>
                </div>
              ))}

              <div
                className={cn(
                  "md:hidden my-3 p-3 md:p-5 rounded-xl cursor-pointer text-red-500 hover:bg-gray-200 "
                )}
                onClick={() => {}}
              >
                <p className="flex items-center gap-5 md:text-lg font-medium text-left ">
                  <LogoutIcon />
                  <span>Log out</span>
                </p>
              </div>

              <div className="hidden md:flex items-center gap-3 mt-16 p-5 rounded-xl bg-[#f9e6ee]">
                <WarningIcon className="w-[39px] h-[39px]" />
                <div className="flex flex-col justify-start items-start w-[187px] gap-0.5">
                  <p className="text-xs font-bold text-left text-[#2c2c2c]">
                    Identity Verification
                  </p>
                  <p className="w-[187px] text-[10px] text-left text-[#808080]">
                    Help us verify your account by providing your Bank
                    Verification Number
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Sidebar;

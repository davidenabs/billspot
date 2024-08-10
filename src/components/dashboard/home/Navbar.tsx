import { HalfMoonIcon, MenuIcon } from "@/icons";
import { BellIcon, ChevronDownIcon } from "@heroicons/react/16/solid";
import * as React from "react";
import { Avatar, Button, Dropdown, Switch, Text } from "rizzui";
import { useAtom } from "jotai";
import { appAtom } from "../../../store/app";

type Props = {};

type State = {};

const Navbar = () => {
  const [app, updateApp] = useAtom(appAtom);

  const toggleSidebar = () => {
    updateApp({ ...app, isSidebarOpen: !app.isSidebarOpen, placement: "left" });
  };

  return (
    <div className="w-full flex items-center justify-between pt-5 md:pt-20">
      {/* Menu Icon for Mobile */}
      <div className="md:hidden">
        <Button onClick={toggleSidebar} className="bg-white p-2 rounded-2xl">
          <MenuIcon className="text-[#1d1d1d] w-8 h-8" />
        </Button>
      </div>

      {/* Hello Kizito Text */}
      <div className="flex-1 lg:hidden text-right text-base text-[#1d1d1d">
        <span className="font-bold ]">Hello</span>
        <span className=""> Kizito,</span>
        <span className="font-medium"> 👋🏼</span>
      </div>

      {/* Other Navbar Items */}
      <div className="w-full hidden md:flex items-center justify-between pt-">
        <div className="text-[32px] text-left text-[#1d1d1d]">
          <span className="text-[32px] font-bold text-left text-[#1d1d1d]">
            Hello
          </span>
          <span className="text-[32px] text-left text-[#1d1d1d]"> Kizito,</span>
          <span className="text-[32px] font-medium text-left text-[#1d1d1d]">
            👋🏼
          </span>
        </div>
        <div className="flex items-center gap-10 ">
          <div className="flex justify-center items-center  gap-[21px]">
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
              <HalfMoonIcon className="w-[20px] h-[21px]" />
              <p className="flex-grow-0 flex-shrink-0 text-lg font-medium text-left text-[#2c2c2c]">
                Dark mode
              </p>
            </div>
            <Switch switchClassName="bg-gray-300" size="sm" />
          </div>
          <div>
            <BellIcon className="w-5 stroke-slate-300 fill-slate-300" />
          </div>
          <div className="">
            <Dropdown placement="bottom-end">
              <Dropdown.Trigger className={"flex items-center"}>
                <Avatar
                  name="John Doe"
                  src="https://randomuser.me/api/portraits/women/40.jpg"
                  className="cursor-pointer"
                />

                <ChevronDownIcon className="ml-2 w-7 text-gray-300" />
              </Dropdown.Trigger>
              <Dropdown.Menu className="w-56 divide-y text-gray-600">
                <Dropdown.Item className="hover:bg-transparent">
                  <Avatar
                    name="John Doe"
                    src="https://randomuser.me/api/portraits/women/40.jpg"
                  />
                  <span className="ml-2 text-start">
                    <Text className="text-gray-900 font-medium leading-tight">
                      Mary Hoops
                    </Text>
                    <Text>maryhe@demo.io</Text>
                  </span>
                </Dropdown.Item>
                <div className="mt-3 mb-2 pt-2">
                  <Dropdown.Item className="hover:bg-gray-900 hover:text-gray-50">
                    Account Settings
                  </Dropdown.Item>
                  <Dropdown.Item className="hover:bg-gray-900 hover:text-gray-50">
                    Support
                  </Dropdown.Item>
                  <Dropdown.Item className="hover:bg-gray-900 hover:text-gray-50">
                    License
                  </Dropdown.Item>
                </div>
                <div className="mt-2 pt-2">
                  <Dropdown.Item className="hover:bg-gray-900 hover:text-gray-50">
                    Sign Out
                  </Dropdown.Item>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

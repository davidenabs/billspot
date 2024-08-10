import React from "react";
import { CheckIcon, EyeIcon, XMarkIcon } from "@heroicons/react/16/solid";
import { ActionIcon, Button, Modal, Text } from "rizzui";
import { CopyIcon, Money2Icon, SendIcon, Wallet2Icon } from "@/icons";
import Image from "next/image";
import useNavigate from "@/utils/navigation";

type Props = {};

const Wallet = (props: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { navigateTo } = useNavigate();
  return (
    <>
      <Modal
        customSize="743px"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className="m-auto px-7 pt-6 pb-8 bg-white rounded-2xl">
          <div className="mb-7 flex items-center  justify-between">
            <Text></Text>
            <ActionIcon
              size="sm"
              variant="text"
              onClick={() => setIsOpen(false)}
              className="bg-slate-100 rounded-full"
            >
              <XMarkIcon
                className="h-auto w-4 text-gray-500"
                strokeWidth={1.8}
              />
            </ActionIcon>
          </div>
          <div className="flex justify-center relative">
            <div className="flex flex-col">
              <div className="flex flex-col justify-center items-center gap-[3px]">
                <div className="w-[75px] h-[75px] bg-slate-100 rounded-full overflow-hidden ring-4 ring-[#F5F5F5]">
                  <img
                    className="flex-grow-0 flex-shrink-0"
                    src="https://randomuser.me/api/portraits/women/40.jpg"
                  />
                </div>
                <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative">
                  <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-left text-[#1d1d1d]">
                    Kizikings Adike
                  </p>
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#808080]">
                    Billspot Unlimited Account
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="">
                  <div className="w-72 h-[172px] p-6 rounded-[13px] bg-neutral-100">
                    <div className="flex flex-col justify-start items-start  left[92px] top-[237px] gap-0.5">
                      <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#808080]">
                        Account Name
                      </p>
                      <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#2c2c2c]">
                        KIZITO ADIKE
                      </p>
                    </div>

                    <div className="flex flex-col justify-start items-start gap-0.5">
                      <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#808080]">
                        Bank Name
                      </p>
                      <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#2c2c2c]">
                        Paystack Trojan Bank
                      </p>
                    </div>
                    <div className="flex ">
                      <div className="flex flex-col justify-start items-start gap-0.5">
                        <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#808080]">
                          Account Number
                        </p>
                        <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#2c2c2c]">
                          3093313602
                        </p>
                      </div>
                      <div className="w-[79px] h-[29px] rounded-[20px] bg-[#7c4dff] flex justify-center items-center gap-1">
                        {/* Copy */}
                        <p className=" text-sm font-medium text-left text-[#eeff41]">
                          Copy
                        </p>
                        <CopyIcon />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-72 h-[172px] ">
                  <div className="w-72 h-[172px] absolute left-[386.5px] top-[221.5px] rounded-[13px] bg-neutral-100" />
                  <div className="w-[79px] h-[29px]">
                    <div className="w-[79px] h-[29px] absolute left-[568.5px] top-[340.5px] rounded-[20px] bg-[#7c4dff]" />
                    <svg
                      width={15}
                      height={15}
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[15px] h-[15px] absolute left-[616px] top-[347px]"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.29239 6.04239C1.93112 6.40366 1.71875 7.01498 1.71875 8.0625V10.6875C1.71875 11.735 1.93112 12.3463 2.29239 12.7076C2.65366 13.0689 3.26498 13.2812 4.3125 13.2812H6.9375C7.98502 13.2812 8.59634 13.0689 8.95761 12.7076C9.31888 12.3463 9.53125 11.735 9.53125 10.6875V8.0625C9.53125 7.01498 9.31888 6.40366 8.95761 6.04239C8.59634 5.68112 7.98502 5.46875 6.9375 5.46875H4.3125C3.26498 5.46875 2.65366 5.68112 2.29239 6.04239ZM1.62948 5.37948C2.25259 4.75638 3.17252 4.53125 4.3125 4.53125H6.9375C8.07748 4.53125 8.99741 4.75638 9.62052 5.37948C10.2436 6.00259 10.4688 6.92252 10.4688 8.0625V10.6875C10.4688 11.8275 10.2436 12.7474 9.62052 13.3705C8.99741 13.9936 8.07748 14.2188 6.9375 14.2188H4.3125C3.17252 14.2188 2.25259 13.9936 1.62948 13.3705C1.00638 12.7474 0.78125 11.8275 0.78125 10.6875V8.0625C0.78125 6.92252 1.00638 6.00259 1.62948 5.37948Z"
                        fill="#EEFF41"
                      />
                      <path
                        opacity="0.4"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.04239 2.29239C5.68112 2.65366 5.46875 3.26498 5.46875 4.3125V4.53125H6.9375C8.07748 4.53125 8.99741 4.75638 9.62052 5.37948C10.2436 6.00259 10.4688 6.92252 10.4688 8.0625V9.53125H10.6875C11.735 9.53125 12.3463 9.31888 12.7076 8.95761C13.0689 8.59634 13.2812 7.98502 13.2812 6.9375V4.3125C13.2812 3.26498 13.0689 2.65366 12.7076 2.29239C12.3463 1.93112 11.735 1.71875 10.6875 1.71875H8.0625C7.01498 1.71875 6.40366 1.93112 6.04239 2.29239ZM5.37948 1.62948C6.00259 1.00638 6.92252 0.78125 8.0625 0.78125H10.6875C11.8275 0.78125 12.7474 1.00638 13.3705 1.62948C13.9936 2.25259 14.2188 3.17252 14.2188 4.3125V6.9375C14.2188 8.07748 13.9936 8.99741 13.3705 9.62052C12.7474 10.2436 11.8275 10.4688 10.6875 10.4688H10C9.74112 10.4688 9.53125 10.2589 9.53125 10V8.0625C9.53125 7.01498 9.31888 6.40366 8.95761 6.04239C8.59634 5.68112 7.98502 5.46875 6.9375 5.46875H5C4.74112 5.46875 4.53125 5.25888 4.53125 5V4.3125C4.53125 3.17252 4.75638 2.25259 5.37948 1.62948Z"
                        fill="#EEFF41"
                      />
                    </svg>
                    <p className="absolute left-[581px] top-[346px] text-xs font-medium text-left text-[#eeff41]">
                      Copy
                    </p>
                  </div>
                  <div className="flex flex-col justify-start items-start absolute left-[410px] top-[237px] gap-0.5">
                    <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#808080]">
                      Account Name
                    </p>
                    <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#2c2c2c]">
                      KIZITO ADIKE
                    </p>
                  </div>
                  <div className="flex flex-col justify-start items-start absolute left-[410px] top-[285px] gap-0.5">
                    <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#808080]">
                      Bank Name
                    </p>
                    <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#2c2c2c]">
                      WEMA Bank
                    </p>
                  </div>
                  <div className="flex flex-col justify-start items-start absolute left-[410px] top-[333px] gap-0.5">
                    <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#808080]">
                      Account Number
                    </p>
                    <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#2c2c2c]">
                      3093313602
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <div className="hidden md:block">
        <div className="flex flex- items-center gap-10 rounded-3xl bg-[#F5F5F5] border border-[#D5D5D5] w-full h-[171px] p-10">
          <div className="flex flex-col self-center items-start text-black text-sm pr-16">
            <div className="flex items-center gap-2">
              <Text className="text-base">Balance</Text>
              <div>
                <EyeIcon className="w-5" />
              </div>
            </div>

            <div className="mt-3">
              <Text className="font-bold text-2xl md:text-4xl">
                ₦28,590.<span className="text-sm">00</span>
              </Text>
            </div>

            <Text className="text-red-600 text-xs mt-3">
              Show Account Details
            </Text>
          </div>

          <div className="w-px h-full bg-slate-300"></div>

          <div className="flex justify-around gap-2 md:gap-10 items-center text-black font-medium text-sm md:text-base pl-10">
            <Button
              onClick={() => setIsOpen(true)}
              className="w-[147px] h-[50px] md:h-[68px] bg-[#EAEAEA] rounded-lg flex justify-center items-center gap-2 "
            >
              <Money2Icon className="md:w-8 md:h-8 w-5 h-5" />
              <Text>Top up</Text>
            </Button>
            <Button className="w-[147px] h-[50px] md:h-[68px] bg-[#EAEAEA] rounded-lg flex justify-center items-center gap-2 ">
              <SendIcon className="md:w-8 md:h-8 w-5 h-5" />
              <Text>Transfer</Text>
            </Button>
            <Button className="w-[147px] h-[50px] md:h-[68px] bg-[#EAEAEA] rounded-lg flex justify-center items-center gap-2 ">
              <Wallet2Icon className="md:w-8 md:h-8 w-5 h-5" />
              <Text>Request</Text>
            </Button>
          </div>
        </div>
      </div>

      <div className="md:hidden flex flex-col rounded-3xl bg-black w-full h-[217px] p-7 space-y3">
        <div className="flex justify-between items-center text-white text-sm">
          <div className="flex items-center gap-2">
            <Text>Balance</Text>
            <div>
              <EyeIcon className="w-5" />
            </div>
          </div>

          <Text className="text-bs-yellow md:block hidden">
            Show Account Details
          </Text>
          <div className="block md:hidden md:mb-16">
            <Image
              src={"/images/billspot-logo.png"}
              width={46}
              height={23}
              alt="Billspot"
            />
          </div>
        </div>

        <div className="mt-3">
          <Text className="font-bold text-[#D5D5D5] text-2xl md:text-3xl">
            ₦28,590.<span className="text-sm">00</span>
          </Text>
        </div>

        <div className="mt-7 md:mt-5 flex gap-2 md:gap-3 items-center text-white text-sm md:text-base">
          <Button className="w-full h-[50px] md:h-[68px] bg-[#1D1D1D] rounded-lg flex justify-center items-center gap-2 ">
            <SendIcon className="md:w-8 md:h-8 w-5 h-5" />
            <Text>Top up</Text>
          </Button>
          <Button className="w-full h-[50px] md:h-[68px] bg-[#1D1D1D] rounded-lg flex justify-center items-center gap-2 ">
            <SendIcon className="md:w-8 md:h-8 w-5 h-5" />
            <Text>Transfer</Text>
          </Button>
          <Button className="w-full h-[50px] md:h-[68px] bg-[#1D1D1D] rounded-lg flex justify-center items-center gap-2 ">
            <SendIcon className="md:w-8 md:h-8 w-5 h-5" />
            <Text>Request</Text>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Wallet;

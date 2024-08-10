"use client";
import { Button, Text } from "rizzui";
import Table from "@/components/table/table";
import { useMemo } from "react";
import HeaderCell from "@/components/table/table-header-cell";
import Link from "next/link";
import Pagination from "@/components/pagination";

const data = [
  {
    id: "1",
    biller: "/images/mtn.png",
    transactionType: "Airtime",
    amount: "-₦300.00",
    dateTime: "21/07/24 - 7:44 AM",
    recipient: "08108065565",
    status: "Complete",
    fundType: "DEBIT",
  },
  {
    id: "2",
    biller: "/images/uba.png",
    transactionType: "Wallet Deposit",
    amount: "+₦2,000.00",
    dateTime: "21/07/24 - 7:44 AM",
    recipient: "Joshua Okechukwu...",
    status: "Complete",
    fundType: "CREDIT",
  },
  {
    id: "3",
    biller: "/images/glo.png",
    transactionType: "Data",
    amount: "-₦6,000.00",
    dateTime: "21/07/24 - 7:44 AM",
    recipient: "08108065565",
    status: "Failed",
    fundType: "DEBIT",
  },
];

export const GetColumns = () => {
  const commonColumns = [
    {
      title: <HeaderCell title="Biller" />,
      dataIndex: "biller",
      key: "biller",
      render: (value: string) => {
        return (
          <div className="w-[32px] h-[32px] overflow-hidden">
            <img src={value} alt="" className="w-full" />
          </div>
        );
      },
    },
    {
      title: <HeaderCell title="Transaction Type" />,
      dataIndex: "transactionType",
      key: "transactionType",
    },
    {
      title: <HeaderCell title="Amount" />,
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: <HeaderCell title="Date Time" />,
      dataIndex: "dateTime",
      key: "dateTime",
    },
    {
      title: <HeaderCell title="Recipient" />,
      dataIndex: "recipient",
      key: "recipient",
    },
    {
      title: <HeaderCell title="Status" />,
      dataIndex: "status",
      key: "status",
      render: (value: string) => GetStatusBadge(value),
    },
    {
      title: <HeaderCell title="Fund Type" />,
      dataIndex: "fundType",
      key: "fundType",
    },
  ];

  return [...commonColumns];
};

function GetStatusBadge(status: string) {
  switch (status.toLowerCase()) {
    case "complete":
      return <Text className="text-green-500">{status}</Text>;
    case "failed":
      return <Text className="text-red-500">{status}</Text>;
    default:
      return null;
  }
}

type Props = {
  showPagination: boolean;
};

const RecentTransactions = (props: Props) => {
  const columns = useMemo(() => GetColumns(), []);
  return (
    <div>
      <Text className="md:font-bold md:text-[20px] text-gray-500 md:text-black mb-3">
        Recent Transactions
      </Text>
      <div className="bg-[#F5F5F5] w-full min-h-[300px] rounded-[15px] overflow-hidden hidden md:block">
        <Table className={`w-full`} data={data} columns={columns} />
      </div>
      {props.showPagination && (
        <div className="justify-center py-20 hidden md:flex">
          <Pagination totalPages={5} />
        </div>
      )}
      <div className="space-y-10 block md:hidden">
        <div className="w-full bg-white min-h-[78px] rounded-xl text-[#2c2c2c">
          <Text className="text-sm text-left ] border-b p-2 px-4">
            04 Mar 2024, Thursday
          </Text>

          <div className="divide-y">
            <div className="flex items-center justify-between gap-3 p-2 px-4 w-full">
              <div className="flex items-center gap-3">
                <div className="self-center rounded-full w-10 h-10 bg-slate-200">
                  <img src="/images/mtn.png" className="w-full" />
                </div>

                <div className="flex flex-col">
                  <Text className="font-bold text-left">MTN</Text>
                  <Text className="font-normal text-sm text-[#808080]">
                    08:48AM
                  </Text>
                </div>
              </div>

              <div className="">
                <Text className="font-bold text-sm">-₦300.00</Text>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 p-2 px-4 w-full">
              <div className="flex items-center gap-3">
                <div className="self-center rounded-full w-10 h-10 bg-slate-200">
                  <img src="/images/uba.png" className="w-full" />
                </div>

                <div className="flex flex-col">
                  <Text className="font-bold text-left">
                    Joshua Okechukwu Eboniro
                  </Text>
                  <Text className="font-normal text-sm text-[#808080]">
                    08:48AM
                  </Text>
                </div>
              </div>

              <div className="">
                <Text className="font-bold text-green-500 text-sm">
                  +₦2,000.00
                </Text>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-white min-h-[78px] rounded-xl text-[#2c2c2c">
          <Text className="text-sm text-left ] border-b p-2 px-4">
            15 April 2024, Monday
          </Text>

          <div className="divide-y">
            <div className="flex items-center justify-between gap-3 p-2 px-4 w-full">
              <div className="flex items-center gap-3">
                <div className="self-center rounded-full w-10 h-10 bg-slate-200">
                  <img src="/images/glo.png" className="w-full" />
                </div>

                <div className="flex flex-col">
                  <Text className="font-bold text-left">GLO</Text>
                  <Text className="font-normal text-sm text-[#808080]">
                    08:48AM
                  </Text>
                </div>
              </div>

              <div className="">
                <Text className="font-bold text-sm">-₦1,500.00</Text>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-5 text-center text-bs-violet font-medium">
          <Link href={"#"}>View All</Link>
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;

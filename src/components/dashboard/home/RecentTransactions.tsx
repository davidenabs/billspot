"use client";
import { Button, Text } from "rizzui";
import Table from "@/components/table/table";
import { useMemo } from "react";
import HeaderCell from "@/components/table/table-header-cell";

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

type Props = {};

const RecentTransactions = (props: Props) => {
  const columns = useMemo(() => GetColumns(), []);
  return (
    <div>
      <Text className="font-bold text-[20px] mb-3">Recent Transactions</Text>
      <div className="bg-[#F5F5F5] w-full min-h-[300px] rounded-[15px] overflow-hidden">
        <Table className={`w-full`} data={data} columns={columns} />
      </div>
    </div>
  );
};

export default RecentTransactions;

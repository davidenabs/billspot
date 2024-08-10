"use client";
import DownloadApp from "@/components/dashboard/home/cards/DownloadApp";
import Info from "@/components/dashboard/home/cards/Info";
import PayBills from "@/components/dashboard/home/cards/PayBills";
import Wallet from "@/components/dashboard/wallet/cards/Wallet";
import WalletTwo from "@/components/dashboard/wallet/cards/Wallet";
import Navbar from "@/components/dashboard/home/Navbar";
import RecentTransactions from "@/components/dashboard/home/RecentTransactions";
import { Money2Icon, SendIcon, Wallet2Icon } from "@/icons";
import { EyeIcon, WifiIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import { Button, Text } from "rizzui";

export default function DashboardWalletPage() {
  return (
    <>
      <div className="space-y-7">
        <Navbar />

        <Wallet />

        <div className="md:pt-5">
          <RecentTransactions showPagination={true} />
        </div>
      </div>
    </>
  );
}

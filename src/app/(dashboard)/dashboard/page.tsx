"use client";
import DownloadApp from "@/components/dashboard/home/cards/DownloadApp";
import Info from "@/components/dashboard/home/cards/Info";
import PayBills from "@/components/dashboard/home/cards/PayBills";
import Wallet from "@/components/dashboard/home/cards/Wallet";
import Navbar from "@/components/dashboard/home/Navbar";
import RecentTransactions from "@/components/dashboard/home/RecentTransactions";
import { WifiIcon } from "@heroicons/react/16/solid";
import { Button, Text } from "rizzui";

export default function DashboardHomePage() {
  return (
    <>
      <div className="space-y-7">
        <Navbar />

        <div className="grid md:grid-cols-2 gap-3 md:gap-5">
          <Wallet />

          <Info />

          <DownloadApp />
        </div>

        <PayBills />

        <div className="md:pt-10">
          <RecentTransactions />
        </div>
      </div>
    </>
  );
}

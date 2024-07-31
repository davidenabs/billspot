import { BillspotLogo } from "@/icons";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/forms/button";
import Navbar from "@/components/navbar";
import { Text } from "rizzui";
import ServiceCard from "@/components/home/ServiceCard";
import WhyChooseBillspot from "@/components/home/WhyChooseBillspot";
import DownloadBillspot from "@/components/home/DownloadBillspot";
import Faq from "@/components/home/Faq";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import SendBuyShare from "@/components/home/SendBuyShare";

const services = [
  {
    title: "Airtime & Data Purchases",
    description: "Buy airtime and data with just a few clicks",
    imageSrc: "/images/airtime.png",
  },
  {
    title: "Bill Payments",
    description: "Pay utility bills, cable TV, and more effortlessly.",
    imageSrc: "/images/bill.png",
  },
  {
    title: "Convert Airtime to Cash",
    description: "Easily convert your airtime to cash.",
    imageSrc: "/images/convert.png",
  },
  {
    title: "Manage Your Wallet",
    description: "Fund your wallet securely for seamless transactions.",
    imageSrc: "/images/wallet.png",
  },
];

export default function Home() {
  return (
    <div className="">
      <div className="flex flex-col pb-20 font-bold bg-[linear-gradient(114deg,#85FFBD_0%,#FFFB7D_100%)] text-zinc-800 h-[734px] overflow-hidden">
        <Navbar />
        <Hero />
      </div>

      <div className="px-6  md:px-48 space-y-10 pt-10">
        <SendBuyShare />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
            />
          ))}
        </div>

        <div></div>
      </div>

      <DownloadBillspot />
      <WhyChooseBillspot />
      <Faq />
      <Footer />
    </div>
  );
}

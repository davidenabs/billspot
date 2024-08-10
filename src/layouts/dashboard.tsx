"use client";
import Sidebar from "@/components/dashboard/Sidebar";
import { appAtom } from "@/store/app";
import { useAtom } from "jotai";
import React, { Fragment } from "react";
import { cn } from "rizzui";

function Dashboard({ children }: { children: React.ReactNode }) {
  const [app, updateApp] = useAtom(appAtom);

  const toggleSidebar = () =>
    updateApp({ ...app, isSidebarOpen: !app.isSidebarOpen });

  return (
    <Fragment>
      <section className="flex gap-2 !bg-[#fcfcfc] h-screen w-full">
        <Sidebar />

        <div className={cn("w-full max-md:px-5 px-12")}>{children}</div>
      </section>
    </Fragment>
  );
}

export default Dashboard;

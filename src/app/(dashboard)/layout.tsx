"use client";
import { usePathname } from "next/navigation";
import React, { Suspense } from "react";
import NextProgress from "@/components/next-progress";
import { Loader } from "rizzui";
import Dashboard from "@/layouts/dashboard";

export default function MainDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <Suspense
      fallback={
        <div className="">
          <Loader type="pulse" />
        </div>
      }
    >
      <NextProgress />
      <Dashboard>{children}</Dashboard>
    </Suspense>
  );
}

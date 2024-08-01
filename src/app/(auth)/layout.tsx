"use client";
import { usePathname } from "next/navigation";
import AuthOne from "@/layouts/authOne";
import AuthTwo from "@/layouts/authTwo";
import React, { Suspense } from "react";
import NextProgress from "@/components/next-progress";
import { Loader } from "rizzui";

const routeTitles: { [key: string]: string } = {
  "/reset-password": "Reset Password 🔐",
  "/verify-account": "Verify Billspot account",
  "/set-pin": "Setup Transaction Pin 🔐",
};
// 
export default function MainAuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Define your routes for each layout
  const authOneRoutes = ["/login", "/register", "/forgot-password"];
  // const authTwoRoutes = ["/forgot-password", "/reset-password"];

  // Determine the appropriate layout based on the current route
  const Layout = authOneRoutes.includes(pathname) ? AuthOne : AuthTwo;
  const title = routeTitles[pathname] || "Default Title";
  return (
    <Suspense
      fallback={
        <div className="">
          <Loader type="pulse" />
        </div>
      }
    >
      <NextProgress />
      <Layout title={title}>{children}</Layout>
    </Suspense>
  );
}
// Reset Password 🔐

import NotFoundPage from "@/shared/not-found";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | E-Government Portal",
};

export default function NotFound() {
  return <NotFoundPage />;
}

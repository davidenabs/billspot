// import type { Metadata } from "next";
// import "./_styles/globals.css";
// import { bricolageGrotesque, instrumentSans, inter } from "./fonts";
// import cn from "@/utils/class_names";
// import GlobalDrawer from "@/components/drawer";
// import GlobalModal from "@/components/modal";

// export const metadata: Metadata = {
//   title: "E-Government Portal",
//   description: "Access all government services in one place",
// };

// export default function RootLayout({
//   children,
//   modal,
// }: Readonly<{
//   children: React.ReactNode;
//   modal: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={cn(
//           bricolageGrotesque.variable,
//           inter.variable,
//           instrumentSans.variable,
//           "font-instrumentSans"
//         )}
//       >
//         <main className="relative">
//           {children}
//           {modal}
//           <GlobalDrawer />
//           <GlobalModal />
//         </main>
//       </body>
//     </html>
//   );
// }

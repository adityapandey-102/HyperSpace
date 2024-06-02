import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HYPERSPACE",
  description: "We invent, build, and operate next-gen attractions connected to digital lifestyles.",
};

export default function RootLayout({ children }) {
  return (
    <html style={{"width":"100%",height:"100%"}} lang="en">
      <body style={{"width":"100%",height:"100%"}} className={inter.className}>{children}</body>
    </html>
  );
}

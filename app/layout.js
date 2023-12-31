import { Urbanist } from "next/font/google";
import "./global.css";
import AuthProviders from "../providers/AuthProvider";

const font = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Testing Purpose",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <AuthProviders>{children}</AuthProviders>
      </body>
    </html>
  );
}

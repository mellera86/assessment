import "@styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Github User Peeker",
  description: "Peek into github user's profile",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

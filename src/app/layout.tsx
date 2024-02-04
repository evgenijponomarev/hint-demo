import type { Metadata } from "next";

import '@/scss/main.scss';

export const metadata: Metadata = {
  title: "Know what your palm reveals about you!",
  description: "Discover all the secrets your hands hold",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

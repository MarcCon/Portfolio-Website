import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Front-End Entwickler Marc",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {" "}
        <link
          rel="preload"
          as="image"
          href="/StandBildIch.png"
          type="image/png"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

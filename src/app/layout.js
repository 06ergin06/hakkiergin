import "./globals.css";
import { Montserrat } from "next/font/google";

export const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata = {
  title: "İbrahim Hakkı Ergin",
  description: "Who's İbrahim Hakkı Ergin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {children}
        <footer className="center text-[--foreground]">
          Coded by İbrahim Hakkı Ergin
        </footer>
      </body>
    </html>
  );
}

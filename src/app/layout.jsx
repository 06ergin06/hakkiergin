import "./globals.css";
import { Montserrat } from "next/font/google";

export const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata = {
  title: "İbrahim Hakkı Ergin",
  description:
    "İbrahim Hakkı Ergin, a software engineering student who loves programming, front-end development, and open source technologies.",
  keywords: [
    "webtas",
    "İbrahim Hakkı",
    "İbrahim Hakkı Ergin",
    "software engineering",
    "front-end development",
  ],
  authors: [{ name: "İbrahim Hakkı Ergin" }],
  creator: "İbrahim Hakkı Ergin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {children}
        <footer className="center text-[--foreground] underline">
          <a
            href="https://github.com/06ergin06/hakkiergin"
            target="_blank"
            rel="noopener noreferrer"
          >
            The source code of this website
          </a>
        </footer>
      </body>
    </html>
  );
}

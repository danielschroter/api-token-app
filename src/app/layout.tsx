import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "bg-white text-slate-900 dark:text-gray-100 antialiased",
        inter.className
      )}
    >
      <body className="min-h-screen bg-slate-50 dark:bg-slate-900 antialiased">
        <Providers>
          {children}

          {/* @ts-expect-error Server Component */}
          <Navbar />
          {/* Allow for more height on mobile devices  */}
        </Providers>
        <div className="h-40 md:hidden text-white"></div>
      </body>
    </html>
  );
}
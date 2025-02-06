import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import QueryClientProviderLayout from "./provider/QueryClientProviderLayout";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Product task",
  description: "Product task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased
           `}
      >
        <div className="mx-auto w-full bg-background border-border/40 dark:border-border min-[1800px]:max-w-[1536px] min-[1800px]:border-x flex justify-center items-center overflow-hidden relative ">
          <QueryClientProviderLayout>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              <div className="relative w-full">{children}</div>
            </ThemeProvider>
          </QueryClientProviderLayout>
        </div>
      </body>
    </html>
  );
}

import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({ subsets: ["latin"] });
import { dark } from "@clerk/themes";
export const metadata = {
  title: "Explore the Aroma",
  description: "Legacy project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
        appearance={{
          baseTheme: dark,
          variables: {
            colorPrimary: "#bc987e",
          },
          elements: {
            userButtonBox: {
              fontSize: 100,
            }
          }
        }}
      >
      <html lang="en">
        <body className='all'>{children }</body>
      </html>
    </ClerkProvider>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Flex, Theme } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "EMVS",
  description: "Emmanuel MedVet Society",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class">
          <Theme>
            <Flex direction="column">
              <Flex direction="column" className="min-h-dvh">
                <Nav />

                {children}
              </Flex>

              <Footer />
            </Flex>
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}

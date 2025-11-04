import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: "Mihai Iulian Lavric | Front-End Developer",
  description: "Front-End Developer specializing in React, Next.js, TypeScript, and modern web technologies. Creating performant and beautiful web applications.",
  keywords: ["Front-End Developer", "React", "Next.js", "TypeScript", "Tailwind CSS", "Web Developer", "JavaScript", "Portfolio"],
  authors: [{ name: "Mihai Iulian Lavric" }],
  openGraph: {
    title: "Mihai Iulian Lavric | Front-End Developer",
    description: "Front-End Developer specializing in React, Next.js, TypeScript, and modern web technologies.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mihai Iulian Lavric | Front-End Developer",
    description: "Front-End Developer specializing in React, Next.js, TypeScript, and modern web technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <ScrollProgress />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

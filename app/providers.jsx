"use client";

import { ThemeProvider } from "next-themes";
import './i18n'; // Import i18n configuration

export function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" enableSystem="false" defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
}

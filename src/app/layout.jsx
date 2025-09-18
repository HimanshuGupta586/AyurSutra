import "./globals.css";
import { ThemeProvider } from "@/components/themes/theme-provider"

export const metadata = {
  title: "AyurSutra",
  description: "Panchakarma Patient Management and therapy scheduling Software",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}

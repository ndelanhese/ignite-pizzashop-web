import "./globals.css";

import { ThemeProvider } from "@components/theme/themeProvider";
import { Toaster } from "@components/ui/sonner";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
	title: {
		template: "%s | pizza.shop",
		default: "pizza.shop",
	},
};

const RootLayout = ({ children }: { children: ReactNode }) => (
	<html className={inter.variable} lang="pt-BR">
		<body>
			<ThemeProvider
				attribute="class"
				defaultTheme="dark"
				enableSystem
				disableTransitionOnChange
				storageKey="pizza.shop-theme"
			>
				{children}
			</ThemeProvider>
		</body>
		<Toaster />
	</html>
);

export default RootLayout;

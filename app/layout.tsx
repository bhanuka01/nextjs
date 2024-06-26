import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";

import { Image } from "@nextui-org/image";


import { Link } from "@nextui-org/link";
import clsx from "clsx";
import Navibar from "@/components/Navibar";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
	},
};



export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning className="bg-black ">
			<head>
				<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
			</head>
			<body
				className={clsx(
					"min-h-screen  bg-black font-poppins   ",
					fontSans.variable
				)}
			>
				<Image className="absolute blur-lg z-0 "
					width={1900}
					height={900}
					alt="NextUI hero Image"
					src="/1.jpg"
				/>
				<Navibar />

				
				<section className="lg:mx-32 sm:mx-8 md:mx-8 antialiased">
					{children}</section>

			</body>
		</html>
	);
}

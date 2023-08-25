import HomeHeader from "@/components/HomeHeader";
import "./globals.css";
import { Inter } from "next/font/google";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Google Clone by Nextjs 13",
    description: "Google Clone by Nextjs",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {/* Header */}
                <HomeHeader />

                {/* body */}
                <div className="flex flex-col items-center mt-24">
                    <Image
                        width="300"
                        height="100"
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
                    />
                    {/* Search */}
                    <HomeSearch />
                </div>

                {children}
            </body>
        </html>
    );
}

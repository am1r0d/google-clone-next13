import "./../globals.css";
import { Inter } from "next/font/google";
import SearchHeader from "@/components/SearchHeader";

export default function SearchLayout({ children }) {
    return (
        <div>
            <SearchHeader />
            {children}
        </div>
    );
}

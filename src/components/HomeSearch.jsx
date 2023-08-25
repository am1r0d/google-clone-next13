"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
const HomeSearch = () => {
    const router = useRouter();
    const [input, setInput] = useState("");
    const [randomSearchLoading, setRandomSearchLoading] = useState(false);
    //
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        router.push(`/search/web?searchTerm=${input}`);
    };

    const randomSearch = async () => {
        setRandomSearchLoading(true);
        const response = await fetch(
            "https://random-word-api.herokuapp.com/word"
        )
            .then((res) => res.json())
            .then((data) => data[0]);
        if (!response) return;
        router.push(`/search/web?searchTerm=${input}`);
        setRandomSearchLoading(false);
    };
    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="flex w-full mt-5 mx-auto max-w-[40%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
            >
                <AiOutlineSearch className="text-xl text-gray-500 mr-3 flex" />
                <input
                    type="text"
                    className="flex-grow focus:outline-none "
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                />
                <BsFillMicFill className="text-lg" />
            </form>
            <div className="flex mt-8 space-x-4 sm:space-y-0 justify-center sm:flex-row">
                <button
                    onClick={handleSubmit}
                    className="btn bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-1 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-35 h-10 transition-shadow px-2"
                >
                    Google Search
                </button>
                <button
                    disabled={randomSearchLoading}
                    onClick={randomSearch}
                    className="btn bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-1 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-35 h-10 transition-shadow px-2 items-center justify-center disabled:opacity-80"
                >
                    {randomSearchLoading ? (
                        <img
                            src="spinner.svg"
                            alt="loading..."
                            className="h-6 text-center"
                        />
                    ) : (
                        "I Am Feeling Lucky"
                    )}
                </button>
            </div>
        </>
    );
};

export default HomeSearch;

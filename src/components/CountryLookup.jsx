"use client";
import React, { useEffect, useState } from "react";

const CountryLookup = () => {
    const [country, setCountry] = useState("United States");
    useEffect(() => {
        fetch(
            `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
        )
            .then((res) => res.json())
            .then((data) => setCountry(data.country));
        // .then((data) => console.log(data.city));
    }, []);
    return <div>{country}</div>;
};

export default CountryLookup;

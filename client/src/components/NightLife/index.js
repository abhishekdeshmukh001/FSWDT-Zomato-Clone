import React from "react";

import NightLifeCarousel from "./NightLifeCarousel";

const NightLife = () => {
    return (
        <div className="mb-10">
            <h1 className="text-xl my-4 md:my-8 md:text-3xl md:font-semibold pl-3">
                Nightlife Restaurant in Nashik
            </h1>
            <p className="pl-3 font-serif text-gray-500 pb-3">
                Create and browse lists of the finest restaurants
            </p>
            <NightLifeCarousel />
        </div>
    );
};

export default NightLife;

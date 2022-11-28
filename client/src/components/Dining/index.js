import React from "react";

// components
import DiningCarousel from "./DiningCarousel";

const Dining = () => {
    return (
        <div className="mb-10 pt-1 pb-5">
            <h3 className="text-xl my-4 md:my-8 md:text-3xl pl-3 font-semibold">
                Collections
            </h3>
            <p className="pl-3 font-serif text-gray-500 pb-3">
                Explore curated lists of top restaurants, cafes, pubs, and bars in Nashik, based on trends
            </p>
            <DiningCarousel />
        </div>
    );
};

export default Dining;

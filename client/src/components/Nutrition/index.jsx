import React from "react";

// components
import NutritionCard from "./NutritionCard";
import NutritionCarousel from "./NutritionCarousel";
import NutritionHeroCarousel from "./NutritionHeroCarousel";

const Nutrition = () => {
    return (
        <div>
            <NutritionHeroCarousel />
            <div className="my-6">
                <NutritionCarousel />
            </div>
            <div className="flex justify-start flex-wrap">
                <NutritionCard
                    bg="red"
                    image="https://m.media-amazon.com/images/I/51Xg24aFmKL._AC_UL320_.jpg"
                    name="HK Vitals Muscle Builder"
                    desr=" HealthKart HK Vitals Muscle Builder is a blend of ayurvedic herbs like ashwagandha, safed musli and shatavari."
                    cutPrice="699"
                    strongPrice="399"
                    quants="Net Quantity - 60.00 count"
                    rating="4"
                />
                <NutritionCard
                    bg="red"
                    image="https://m.media-amazon.com/images/I/61e22QjP9CL._AC_UL320_.jpg"
                    name="MuscleBlaze Super Gainer"
                    desr=" MuscleBlaze Super Gainer is exquisitely crafted for elite fitness enthusiasts who strive to gain muscle mass & a sturdy physique with a high-calorie formula."
                    cutPrice="1719"
                    strongPrice="899"
                    quants="Net Quantity - 1000.0 gram"
                    rating="3"
                />
                <NutritionCard
                    bg="red"
                    image="https://m.media-amazon.com/images/I/51dQzDFAPWL._AC_UL320_.jpg"
                    name="Oxin Nutrition Carbs"
                    desr="Oxin Nutrition Carbs Unflavoured is carbohydrates releasing supplement and provides instant energy to balance the blood glucose levels."
                    cutPrice="1200"
                    strongPrice="399"
                    quants="Net Quantity - 1 Kilograms"
                    rating="3.3"
                />
                <NutritionCard
                    bg="red"
                    image="https://m.media-amazon.com/images/I/61Ko8UElS-L._AC_UL320_.jpg"
                    name="Biozyme Daily Multivitamin"
                    desr="MuscleBlaze Biozyme Daily Multivitamin is more than just a multivitamin with our proprietary and clinically tested MB EnzymePro."
                    cutPrice="1299"
                    strongPrice="999"
                    quants="Net Quantity - 90.00 count"
                    rating="3.3"
                />
                <NutritionCard
                    bg="red"
                    image="https://m.media-amazon.com/images/I/411zlhqgM5S._SX300_SY300_QL70_FMwebp_.jpg"
                    name="Canada Nutrition Mass Gainer"
                    desr="Oxin Nutrition Carbs Unflavoured is carbohydrates releasing supplement and provides instant energy to balance the blood glucose levels."
                    cutPrice="999"
                    strongPrice="499"
                    quants="Net Quantity - 120 count"
                    rating="4"
                />
                <NutritionCard
                    bg="red"
                    image="https://m.media-amazon.com/images/I/41QrueJ2ZmL._SX300_SY300_QL70_FMwebp_.jpg"
                    name="PROTHLETE HMB 500"
                    desr="PROTHLETE PERFORMANCE NUTRITION HMB 500 may have anti-catabolic, anabolic, and regenerative effects on muscle."
                    cutPrice="1699"
                    strongPrice="1499"
                    quants="Pack of 1"
                    rating="3.2"
                />
                <NutritionCard
                    bg="red"
                    image="https://m.media-amazon.com/images/I/71y2k1iPG5L._AC_UL320_.jpg"
                    name="Nutrix NIOX Extreme Pumps"
                    desr="PROTHLETE PERFORMANCE NUTRITION HMB 500 may have anti-catabolic, anabolic, and regenerative effects on muscle."
                    cutPrice="2499"
                    strongPrice="1890"
                    quants="Pack of 2"
                    rating="4"
                />
                <NutritionCard
                    bg="red"
                    image="https://m.media-amazon.com/images/I/41boxo+nDsL._SY300_SX300_.jpg"
                    name="BigMuscles Nutrition L-Arginine"
                    desr="Arginine is a precursor to nitric oxide. It increases nitric oxide levels, supports enhanced blood flow to your muscles for a more intense, powerful workout, and recovery."
                    cutPrice="659"
                    strongPrice="475"
                    quants="Net Quantity - 1 count"
                    rating="4"
                />
            </div>
        </div>
    );
};

export default Nutrition;

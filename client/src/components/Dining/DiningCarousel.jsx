import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

// components
import PictureCarouselCard from "../PictureCarouselCard";

const DiningCarousel = () => {
    const [dining] = useState([
        {
            image:
                "https://b.zmtcdn.com/data/collections/27d8e8c1fbe4da4c1cc48b4e3fda41c5_1669365755.jpg",
            title: "New in Town",
            places: "12 Places",
        },
        {
            image:
                "https://b.zmtcdn.com/data/collections/8e46a581134a20b56489e22029095060_1669368003.jpg",
            title: "Lit Sunday at Night",
            places: "9 Places",
        },
        {
            image:
                "https://b.zmtcdn.com/data/collections/a9e8377fce9b702add08c5305100f8ec_1669367619.jpg",
            title: "Romantic Dining",
            places: "14 Places",
        },
        {
            image:
                "https://b.zmtcdn.com/data/collections/5876fa92c195cc1b52e15b40c159a860_1669367312.jpg",
            title: "Insta Worthy Places",
            places: "10 Places",
        },
        {
            image:
                "https://b.zmtcdn.com/data/collections/22a58dffe18c5951b87ff005bce00ebe_1668152620.jpg",
            title: "Celebrity Owned Places",
            places: "5 Places",
        },
        {
            image:
                "https://b.zmtcdn.com/data/collections/f6d732dc7432ad6e80a309cce6f0745a_1665640262.jpg",
            title: "Great Buffets",
            places: "11 Places",
        },
    ]);

    const slideConfig = {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 0,
            },
        },
        modules: [Navigation],
        className: "diningSwiper",
        navigation: true,
    };

    return (
        <div className="w-full">
            <Swiper {...slideConfig}>
                {dining.map((item, index) => (
                    <SwiperSlide key={index}>
                        <PictureCarouselCard {...item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default DiningCarousel;

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

// components
import PictureCarouselCard from "../PictureCarouselCard";

const NightLifeCarousel = () => {
    const [dining] = useState([
        {
            image:
                "https://b.zmtcdn.com/data/collections/4ac24b02c823d846cb1a852f421689ca_1665492655.jpg",
            title: "Luxury At Its Best",
            places: "17 Places",
        },
        {
            image:
                "https://b.zmtcdn.com/data/collections/46c67e17aad95211039a6ef9cd6126b0_1665834659.jpg",
            title: "Legends of Nashik",
            places: "14 Places",
        },
        {
            image:
                "https://b.zmtcdn.com/data/collections/8a5d8298d4f218d1ae8923419f1af2fb_1667298875.jpg",
            title: "World Vegan Month",
            places: "12 Places",
        },
        {
            image:
                "https://b.zmtcdn.com/data/collections/ba33fc2f81042f28e8771fe2c8dab175_1665495076.jpg",
            title: "Bring Your Own Booze",
            places: "15 Places",
        },
        {
            image:
                "https://b.zmtcdn.com/data/collections/42e666d436d9a3b90431e6cc4a6b242d_1582106525.jpg",
            title: "Exotic Cocktails",
            places: "14 Places",
        },
        {
            image:
                "https://b.zmtcdn.com/data/collections/d9eea3ef785def3a1d4e19c89bf19b11_1660816040.jpg",
            title: "World On Your Plate",
            places: "12 Places",
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

export default NightLifeCarousel;

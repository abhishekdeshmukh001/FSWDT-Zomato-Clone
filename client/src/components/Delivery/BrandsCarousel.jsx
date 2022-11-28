import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import BrandsCategoryCard from "./BrandsCategoryCard";

const BrandsCarousel = () => {
    const categories = [
        {
            image:
                "https://b.zmtcdn.com/data/brand_creatives/logos/396a89cdb1f7a999717b01aa98da7017_1631990846.png",
            title: "Subway",
        },
        {
            image:
                "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187857.png",
            title: "Burger King",
        },
        {
            image:
                "https://b.zmtcdn.com/data/brand_creatives/logos/22529ff52d41a4aa3b36ac1e7e0c0db3_1605099406.png",
            title: "Haldiram's",
        },
        {
            image:
                "https://b.zmtcdn.com/data/brand_creatives/logos/28650b1e4109f8a6ad34c5fc5cb5b2a7_1602854588.png",
            title: "Starbucks Coffee",
        },
        {
            image: "https://b.zmtcdn.com/data/brand_creatives/logos/84edd5489389f21069c09f0c88ea8abb_1628179220.png",
            title: "Theobroma",
        },
        {
            image:
                "https://b.zmtcdn.com/data/brand_creatives/logos/1356425eff0c9acd8ab6b0ad351759e4_1611253489.png",
            title: "Bikanerval Angan",
        },
        {
            image:
                "https://b.zmtcdn.com/data/brand_creatives/logos/bb30587d1148b6ab628a61945f64bf88_1625164768.png",
            title: "McDonald's",
        },
        {
            image:
                "https://b.zmtcdn.com/data/brand_creatives/logos/b36cc9a495b6320aaba46fa2e3c3c267_1637748355.png",
            title: "Nirulas",
        },
        {
            image:
                "https://b.zmtcdn.com/data/brand_creatives/logos/acc68e452e5e8ea16d56292838cd0056_1659429779.png",
            title: "EatFit",
        },

    ];

    const slideConfig = {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 6,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 6,
                spaceBetween: 50,
            },
        },
        modules: [Navigation],
        className: "mySwiper",
        navigation: true,
    };

    return (
        <>
            <h3 className="text-xl mt-4 md:mt-8 md:text-3xl mb-5">
                Top Brands for you
            </h3>
            <div className="lg:hidden grid grid-cols-3 md:grid-cols-4 gap-3 justify-center">
                {categories.map((food, index) => (
                    <BrandsCategoryCard key={index} {...food} />
                ))}
            </div>
            <div className="hidden lg:block">
                <Swiper {...slideConfig}>
                    {categories.map((food, index) => (
                        <SwiperSlide key={index}>
                            <BrandsCategoryCard {...food} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default BrandsCarousel;

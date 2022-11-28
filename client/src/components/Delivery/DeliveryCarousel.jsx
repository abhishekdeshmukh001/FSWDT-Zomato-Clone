import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import DeliveryCategoryCard from "./DeliveryCategoryCard";

const DeliveryCarousel = () => {
    const categories = [
        {
            image:
                "https://b.zmtcdn.com/data/dish_images/1437bc204cb5c892cb22d78b4347f4651634827140.png",
            title: "Chaat",
        },
        {
            image:
                "https://b.zmtcdn.com/data/o2_assets/bf4bde7b78d517ac8460ea03d4c64a7f1632716550.png",
            title: "Vada",
        },
        {
            image:
                "https://b.zmtcdn.com/data/dish_images/d9766dd91cd75416f4f65cf286ca84331634805483.png",
            title: "Idli",
        },
        {
            image:
                "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
            title: "Dosa",
        },
        {
            image:
                "https://b.zmtcdn.com/data/o2_assets/f9d277eb1668d7abf9235302402b06001632716602.png",
            title: "Kachori",
        },
        {
            image:
                "https://b.zmtcdn.com/data/o2_assets/3d8a2994d01ae58b54d2a6ba8a0f45b81632716549.png",
            title: "Vada Pav",
        },
        {
            image:
                "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
            title: "Pizza",
        },
        {
            image:
                "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
            title: "Rolls",
        },
        {
            image:
                "https://b.zmtcdn.com/data/o2_assets/bc0cc8557a06fcd3aacdd7b241cf9db71632716547.png",
            title: "Samosa",
        },
        {
            image:
                "https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png",
            title: "Sandwich",
        },
        {
            image:
                "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
            title: "Burger",
        },
        {
            image:
                "https://b.zmtcdn.com/data/o2_assets/e6c74944b4d15017b51c07d5a97b34961648972347.png",
            title: "Juice",
        },
        {
            image:
                "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
            title: "Thali",
        },

        {
            image:
                "https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png",
            title: "Paratha",
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
            <h3 className="text-xl mt-4 md:mt-8 md:text-3xl md:font-semibold mb-5">
                Inspiration for yout first order
            </h3>
            <div className="lg:hidden grid grid-cols-3 md:grid-cols-4 gap-3 justify-center">
                {categories.map((food, index) => (
                    <DeliveryCategoryCard key={index} {...food} />
                ))}
            </div>
            <div className="hidden lg:block bg-gray-100 p-3">
                <Swiper {...slideConfig}>
                    {categories.map((food, index) => (
                        <SwiperSlide key={index}>
                            <DeliveryCategoryCard {...food} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default DeliveryCarousel;

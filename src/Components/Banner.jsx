import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import b1 from "../assets/banner/banner1.jpg";
import b2 from "../assets/banner/banner2.jpg";
import b3 from "../assets/banner/banner3.jpg";

const Banner = () => {
  const slides = [
    {
        image: b3,
        title: 'জাতীয় বিশ্ববিদ্যালয়, নার্সিং, ম্যাটস ভর্তি কোচিং',
        subtitle:' অনুপ্রাণিত শিক্ষকের তত্ত্বাবধানে ভর্তি কোচিং ও একাডেমিক সাপোর্ট',
    },
    {
        image: b1,
        title: 'দরিদ্র ও মেধাবী শিক্ষার্থীদের জন্য বিশেষ ছাড়!!',
        subtitle: "কোচিং সহ পরীক্ষা প্রস্তুতি ও এসাইনমেন্টে সহযোগিতা",
    },
    {
        image: b2,
        title: "ভর্তি হবেন কেন?",
        subtitle: "অভিজ্ঞ শিক্ষক, আধুনিক ব্যবস্থা, স্বল্প কোচিং ফি ও সুন্দর পরিবেশ",
    },
  ];

  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000} 
        transitionTime={700}
        showArrows={false}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.image}
              alt={`slide-${index}`}
              className="w-full h-[700px] object-cover"
            />
            <div className="absolute inset-0 bg-black backdrop-blur-sm bg-opacity-10 flex flex-col justify-center items-center text-white text-center px-4">
            <h1 className="text-3xl md:text-5xl mb-5 text-white font-bold drop-shadow-xl">{slide.title}</h1>
              <p className="text-lg font- md:text-xl">{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Banner = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://media.istockphoto.com/id/928080758/photo/person-drawing-tracker-chart-on-notebook.jpg?s=612x612&w=0&k=20&c=0qI7kufPkMVUDnoE6UGc_GbVGxv13SSTFkfockGRrpw=",
      title: "Track Your Daily Habits",
      description:
        "Stay consistent by recording your daily actions — small steps lead to big success!",
      btnText: "Start Tracking",
      link: "/add-habit",
    },
    {
      id: 2,
      image:
        "https://media.istockphoto.com/id/1446490610/photo/using-fitbit-fitness-bracelet-as-pedometer-pulse-measure-sleep-and-workout-control-sport.jpg?s=612x612&w=0&k=20&c=8PXvt25xX51Iz5kNRb9tSKrA4N5AayRikH1ETMnzb3w=",
      title: "Build Healthy Habits",
      description:
        "Improve your lifestyle and wellbeing — start small, grow daily, and stay accountable.",
      btnText: "Explore Features",
      link: "/featured-habits",
    },
    {
      id: 3,
      image:
        "https://media.istockphoto.com/id/1297915587/photo/bullet-journal-habit-tracker-woman-cross-off-day-with-routine-in-her-habit-tracker-selective.jpg?s=612x612&w=0&k=20&c=S3__Co7bbefhnVKREXDlCUVTjQrguVMjpFKGCulz7Go=",
      title: "Join Our Community",
      description:
        "Share your progress, inspire others, and grow together on your self-improvement journey.",
      btnText: "Join Now",
      link: "/public-habit",
    },
  ];

  return (
    <div className="relative max-w-[95%] lg:max-w-7xl mx-auto mt-6 rounded-3xl overflow-hidden shadow-2xl border border-base-200">
      <Swiper
        spaceBetween={0}
        effect={"fade"}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper h-[60vh] md:h-[65vh] lg:h-[70vh]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <img
                className="w-full h-full object-cover"
                src={slide.image}
                alt={slide.title}
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex flex-col justify-center px-6 md:px-20">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 max-w-2xl leading-tight"
                >
                  {slide.title}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="max-w-lg text-sm md:text-lg text-gray-200 mb-8"
                >
                  {slide.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Link
                    to={slide.link}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-indigo-700 text-white font-medium rounded-full text-sm md:text-base transition-transform hover:scale-105 shadow-lg"
                  >
                    {slide.btnText} <ArrowRight size={20} />
                  </Link>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white animate-bounce text-sm md:text-base opacity-80">
        ↓ Scroll to explore
      </div>
    </div>
  );
};

export default Banner;

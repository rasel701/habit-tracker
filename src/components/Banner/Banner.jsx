import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = () => {
  return (
    <div className="max-w-7xl w-[90%] mx-auto rounded-2xl overflow-hidden shadow-lg">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]">
            <img
              className="w-full h-full object-cover"
              src="https://media.istockphoto.com/id/928080758/photo/person-drawing-tracker-chart-on-notebook.jpg?s=612x612&w=0&k=20&c=0qI7kufPkMVUDnoE6UGc_GbVGxv13SSTFkfockGRrpw="
              alt="Track your habits"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3">
                Track Your Daily Habits
              </h2>
              <p className="max-w-xl text-sm sm:text-base md:text-lg">
                Stay consistent by recording your daily actions — small steps
                lead to big success!
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]">
            <img
              className="w-full h-full object-cover"
              src="https://media.istockphoto.com/id/1446490610/photo/using-fitbit-fitness-bracelet-as-pedometer-pulse-measure-sleep-and-workout-control-sport.jpg?s=612x612&w=0&k=20&c=8PXvt25xX51Iz5kNRb9tSKrA4N5AayRikH1ETMnzb3w="
              alt="Build healthy habits"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3">
                Build Healthy Habits
              </h2>
              <p className="max-w-xl text-sm sm:text-base md:text-lg">
                Improve your lifestyle and wellbeing — start small, grow daily,
                and stay accountable.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]">
            <img
              className="w-full h-full object-cover"
              src="https://media.istockphoto.com/id/1297915587/photo/bullet-journal-habit-tracker-woman-cross-off-day-with-routine-in-her-habit-tracker-selective.jpg?s=612x612&w=0&k=20&c=S3__Co7bbefhnVKREXDlCUVTjQrguVMjpFKGCulz7Go="
              alt="Join our habit community"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3">
                Join Our Habit Tracker Community
              </h2>
              <p className="max-w-xl text-sm sm:text-base md:text-lg">
                Share your progress, inspire others, and grow together on your
                self-improvement journey.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

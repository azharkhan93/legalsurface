import {  CenterBox, } from "@/components";
import { ReviewCard } from "../ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { reviews } from "@/constants";


export const SwiperSlides = () => (
  <Swiper
    autoplay={{ delay: 5000 }}
    loop={true}
    modules={[Autoplay, Pagination]}
    // pagination={{ clickable: true }}
    spaceBetween={0}
    slidesPerView={1}
    breakpoints={{
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    }}
    style={{border: "none"}}
  >
    {reviews.map((review, index) => (
      <SwiperSlide key={index}>
        <CenterBox py={"xxl"}>
          <ReviewCard review={review} />
        </CenterBox>
      </SwiperSlide>
    ))}
  </Swiper>
);



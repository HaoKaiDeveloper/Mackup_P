"use client";
import Image from "next/image";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import classes from "./ImgSwiper.module.css";
const ImgSwiper = ({ images }: { images: string[] }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop={true}
      initialSlide={0}
      pagination={{
        clickable: true,
      }}
      navigation={{
        nextEl: `.${classes.next_btn}`,
        prevEl: `.${classes.prev_btn}`,
      }}
      modules={[Pagination, Autoplay, Navigation]}
      className={classes.main}
    >
      <button className={classes.prev_btn}>
        <AiOutlineLeft />
      </button>
      <button className={classes.next_btn}>
        <AiOutlineRight />
      </button>

      {images.map((item, i) => {
        return (
          <SwiperSlide key={i} className={classes.item}>
            <Image
              src={item}
              alt={item}
              sizes="100vw"
              fill={true}
              priority={true}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ImgSwiper;

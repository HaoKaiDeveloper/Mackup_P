"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import type { Product } from "@/types";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import classes from "./ProductSwiper.module.css";

interface SwiperProps {
  products: Product[];
}

const ProductSwiper = ({ products }: SwiperProps) => {
  const router = useRouter();

  return (
    <main className={classes.main}>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        initialSlide={3}
        className={classes.swiper}
      >
        {products.map((item) => {
          return (
            <SwiperSlide
              className={classes.SwiperSlide}
              key={item._id}
              onClick={() => router.push(`/products/${item._id}`)}
            >
              <Image
                src={item.images[0]}
                alt={item.images[0]}
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </main>
  );
};

export default ProductSwiper;

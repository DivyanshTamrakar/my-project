import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode } from "swiper";
import Image from "next/image";
import { Swiper as SwiperType, Navigation, Autoplay } from "swiper";

export default function Caraousel({ data }: { data: string[] }) {
  const swiperRef = useRef<SwiperType>();
  return (
    <div className="flex pl-36 pr-36 max-[768px]:pl-8 max-[768px]:pr-8 flex-row h-auto full-width-container bg-productBg text-white pb-12 px-12">
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        freeMode={true}
        navigation={true}
        modules={[Autoplay, FreeMode, Navigation]}
        className="mySwiper mr-0"
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        autoplay={{
          delay: 2500,
        }}
      >
        {data.map((item: any, index: number) => {
          return (
            <SwiperSlide
              key={index}
              style={{
                backgroundColor: "transparent",
                marginRight: "0",
              }}
            >
              <div className="w-36 h-[52px]">
                <Image
                  src={item}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className=" mr-0 bg-productsBackground"
                  alt="India"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="flex w-16 justify-between mr-8">
        <button
          className="font-light text-5xl"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          &larr;
        </button>
        <button
          className="font-light text-5xl"
          onClick={() => swiperRef.current?.slideNext()}
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}

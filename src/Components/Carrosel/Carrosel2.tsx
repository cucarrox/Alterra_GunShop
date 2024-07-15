// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

//Imagens dos veiculos
import v1 from "@/../Public/Imgs/Veiculos/veiculo1.png";
import v2 from "@/../Public/Imgs/Veiculos/veiculo2.png";
import v3 from "@/../Public/Imgs/Veiculos/veiculo3.png";
import v4 from "@/../Public/Imgs/Veiculos/veiculo4.png";
import v5 from "@/../Public/Imgs/Veiculos/veiculo5.png";
import v6 from "@/../Public/Imgs/Veiculos/veiculo6.png";
import v7 from "@/../Public/Imgs/Veiculos/veiculo7.png";
import v8 from "@/../Public/Imgs/Veiculos/veiculo8.png";
import v9 from "@/../Public/Imgs/Veiculos/veiculo9.png";
import v10 from "@/../Public/Imgs/Veiculos/veiculo10.png";

export function Carrosel2() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img
            className="w-[380px] h-[200px] rounded-xl object-cover"
            src={v1}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[380px] h-[200px] rounded-xl object-cover"
            src={v2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[380px] h-[200px] rounded-xl object-cover"
            src={v3}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[380px] h-[200px] rounded-xl object-cover"
            src={v4}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[380px] h-[200px] rounded-xl object-cover"
            src={v5}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[380px] h-[200px] rounded-xl object-cover"
            src={v6}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[380px] h-[200px] rounded-xl object-cover"
            src={v7}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[380px] h-[200px] rounded-xl object-cover"
            src={v8}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[380px] h-[200px] rounded-xl object-cover"
            src={v9}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[380px] h-[200px] rounded-xl object-cover"
            src={v10}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

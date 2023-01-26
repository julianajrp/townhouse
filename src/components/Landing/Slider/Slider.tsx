import React, { ReactNode } from "react";
import { Swiper, SwiperProps } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SliderStyle.css";
import { Navigation, Pagination, A11y } from "swiper";
interface SliderProps {
  settings: SwiperProps;
  children: ReactNode;
}
const Slider = ({ settings, children }: SliderProps) => {
  return (
    <Swiper modules={[Navigation, Pagination, A11y]} {...settings}>
      {children}
    </Swiper>
  );
};

export default Slider;

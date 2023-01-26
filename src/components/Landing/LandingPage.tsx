import { SwiperProps, SwiperSlide } from "swiper/react";
import Slider from "./Slider/Slider";
import "./LandingStyle.ts";

import HeaderLanding from "./HeaderLanding/HeaderLanding";
import { Background, Faixa } from "./LandingStyle";

const LandingPage = () => {
  const settings: SwiperProps = {
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: true,
    pagination: {
      clickable: true,
    },
    loop: true,
  };
  const condominio1 = require("./assets/condominio1.jpg");
  const condominio2 = require("./assets/condominio2.jpg");
  const condominio3 = require("./assets/condominio3.jpg");
  const condominio4 = require("./assets/condominio4.jpg");

  return (
    <Background>
      <HeaderLanding />
      <Slider settings={settings}>
        <SwiperSlide>
          <Faixa>
            <p>Benefícios e organizações na palma da mão!</p>
          </Faixa>
          <img src={condominio1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Faixa>
            <p>
              Acessível, prático, rápido! <strong>..............</strong>
            </p>
          </Faixa>
          <img src={condominio2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Faixa>
            <p>
              Síndico e morador, contato sem estresse! <strong>.</strong>
            </p>
          </Faixa>
          <img src={condominio3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Faixa>
            <p>
              Faça seu cadastro você também! <strong>...........</strong>
            </p>
          </Faixa>
          <img src={condominio4} alt="" />
        </SwiperSlide>
      </Slider>
    </Background>
  );
};
export default LandingPage;

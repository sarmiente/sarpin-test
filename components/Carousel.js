import React from 'react';
import Image from 'next/image';

import Slider from 'react-slick';
import ButtonOutline from './misc/ButtonOutline';

const Carousel = ({
  carouselContent = [
    {
      title: 'Kit Hikvision Hilook DVR 1080 4ch + 4 Cámaras 1080p + Disco',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/assets/kit_hikvision.svg',
    },
    {
      title: 'Mantenimiento e Instalacion de CCTV',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/assets/kit_dahua.svg',
    },
    {
      title: 'Control de Acceso',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/assets/undraw_programming.svg',
    },
    {
      title: 'Sistema de Deteccion de Incendios',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/assets/icon_whatsapp.svg',
    },
    {
      title: 'Alarmas de Intrusion',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/assets/icon_whatsapp.svg',
    },
  ],
}) => {
  const settings = {
    dots: true,
    autoplay: false,
    speed: 2000,

    customPaging: function (i) {
      return (
        <a href className="/">
          <span className="mx-2 rounded-l-full rounded-r-full h-3 w-3 block cursor-pointer transition-all"></span>
        </a>
      );
    },
  };
  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        className="max-w-screen-xl px-8 xl:px-16 mx-auto"
      >
        {carouselContent.map((carouselContent) => (
          <div
            className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto "
            id="about"
          >
            <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16 ">
              <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
                  {carouselContent.title}
                </h1>
                <p className="text-black-500 mt-4 mb-6">
                  {carouselContent.excerpt}
                </p>
                <ButtonOutline>Saber mas</ButtonOutline>
              </div>
              <div className="flex w-full">
                <div className="w-full">
                  <Image
                    width={350}
                    height={350}
                    src={carouselContent.image}
                    quality={100}
                    layout="responsive"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Carousel;

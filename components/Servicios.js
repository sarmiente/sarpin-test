import React from 'react';
import Image from 'next/image';
import Facebook from '/public/assets/Icon/facebook.svg';
import Iron from '/public/assets/Icon/ironman.svg';

const Servicios = () => {
  return (
    <div className="py-16 bg-white-500 overflow-hidden" id="servicios">
      <div className="container m-auto px-6 space-y-8 md:px-12 lg:px-20">
        <div>
          <span className="block w-max mx-auto py-2 px-4 rounded-full bg-blue-100 text-black-600 text-sm font-semibold mb-5">
            Nuestros Servicios
          </span>
          <h2 className="mt-4 mb-12 text-center text-2xl text-yellow-900 font-bold md:text-4xl">
            Ofrecemos la mejor tecnologia para garantizar una excelente
            <br className="lg:block" hidden /> seguridad y proteccion de tus
            bienes
          </h2>
        </div>
        <div className="mt-16 p-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 md:-mx-8">
          <div className="relative group">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-xl bg-gray-100 shadow-2xl transition duration-300 group-hover:bg-blue-100 group-hover:scale-105 lg:group-hover:scale-110"
            />
            <div className="relative space-y-12 p-8 md:p-12 lg:p-8 xl:p-12">
              <div
                aria-hidden="true"
                className="w-10 h-10 flex justify-center items-center rounded-full bg-black-600"
              >
                <span className="font-bold text-white-300">1</span>
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl text-gray-800 font-medium transition group-hover:text-white">
                  Mantenimiento e Instalacion de CCTV
                </h4>
                <p className="text-gray-600 group-hover:text-black-500 pb-5">
                  Quae accusantium, laudantium recusandae tenetur fugiat non cum
                  doloribus aperiam voluptates nostrum.
                </p>
              </div>
              <Image
                src={Facebook}
                className="w-16 mx-auto"
                width={50}
                height={50}
                alt="burger illustration"
              />
            </div>
          </div>
          <div className="relative group">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-xl bg-gray-100 shadow-2xl transition duration-300 group-hover:bg-blue-500 group-hover:scale-105 lg:group-hover:scale-110"
            />
            <div className="relative space-y-12 p-8 md:p-12 lg:p-8 xl:p-12">
              <div
                aria-hidden="true"
                className="w-10 h-10 flex justify-center items-center rounded-full bg-black-600"
              >
                <span className="font-bold text-white-300">2</span>
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl text-black-600 font-medium transition group-hover:text-white">
                  Control de Acceso y Alarmas de Intrusion
                </h4>
                <p className="text-gray-600 group-hover:text-yellow-200">
                  Quae accusantium, laudantium recusandae tenetur fugiat non cum
                  doloribus aperiam voluptates nostrum.
                </p>
              </div>
              <Image
                src={Iron}
                className="w-16 "
                width={150}
                height={150}
                alt="burger illustration"
              />
            </div>
          </div>
          <div className="relative group">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-xl bg-gray-100 shadow-2xl transition duration-300 group-hover:bg-blue-100 group-hover:scale-105 lg:group-hover:scale-110"
            />
            <div className="relative space-y-12 p-8 md:p-12 lg:p-8 xl:p-12">
              <div
                aria-hidden="true"
                className="w-10 h-10 flex justify-center items-center rounded-full bg-black-500"
              >
                <span className="font-bold text-white-500">3</span>
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl text-gray-800 font-medium transition group-hover:text-white">
                  Sistema de Deteccion de Incendios
                </h4>
                <p className="text-gray-600 group-hover:text-yellow-200">
                  Quae accusantium, laudantium recusandae tenetur fugiat non cum
                  doloribus aperiam voluptates nostrum.
                </p>
              </div>
              <img
                src="images/avatars/trowel.png"
                className="w-16"
                width={512}
                height={512}
                alt="burger illustration"
              />
            </div>
          </div>
          <div className="relative group lg:hidden">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-xl bg-white shadow-2xl transition duration-300 group-hover:bg-yellow-900 group-hover:scale-105 lg:group-hover:scale-110"
            />
            <div className="relative space-y-12 p-8 md:p-12 lg:p-8 xl:p-12">
              <div
                aria-hidden="true"
                className="w-10 h-10 flex justify-center items-center rounded-full bg-yellow-100"
              >
                <span className="font-bold text-yellow-700">4</span>
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl text-gray-800 font-medium transition group-hover:text-white">
                  Fourth feature
                </h4>
                <p className="text-gray-600 group-hover:text-yellow-200">
                  Quae accusantium, laudantium recusandae tenetur fugiat non cum
                  doloribus aperiam voluptates nostrum.
                </p>
              </div>
              <img
                src="images/avatars/package-delivery.png"
                className="w-16"
                width={512}
                height={512}
                alt="burger illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;

import React from 'react';
import Image from 'next/image';
import LogoHeader from '../../public/assets/frontlogo.svg';
import Facebook from '../../public/assets/Icon/facebook.svg';
import Twitter from '../../public/assets/Icon/twitter.svg';
import Instagram from '../../public/assets/Icon/instagram.svg';

const Footer = () => {
  return (
    <div className="mt-48 bg-white-500 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-flow-row m:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-3">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 ">
          <Image src={LogoHeader} />
          <p className=" pt-4 pb-4">
            Somos un grupo de jovenes Ingenieros comprometidos con la seguridad
            tecnologica de los hogares y las empresas colombianas.
          </p>

          <div className="flex gap-4 w-full mt-2 mx-2">
            <div className="bg-white-500 rounded-full  flex p-2 shadow-md">
              <Image src={Facebook} />
            </div>
            <div className="bg-white-500 rounded-full  flex p-2 shadow-md">
              <Image src={Twitter} />
            </div>
            <div className="bg-white-500 rounded-full  flex p-2 shadow-md">
              <Image src={Instagram} />
            </div>
          </div>
        </div>

        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              FAQ{' '}
            </li>

            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              About Us{' '}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Privacy Policy{' '}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Terms of Service{' '}
            </li>
          </ul>
        </div>

        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Affiliate{' '}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Become Partner{' '}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Become Partner{' '}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Become Partner{' '}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

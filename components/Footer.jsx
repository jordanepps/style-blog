import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className=" flex flex-col items-center mx-auto">
      <p className="font-body">2022 Style Blog All Rights Reserved</p>
      <p className="flex mt-2 mb-4 text-2xl gap-2">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;

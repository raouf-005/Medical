import React from "react";
import backgroudn from "./../../assets/background.svg";
export default function TitleContainer() {
  return (
    <div
      className="flex flex-col justify-between items-center  gap-12 py-14 pb-20  font-bold   bg-cover bg-opacity-75"
      style={{ backgroundImage: `url(${backgroudn})` }}
    >
      <h1 className=" text-8xl text-[#00069C]">Notre service</h1>
      <p className=" text-6xl text-white text-center  max-w-[56rem]    tracking-wide leading-[70px]">
        Nous offrons une plateforme complète qui facilite l'échange de vos
        analyses médicales entre les laboratoires, les médecins{" "}
        <span className="text-[#00069C]">et vous-même.</span>
      </p>
    </div>
  );
}

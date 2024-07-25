import { Image } from "@nextui-org/react";
import React from "react";
import TitleImg from "./../../assets/titleImg.svg";

export default function TitleContainer() {
  return (
    <div className="flex flex-row justify-between items-center  bg-[#00069C]">
      <div className="flex flex-1 justify-end items-center">
        <p className="bg-gradient-to-t   to-[#00CEC8]  from-[#00FF47] bg-clip-text text-transparent text-center text-5xl max-w-lg     leading-[53px] font-bold ">
          Grâce à Analyse vous pouvez consulter vos résultats d'analyses
          rapidement et facilement, en tout lieu et à toute heure.
        </p>
      </div>
      <Image src={TitleImg} alt="landing" width={1100} className=" rounded-none" />
    </div>
  );
}

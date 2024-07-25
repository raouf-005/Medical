import { Button, Image } from "@nextui-org/react";
import React from "react";
import expirement from "./../../assets/experiment.svg";



export default function Navbar() {

    return(
            <div className=" flex flex-row justify-between px-12 items-center bg-[#00F0FF] py-3  ">
                <div className=" flex flex-row gap-8  items-center justify-center">
                    <Image src={expirement} alt="logo" className=" "  />
                    <h1 className="text-6xl font-bold  bg-gradient-to-b to-[#00069C]/80 via-white from-white/45 bg-clip-text text-transparent">Analyse</h1>
                </div>
                    <div className="flex flex-row gap-6 ">
                        <Button size="lg"  className="bg-[#00FF47] text-3xl font-bold text-white rounded-3xl shadow-lg  h-14 shadow-slate-600">Login</Button>
                        <Button  size="lg" className="bg-[#00FF47] text-3xl font-bold text-white rounded-3xl shadow-lg h-14 shadow-slate-600">Register</Button>
                    </div>

            </div>
    )


}
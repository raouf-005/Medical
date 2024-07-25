import React from "react";
import Login from "../components/logincomponent/Login";
import Register from "../components/logincomponent/Register";
import Navbar from "../components/landingcomponent/Navbar";
import loginBg from "../assets/loginBg.svg";

export default function Authentficate({children}) {
  return (
    <>
      <Navbar />

      <div
        className=" bg-cover bg-opacity-75 h-screen  flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${loginBg})` }}
      >
        <div className=" flex flex-col justify-center gap-12 items-center">
          <h1 className=" text-white text-7xl text-bold">Remplir le formulaire</h1>
         {children}
        </div>
      </div>
    </>
  );
}

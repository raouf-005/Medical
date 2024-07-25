import React from 'react'
import { Button, Input } from "@nextui-org/react";

const style ={
    label: "text-lg ",
    input:[ "text-lg  "],
 
    
}


export default function Login() {
    return (
        <div className=" border-[#00FF47] rounded-3xl border-4 flex flex-col bg-white p-12 px-20 gap-6">
    
        <Input
          label="nom d’utilisateur ou email"
          labelPlacement="outside"
          type="email"
          placeholder="Enter your email"
          classNames={style}
          size="lg"
        />
        <Input
          label="mot de pass"
          labelPlacement="outside"
          type="password"
          placeholder="Enter your password"
          classNames={style}
          size="lg"
        />


        <div className=" flex justify-center items-center">
  
        <Button
          size="lg"
          className="bg-[#00069C] text-3xl font-bold text-white rounded-3xl text-center shadow-lg h-14 shadow-slate-600  "
  
        >
          Login
        </Button>
  
        </div>
      </div>
    )
}
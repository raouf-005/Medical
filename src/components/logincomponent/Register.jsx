import { Button, Input } from "@nextui-org/react";
import React from "react";
import { Checkbox, CheckboxGroup } from "@nextui-org/react";

const style = {
  label: "text-lg  ",
  input: ["text-lg  "],
};

export default function Register() {
  return (
    <div className=" border-[#00FF47] rounded-3xl border-4 flex flex-col  bg-white p-12 px-20 gap-6">
      <Input
        label="nom d’utilisateur"
        labelPlacement="outside"
        type="text"
        placeholder="Enter your username"
        classNames={style}
        className=""
        size="lg"
      />
      <Input
        label="email"
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
      <Input
        label="confirmer le mot de pass"
        labelPlacement="outside"
        type="password"
        placeholder="Confirm your password"
        classNames={style}
        size="lg"
      />

      <CheckboxGroup
        label="que etes vous"
        orientation="horizontal"
        defaultValue={["medcin", "laboratoire"]}
      >
        <Checkbox className="" value="laboratoire">
          un laboratoire{" "}
        </Checkbox>
        <Checkbox value="medcin">un medcin</Checkbox>
        <Checkbox value="patient">un patient </Checkbox>
      </CheckboxGroup>
      <div className=" flex justify-center items-center">
        <Button
          size="lg"
          className="bg-[#00069C] text-3xl font-bold text-white rounded-3xl text-center shadow-lg h-14 shadow-slate-600  "
        >
          Register
        </Button>
      </div>
    </div>
  );
}

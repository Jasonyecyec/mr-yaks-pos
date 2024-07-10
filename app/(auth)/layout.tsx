import React, { ReactNode } from "react";
import Login from "./login/page";
import Register from "./register/page";
import { redirect, useParams } from "next/navigation";

type Props = {
  children: ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <div className=" min-h-screen  flex justify-center items-center space-x-5">
      <div className="border-black border h-[500px]">
        <img className="bg-red-200" />
        <div className="bg-red-300 h-full">image</div>
      </div>

      <div className="border rounded p-5 ">{children}</div>
    </div>
  );
};

export default AuthLayout;

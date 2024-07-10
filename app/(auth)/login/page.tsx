import CustomButton from "@/app/components/custom_button";
import { Input, Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="space-y-3 w-[20rem]">
      <Input type="email" label="Email" size="sm" />
      <Input type="text" label="Password" size="sm" />
      <Button className="w-full font-bold bg-blue-500 text-white" radius="sm">
        Login
      </Button>

      <button>
        {" "}
        <Link href={"/register"} className="text-center">
          Create an account
        </Link>
      </button>
    </div>
  );
};

export default Login;

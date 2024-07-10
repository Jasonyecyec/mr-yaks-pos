import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <div>
      register
      <Link href={"/login"}>Already have an account</Link>
    </div>
  );
};

export default Register;

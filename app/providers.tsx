import { NextUIProvider } from "@nextui-org/react";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Providers = ({ children }: Props) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default Providers;

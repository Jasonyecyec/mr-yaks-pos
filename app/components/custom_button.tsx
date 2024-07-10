import React from "react";

type Props = {
  content: string;
};

const CustomButton = ({ content }: Props) => {
  return <div>{content}</div>;
};

export default CustomButton;

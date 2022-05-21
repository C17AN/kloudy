import React from "react";

type TitleProps = {
  text: string;
  hasDivider: boolean;
};

const Title = ({ text, hasDivider = true }: TitleProps) => {
  return (
    <>
      <h1 className="text-2xl font-bold">{text}</h1>
      {hasDivider && <hr className="w-full h-2 mt-3" />}
    </>
  );
};

export default Title;

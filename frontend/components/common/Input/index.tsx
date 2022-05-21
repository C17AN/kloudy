import React from "react";

type Props = {};

const Input = (props: Props) => {
  return (
    <input
      type="text"
      name="price"
      id="price"
      className="focus:outline-white sm:text-sm border-gray-600 rounded-md py-1 px-3"
      placeholder="라벨로 리소스 검색하기"
    />
  );
};

export default Input;

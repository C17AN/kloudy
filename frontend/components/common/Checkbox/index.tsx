import classNames from "classnames";
import React, { useState } from "react";

type CheckboxProps = {};

const Checkbox = ({}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex justify-center">
      <input
        className="form-check-input appearance-none h-6 w-6 border border-gray-300 rounded-lg bg-white checked:bg-blue-400 checked:border-blue-600 focus:outline-none transition duration-100 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        type="checkbox"
        value=""
        id="flexCheckDefault"
      />
    </div>
  );
};

export default Checkbox;

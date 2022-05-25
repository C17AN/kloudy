import React from "react";
import cx from "classnames";
import { ViewGridAddIcon } from "@heroicons/react/outline";

type SidebarItemProps = {
  text: string;
  isSelected: boolean;
  onClick: () => void;
};

const SidebarItem = ({
  text,
  isSelected,
  onClick
}: SidebarItemProps) => {
  return (
    <li
      className={cx(
        "flex items-center bg-white rounded-md py-2 px-2 hover:bg-sky-100 cursor-pointer transition-colors text-gray-600",
        { "bg-sky-100": isSelected }
      )}
      onClick={onClick}
    >
      <ViewGridAddIcon className="w-5 h-5 mr-2" />
      <span className="text-sm">{text}</span>
    </li>
  );
};

export default SidebarItem;

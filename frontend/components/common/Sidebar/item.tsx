import React from "react";
import { ViewGridAddIcon } from "@heroicons/react/outline";

type SidebarItemProps = {
  text: string;
};

const SidebarItem = ({ text }: SidebarItemProps) => {
  return (
    <li className="flex items-center bg-white rounded-md py-2 px-2 hover:bg-sky-100 cursor-pointer transition-colors text-gray-600">
      <ViewGridAddIcon className="w-5 h-5 mr-2" />
      <span className="text-sm">{text}</span>
    </li>
  );
};

export default SidebarItem;

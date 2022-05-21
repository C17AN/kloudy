import React from "react";
import Image from "next/image";
import SidebarItem from "./item";
import Select from "../Select";
import SidebarItemContainer from "./SidebarItemContainer";

type SidebarProps = {};

const Sidebar = ({}: SidebarProps) => {
  return (
    <aside className="w-64 h-full mr-10 py-4 px-6 rounded-xl bg-primary shadow-2xl">
      <div className="flex items-center bg-white rounded-md py-2 px-4">
        <Image src="/icons/k8s.svg" width="48" height="48" />
        <div className="flex flex-col ml-2">
          <h2 className="text-xl text-gray-600 font-semibold">KUI</h2>
          <p className="text-xs text-gray-300">GUI For K8s</p>
        </div>
      </div>
      <SidebarItemContainer text="클러스터 목록">
        <Select />
      </SidebarItemContainer>
      <SidebarItemContainer text="네임스페이스 목록">
        <ul className="space-y-4">
          <SidebarItem text="Develop" />
          <SidebarItem text="네임스페이스 1" />
          <SidebarItem text="네임스페이스 1" />
          <SidebarItem text="네임스페이스 1" />
        </ul>
      </SidebarItemContainer>
    </aside>
  );
};

export default Sidebar;

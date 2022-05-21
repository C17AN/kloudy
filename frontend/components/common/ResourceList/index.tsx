import React from "react";
import Node from "./Item/Node";
import { TemplateIcon, ViewListIcon } from "@heroicons/react/outline";
import Input from "../Input";

type ResourceContainerProps = {
  resourceName: string;
  items: any[];
  displayType?: "ALBUM" | "LIST";
};

const ResourceContainer = ({
  resourceName,
  items,
  displayType = "LIST",
}: ResourceContainerProps) => {
  return (
    <div className="flex-1 rounded-md border-[1px] py-4 px-6 mt-2 border-gray-200 h-full w-full">
      <section className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <h3 className="text-2xl font-semibold mr-4">{resourceName} 목록</h3>
          <h4 className="text-sm text-gray-400">새 {resourceName} 생성</h4>
        </div>
        <section className="flex gap-2">
          <TemplateIcon className="w-5 h-5 text-gray-400" />
          <ViewListIcon className="w-5 h-5 text-gray-400" />
        </section>
      </section>
      <section className="flex justify-between">
        <Input />
        <span className="text-sm">생성일자 오래된 순</span>
      </section>
      <ul className="flex flex-col gap-4">
        {items.map((item) => (
          <Node name={item.name} key={item.name} status="RUNNING" />
        ))}
      </ul>
    </div>
  );
};

export default ResourceContainer;

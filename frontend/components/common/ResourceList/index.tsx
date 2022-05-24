import React, { useState } from "react";
import Node from "./Item/Node";
import {
  TemplateIcon,
  ViewListIcon
} from "@heroicons/react/outline";
import Input from "../Input";
import ResouceCreateModal from "./ResouceCreateModal";

type ResourceContainerProps = {
  resourceName: string;
  items: any[];
  displayType?: "ALBUM" | "LIST";
};

const ResourceList = ({
  resourceName,
  items,
  displayType = "LIST"
}: ResourceContainerProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openResourceCreateModal = () => {
    setIsModalOpen(isOpen => !isOpen);
  };

  return (
    <div className="flex-1 rounded-md border-[1px] py-4 px-6 mt-2 border-gray-200 h-full w-full">
      <section className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <h3 className="text-2xl font-semibold mr-4">
            {resourceName} 목록
          </h3>
          <button
            className="text-xs text-gray-400 rounded-md py-2 px-4 bg-zinc-100 cursor-pointer hover:bg-slate-200 hover:text-coolGray-600 transition-colors"
            onClick={openResourceCreateModal}
          >
            새 {resourceName} 생성
          </button>
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
        {items.map(item => (
          <Node
            name={item.name}
            key={item.name}
            status="RUNNING"
          />
        ))}
      </ul>
      {isModalOpen && (
        <ResouceCreateModal
          resourceName={resourceName}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default ResourceList;

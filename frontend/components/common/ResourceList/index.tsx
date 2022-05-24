import React, { useState } from "react";
import Node from "./Item/Node";
import {
  TemplateIcon,
  ViewListIcon
} from "@heroicons/react/outline";
import Input from "../Input";
import ResouceCreateModal from "./ResouceCreateModal";
import cx from "classnames";
import { motion } from "framer-motion";

type ResourceContainerProps = {
  resourceName: string;
  items: any[];
};

type itemDisplayType = "ALBUM" | "LIST";

const ResourceList = ({
  resourceName,
  items
}: ResourceContainerProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemDisplayOption, setItemDisplayOption] =
    useState<itemDisplayType>("LIST");

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
          <TemplateIcon
            className={cx(
              `w-7 h-7 text-gray-400 hover:bg-slate-300 hover:text-white rounded-md p-1 transition-colors cursor-pointer`,
              {
                "bg-slate-400":
                  itemDisplayOption === "ALBUM",
                "text-white": itemDisplayOption === "ALBUM"
              }
            )}
            onClick={() => {
              setItemDisplayOption("ALBUM");
            }}
          />
          <ViewListIcon
            className={cx(
              "w-7 h-7 text-gray-400 hover:bg-slate-300 hover:text-white rounded-md p-1 transition-colors cursor-pointer",
              {
                "bg-slate-400":
                  itemDisplayOption === "LIST",
                "text-white": itemDisplayOption === "LIST"
              }
            )}
            onClick={() => {
              setItemDisplayOption("LIST");
            }}
          />
        </section>
      </section>
      <section className="flex justify-between">
        <Input />
        <span className="text-sm">생성일자 오래된 순</span>
      </section>
      <motion.ul
        layout
        className={cx("flex-col gap-4", {
          flex: itemDisplayOption === "LIST",
          grid: itemDisplayOption === "ALBUM",
          "grid-cols-4": itemDisplayOption === "ALBUM"
        })}
      >
        {items.map(item => (
          <Node
            name={item.name}
            key={item.name}
            status="RUNNING"
          />
        ))}
      </motion.ul>
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

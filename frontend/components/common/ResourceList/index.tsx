import React, { useState } from "react";
import cx from "classnames";
import ResouceCreateModal from "./ResouceCreateModal";
import ResouceDetailModal from "./ResourceDetailModal";
import NodeList from "./Content/Node/List";
import NamespaceList from "./Content/Namespace/List/List";
import getLocaleResourceName from "utils/k8s/getLocaleResourceName";
import { resourceNameType } from "types/k8s/resourceName";
import { motion } from "framer-motion";
import {
  TemplateIcon,
  ViewListIcon
} from "@heroicons/react/outline";

type ResourceContainerProps = {
  resourceName: resourceNameType;
  items: any[];
};

type itemDisplayType = "ALBUM" | "LIST";

const ResourceList = ({
  resourceName,
  items
}: ResourceContainerProps) => {
  const [isCreateModalOpen, setIsCreateModalOpen] =
    useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] =
    useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] =
    useState(false);
  const [itemDisplayOption, setItemDisplayOption] =
    useState<itemDisplayType>("LIST");

  const openResourceCreateModal = () => {
    setIsCreateModalOpen(isOpen => !isOpen);
  };

  const openResourceDeleteModal = () => {
    setIsCreateModalOpen(isOpen => !isOpen);
  };

  const openResourceDetailModal = () => {
    setIsDetailModalOpen(isOpen => !isOpen);
  };

  return (
    <div className="flex-1 rounded-md border-[1px] py-4 px-6 pb-24 border-gray-200 h-full w-full overflow-y-hidden">
      <section className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <h3 className="text-2xl font-semibold mr-4">
            {getLocaleResourceName(resourceName)} 목록
          </h3>
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
      <section className="flex justify-between items-center mb-4">
        <span className="text-sm">생성일자 오래된 순</span>
        <section className="flex space-x-4">
          <button
            className="text-xs text-gray-400 rounded-md py-2 px-4 bg-zinc-100 cursor-pointer hover:bg-slate-200 hover:text-coolGray-600 transition-colors"
            onClick={openResourceCreateModal}
          >
            {`새 ${getLocaleResourceName(
              resourceName
            )} 생성`}
          </button>
          <button
            className="text-xs text-white rounded-md py-2 px-4 bg-red-300 cursor-pointer hover:bg-red-400 hover:text-gray-50 transition-colors"
            onClick={openResourceDeleteModal}
          >
            {`선택한 ${getLocaleResourceName(
              resourceName
            )} 삭제`}
          </button>
        </section>
      </section>
      <motion.ul
        layout
        className={cx(
          "flex flex-col gap-4 flex-1 py-4 px-2 overflow-y-auto",
          {
            flex: itemDisplayOption === "LIST",
            grid: itemDisplayOption === "ALBUM",
            "h-full": itemDisplayOption === "LIST",
            "grid-cols-4": itemDisplayOption === "ALBUM"
          }
        )}
      >
        {resourceName === "node" && (
          <NodeList
            items={items}
            openResourceDetailModal={
              openResourceDetailModal
            }
          />
        )}
        {resourceName === "namespace" && (
          <NamespaceList
            items={items}
            onClick={openResourceDetailModal}
          />
        )}
      </motion.ul>
      {isCreateModalOpen && (
        <ResouceCreateModal
          resourceName={resourceName}
          onClose={() => setIsCreateModalOpen(false)}
        />
      )}
      {isDetailModalOpen && (
        <ResouceDetailModal
          resourceName={resourceName}
          onClose={() => setIsDetailModalOpen(false)}
        />
      )}
    </div>
  );
};

export default ResourceList;

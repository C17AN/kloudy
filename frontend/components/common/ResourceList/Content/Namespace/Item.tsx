import cx from "classnames";
import Checkbox from "components/common/Checkbox";
import React from "react";
import { NodeCondition } from "types/k8s/node/condition";

type NamespaceProps = {
  name: string;
  createdAt: string;
  onClick: () => void;
};

const NamespaceItem = ({
  name,
  createdAt,
  onClick
}: NamespaceProps) => {
  return (
    <li
      className={
        "flex items-center pr-4 bg-gray-50 hover:bg-opacity-70 hover:bg-slate-200 rounded-md hover:scale-[1.01] transition-all shadow"
      }
    >
      <section
        className="flex-1 m-4 cursor-pointer"
        onClick={onClick}
      >
        <span className="text-lg font-semibold">
          {name}
        </span>
        <div className="text-sm flex items-center mb-2">
          <div className="flex gap-2 items-center"></div>
        </div>
        <span className="text-sm">
          생성일 : {new Date(createdAt).toLocaleString()}
        </span>
      </section>
      <Checkbox />
    </li>
  );
};

export default NamespaceItem;

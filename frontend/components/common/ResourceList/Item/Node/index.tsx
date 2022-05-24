import cx from "classnames";
import React from "react";
import { NodeCondition } from "types/k8s/node/condition";

type NodeProps = {
  name: string;
  // 노드의 기동 상태를 True / False로 할까, 아니면 스트링으로 "READY" 처럼 할까?
  // 일단은 isReady 처럼 불리언으로 가져가자.
  isReady: string | boolean;
  createdAt: string;
  conditions: NodeCondition[];
  onClick: () => void;
};

const Node = ({
  name,
  isReady,
  createdAt,
  onClick
}: NodeProps) => {
  const readiness = isReady ? "준비됨" : "준비되지 않음";

  return (
    <li
      className="flex flex-col bg-slate-100 hover:bg-slate-200 rounded-md p-4 hover:scale-[1.01] transition-all cursor-pointer"
      onClick={onClick}
    >
      <span className="text-lg font-semibold">{name}</span>
      <div className="text-sm flex items-center mb-2">
        <div className="flex gap-2 items-center">
          <p
            className={cx("w-3 h-3 rounded-md", {
              "bg-green-300": isReady,
              "bg-red-300": !isReady
            })}
          />
          <span className="text-gray-700">{readiness}</span>
        </div>
      </div>
      <span className="text-sm">생성일 : {createdAt}</span>
    </li>
  );
};

export default Node;

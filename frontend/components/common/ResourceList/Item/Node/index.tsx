import React from "react";

type NodeProps = {
  name: string;
  status: string;
};

const Node = ({ name }: NodeProps) => {
  return (
    <div className="flex flex-col bg-slate-100 rounded-md p-4 hover:scale-[1.01] transition-transform cursor-pointer">
      <span>{name}</span>
      <span className="text-sm">상태 :</span>
      <span className="text-sm">외부 아이피 :</span>
      <span className="text-sm">내부 아이피 :</span>
      <span className="text-sm">CPU :</span>
      <span className="text-sm">메모리 :</span>
    </div>
  );
};

export default Node;

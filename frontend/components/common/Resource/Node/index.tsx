import React from "react";

type NodeProps = {
  name: string;
  status: string;
};

const Node = ({ name }: NodeProps) => {
  return (
    <div className="bg-slate-100 rounded-md p-4">
      <span>{name}</span>
      <span>상태 :</span>
    </div>
  );
};

export default Node;

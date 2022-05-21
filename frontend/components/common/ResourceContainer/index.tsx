import React from "react";
import Node from "../Resource/Node";

type ResourceContainerProps = {
  resourceName: string;
  items: any[];
};

const ResourceContainer = ({ resourceName, items }: ResourceContainerProps) => {
  return (
    <div className="rounded-md border-[1px] py-4 px-6 border-gray-300 h-full w-full">
      <h3 className="text-2xl font-semibold mb-4">{resourceName}</h3>
      <ul className="flex flex-col">
        {items.map((item) => (
          <Node name={item.name} key={item.name} status="RUNNING" />
        ))}
      </ul>
    </div>
  );
};

export default ResourceContainer;

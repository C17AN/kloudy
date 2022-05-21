import React from "react";
import Node from "./Item/Node";

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
      <section>
        <h3 className="text-2xl font-semibold mb-4">{resourceName}</h3>
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

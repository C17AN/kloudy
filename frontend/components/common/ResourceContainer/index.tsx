import React from "react";

type ResourceContainerProps = {
  resourceName: string;
};

const ResourceContainer = ({ resourceName }: ResourceContainerProps) => {
  return (
    <div className="rounded-md border-[1px] py-4 px-6 border-gray-300 h-full w-full">
      <h3 className="text-2xl font-semibold">{resourceName}</h3>
      <section></section>
    </div>
  );
};

export default ResourceContainer;

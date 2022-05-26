import ResourceList from "components/common/ResourceList";
import React, { useContext } from "react";
import { getNodeList } from "api/k8s/node";
import { useQuery } from "react-query";
import { resourceNameType } from "types/k8s/resourceName";

type NodeListProps = {
  resourceName: resourceNameType;
};

const NodeList = ({ resourceName }: NodeListProps) => {
  const { data, isLoading, error } = useQuery(
    "node",
    getNodeList
  );

  return (
    <ResourceList
      resourceName={resourceName}
      items={data}
    />
  );
};
export default NodeList;

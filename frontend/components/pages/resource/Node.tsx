import { getNodeList } from "api/k8s/node";
import ResourceList from "components/common/ResourceList";
import React from "react";
import { useQuery } from "react-query";

type Props = {};

const NodeList = () => {
  const { data, isLoading, error } = useQuery(
    "node",
    getNodeList
  );

  return (
    <ResourceList resourceName={"노드"} items={data} />
  );
};

export default NodeList;

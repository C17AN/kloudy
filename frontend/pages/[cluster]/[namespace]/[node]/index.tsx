import { getNodeList } from "api/k8s/node";
import ResourceList from "components/common/ResourceList";
import Title from "components/common/Title";
import React from "react";
import { useQuery } from "react-query";

type Props = {};

const NodePage = (props: Props) => {
  const { data, isLoading, error } = useQuery("node", getNodeList);
  console.log(data);
  return (
    <div className="h-full flex flex-col">
      <Title text="파드 목록" />
      <ResourceList resourceName="노드 목록" items={[{ name: "1" }, { name: "2" }]} />
    </div>
  );
};

export default NodePage;

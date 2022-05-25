import { getNamespaceList } from "api/k8s/namespace";
import { getNodeList } from "api/k8s/node";
import ResourceList from "components/common/ResourceList";
import React from "react";
import { useQuery } from "react-query";

type Props = {};

const NamespaceList = () => {
  const { data, isLoading, error } = useQuery(
    "namespace",
    getNamespaceList
  );

  console.log(data);

  return (
    <ResourceList
      resourceName={"네임스페이스"}
      items={data}
    />
  );
};

export default NamespaceList;

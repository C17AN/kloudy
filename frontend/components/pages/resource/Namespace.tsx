import ResourceList from "components/common/ResourceList";
import React from "react";
import { getNamespaceList } from "api/k8s/namespace";
import { useQuery } from "react-query";
import { resourceNameType } from "types/k8s/resourceName";

type NamespaceListProps = {
  resourceName: resourceNameType;
};

const NamespaceList = ({
  resourceName
}: NamespaceListProps) => {
  const { data, isLoading, error } = useQuery(
    "namespace",
    getNamespaceList
  );

  return (
    <ResourceList
      resourceName={resourceName}
      items={data}
    />
  );
};

export default NamespaceList;

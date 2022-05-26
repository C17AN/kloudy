import ResourceList from "components/common/ResourceList";
import React from "react";
import NamespaceDetail from "components/common/ResourceList/Content/Namespace/Detail/List";
import { getNamespaceList } from "api/k8s/namespace";
import { useQuery } from "react-query";
import { resourceNameType } from "types/k8s/resourceName";
import { useRouter } from "next/router";

type NamespaceListProps = {
  resourceName: resourceNameType;
};

const NamespaceList = ({
  resourceName
}: NamespaceListProps) => {
  const router = useRouter();
  const namespaceName = router.query.name as string;

  const { data, isLoading, error } = useQuery(
    "namespace",
    getNamespaceList
  );

  return namespaceName ? (
    <NamespaceDetail namespaceName={namespaceName} />
  ) : (
    <ResourceList
      resourceName={resourceName}
      items={data}
    />
  );
};

export default NamespaceList;

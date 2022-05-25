import React from "react";
import ResourceList from "components/common/ResourceList";
import Title from "components/common/Title";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getNodeList } from "api/k8s/node";
import NodeList from "components/pages/resource/Node";
import NamespaceList from "components/pages/resource/Namespace";

type Props = {};

const ClusterPage = (props: Props) => {
  const router = useRouter();
  const { resource } = router.query;

  const resourceName = () => {
    switch (resource) {
      case "namespace":
        return "네임스페이스";
      case "node":
        return "노드";
      case "volume":
        return "볼륨";
      default:
        return "";
    }
  };

  return (
    <div className="h-full flex flex-col">
      <Title text="클러스터 목록" />
      {resource === "node" && <NodeList />}
      {resource === "namespace" && <NamespaceList />}
    </div>
  );
};

export default ClusterPage;

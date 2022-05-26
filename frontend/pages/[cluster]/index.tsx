import React, {
  createContext,
  useCallback,
  useContext
} from "react";
import ResourceList from "components/common/ResourceList";
import Title from "components/common/Title";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getNodeList } from "api/k8s/node";
import NodeList from "components/pages/resource/Node";
import NamespaceList from "components/pages/resource/Namespace";
import { resourceNameType } from "types/k8s/resourceName";

export const ResourceContext = createContext<{
  resourceName: resourceNameType | null;
}>({ resourceName: null });

const ClusterPage = () => {
  const router = useRouter();
  const resourceName = router.query
    .resource as resourceNameType;

  const renderResourceList = useCallback(
    (resourceName: resourceNameType) => {
      switch (resourceName) {
        case "node":
          return <NodeList resourceName={resourceName} />;
        case "namespace":
          return (
            <NamespaceList resourceName={resourceName} />
          );
      }
    },
    []
  );

  return (
    <div className="h-full flex flex-col">
      <ResourceContext.Provider value={{ resourceName }}>
        {resourceName !== null &&
          renderResourceList(resourceName)}
      </ResourceContext.Provider>
    </div>
  );
};

export default ClusterPage;

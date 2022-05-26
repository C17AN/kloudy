import { useRouter } from "next/router";
import React from "react";
import nodeConditionChecker from "utils/k8s/node/conditionChecker";
import NamespaceItem from "./Item";

type NodeListProps = {
  items: any[];
  onClick: () => void;
};

const NamespaceList = ({
  items,
  onClick
}: NodeListProps) => {
  const router = useRouter();
  const openNamespaceDetail = (namespaceName: string) => {
    router.query.name = namespaceName;
    router.push(router);
  };

  return (
    <>
      {items?.map(item => {
        const { name, creationTimestamp } = item.metadata;
        return (
          <NamespaceItem
            name={name}
            createdAt={creationTimestamp}
            key={item.name}
            openNamespaceDetail={openNamespaceDetail}
          />
        );
      })}
    </>
  );
};

export default NamespaceList;

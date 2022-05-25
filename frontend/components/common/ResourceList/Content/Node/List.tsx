import React, { useState } from "react";
import nodeConditionChecker from "utils/k8s/node/conditionChecker";
import NodeItem from "./Item";

type NodeListProps = {
  items: any[];
  openResourceDetailModal: () => void;
};

const NodeList = ({
  items,
  openResourceDetailModal
}: NodeListProps) => {
  const [selectedNodeList, setSelectedNodeList] = useState<
    string[]
  >([]);

  const selectNode = (name: string) => {
    setSelectedNodeList([...selectedNodeList, name]);
  };

  return (
    <>
      {items?.map(item => {
        const { name, creationTimestamp } = item.metadata;
        const { conditions } = item.status;
        const isReady = nodeConditionChecker(conditions);
        return (
          <NodeItem
            name={name}
            isSelected={true}
            createdAt={creationTimestamp}
            conditions={conditions}
            key={item.name}
            isReady={isReady}
            openResourceDetailModal={
              openResourceDetailModal
            }
            select={selectNode}
          />
        );
      })}
    </>
  );
};

export default NodeList;

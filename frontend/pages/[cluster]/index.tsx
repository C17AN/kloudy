import React from "react";
import ResourceList from "components/common/ResourceList";
import Title from "components/common/Title";

type Props = {};

const ClusterPage = (props: Props) => {
  return (
    <div className="h-full flex flex-col">
      <Title text="클러스터 목록" />
      {/* <ResourceList
        resourceName="노드"
        items={[{ name: "1" }, { name: "2" }]}
      /> */}
    </div>
  );
};

export default ClusterPage;

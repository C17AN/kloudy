import ResourceList from "components/common/ResourceList";
import Title from "components/common/Title";
import React from "react";

type Props = {};

const NamespacePage = (props: Props) => {
  return (
    <div className="h-full flex flex-col">
      <Title text="네임스페이스 리소스 목록" />
      <ResourceList
        resourceName="노드"
        items={[
          { name: "1" },
          { name: "2" },
          { name: "3" },
          { name: "4" }
        ]}
      />
    </div>
  );
};

export default NamespacePage;

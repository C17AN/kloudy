import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Title from "components/common/Title";
import Select from "components/common/Select";
import ResourceContainer from "components/common/ResourceContainer";

const RootPage: NextPage = () => {
  return (
    <div className="h-full flex flex-col">
      <Title text="전체 리소스 목록" />
      <ResourceContainer resourceName="노드 목록" items={[{ name: "1" }, { name: "2" }]} />
    </div>
  );
};

export default RootPage;

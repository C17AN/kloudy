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
      <Select items={["하하"]} />
      <ResourceContainer resourceName="파드" />
    </div>
  );
};

export default RootPage;

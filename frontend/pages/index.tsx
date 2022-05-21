import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Title from "components/common/Title";

const RootPage: NextPage = () => {
  return (
    <div>
      <Title text="전체 리소스 목록" />
    </div>
  );
};

export default RootPage;

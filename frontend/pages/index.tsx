import type { NextPage } from "next";
import Title from "components/common/Title";

const RootPage: NextPage = () => {
  return (
    <div className="h-full flex flex-col">
      <Title text="전체 리소스 목록" />
      <div>클러스터 및 네임스페이스를 선택해 주세요.</div>
    </div>
  );
};

export default RootPage;

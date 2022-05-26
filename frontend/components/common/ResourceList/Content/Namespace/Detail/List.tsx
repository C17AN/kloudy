import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";
import Select from "components/common/Select";
import Router, { useRouter } from "next/router";
import React from "react";
import StatusSummary from "../StatusSummary";

type NamespaceDetailProps = {
  namespaceName: string;
};

const NamespaceDetail = ({
  namespaceName
}: NamespaceDetailProps) => {
  const router = useRouter();
  const routeBack = () => {
    router.back();
  };

  return (
    <div className="flex flex-col flex-1 rounded-md border-[1px] py-4 px-6 border-gray-200 h-full w-full overflow-y-hidden">
      <div className="flex items-center justify-between border-b-[1px] pb-4">
        <h3 className="text-xl font-semibold">
          네임스페이스 : {namespaceName}
        </h3>
        <button
          className="flex items-center text-slate-400 rounded-md hover:bg-slate-100 py-2 px-4 transition-colors cursor-pointer"
          onClick={routeBack}
        >
          <ArrowNarrowLeftIcon className="w-4 h-4 mr-1" />
          <p className="text-sm font-light">
            이전으로 돌아가기
          </p>
        </button>
      </div>
      <section className="flex gap-8 flex-1 h-full">
        <div className="flex-1">
          <div className="flex items-center justify-between h-16">
            <p className="text-lg font-semibold text-slate-600">
              요약
            </p>
            <Select items={[{ name: "모든 리소스" }]} />
          </div>
          <div className="h-2/5 border-[1px] border-gray-200 rounded-md p-4">
            <StatusSummary />
          </div>
          <p className="flex items-center text-lg font-semibold text-slate-600 h-16">
            이벤트 로그
          </p>
          <div className="h-2/5 border-[1px] border-gray-200 rounded-md p-4"></div>
        </div>
        <section className="flex-1">
          <div className="flex items-center justify-between h-16">
            <p className="text-lg font-semibold text-slate-600">
              하위 리소스 목록
            </p>
            <div className="space-x-4">
              <button className="text-xs text-white rounded-md py-2 px-4 bg-gray-300 cursor-pointer hover:bg-gray-400 hover:text-gray-50 transition-colors">
                리소스 추가하기
              </button>
              <button className="text-xs text-white rounded-md py-2 px-4 bg-red-300 cursor-pointer hover:bg-red-400 hover:text-gray-50 transition-colors">
                선택한 리소스 삭제
              </button>
            </div>
          </div>
          <div className="h-[90%] mb-2 border-[1px] border-gray-200 rounded-md p-4">
            파드 1
          </div>
        </section>
      </section>
    </div>
  );
};

export default NamespaceDetail;

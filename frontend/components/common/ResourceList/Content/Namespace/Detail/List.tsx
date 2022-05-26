import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";
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
    <div className="flex-1 rounded-md border-[1px] py-4 px-6 pb-24 mt-2 border-gray-200 h-full w-full overflow-y-hidden">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold">
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
      <div>리소스 선택</div>
      <section className="flex h-full gap-8">
        <div className="flex-1">
          <p className="text-md mb-4 font-semibold text-slate-600">
            요약
          </p>
          <StatusSummary />
          <p>이벤트 로그</p>
        </div>
        <section className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <p className="text-md font-semibold text-slate-600">
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
          <div className="h-full border-[1px] border-gray-200">
            파드 1
          </div>
        </section>
      </section>
    </div>
  );
};

export default NamespaceDetail;

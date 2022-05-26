import React from "react";
import StatusSummary from "../StatusSummary";

type NamespaceDetailProps = {
  namespaceName: string;
};

const NamespaceDetail = ({
  namespaceName
}: NamespaceDetailProps) => {
  return (
    <div className="flex-1 rounded-md border-[1px] py-4 px-6 pb-24 mt-2 border-gray-200 h-full w-full overflow-y-hidden">
      <div className="flex items-center">
        <h3 className="text-2xl font-semibold mr-4 mb-4">
          네임스페이스 : {namespaceName}
        </h3>
      </div>
      <p className="text-md mb-2 font-semibold text-slate-600">
        요약
      </p>
      <StatusSummary />
      <p className="text-md mb-2 font-semibold text-slate-600">
        하위 리소스 목록
      </p>
    </div>
  );
};

export default NamespaceDetail;

import Modal from "components/common/Modal";
import React from "react";
import { resourceNameType } from "types/k8s/resourceName";
import getLocaleResourceName from "utils/k8s/getLocaleResourceName";

type ResouceCreateModalProps = {
  resourceName: resourceNameType;
  onClose: () => void;
};

const ResouceDetailModal = ({
  resourceName,
  onClose
}: ResouceCreateModalProps) => {
  return (
    <Modal>
      <div className="bg-white relative top-1/2 mx-auto py-4 px-6 rounded-md w-full max-w-2xl">
        <h1 className="font-bold text-2xl">
          {getLocaleResourceName(resourceName)} 상세 정보
        </h1>
        <section className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="p-2 px-4 rounded-md bg-red-400 text-gray-50 "
          >
            닫기
          </button>
          <button
            onClick={onClose}
            className="p-2 px-4 rounded-md bg-emerald-400 text-gray-50"
          >
            완료
          </button>
        </section>
      </div>
    </Modal>
  );
};

export default ResouceDetailModal;

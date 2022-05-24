import Modal from "components/common/Modal";
import React from "react";

type ResouceCreateModalProps = {
  resourceName: string;
  onClose: () => void;
};

const ResouceCreateModal = ({
  resourceName,
  onClose
}: ResouceCreateModalProps) => {
  return (
    <Modal>
      <div className="bg-white relative top-1/2 mx-auto py-4 px-6 rounded-md w-full max-w-2xl">
        <h1 className="font-bold text-2xl">
          새 {resourceName} 생성
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

export default ResouceCreateModal;

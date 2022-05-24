import React from "react";

type ModalProps = {
  children: React.ReactNode;
};

const Modal = ({ children }: ModalProps) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-70">
      {children}
    </div>
  );
};

export default Modal;

import React, { ReactNode } from "react";

type SidebarItemContainerProps = {
  text: string;
  children: ReactNode;
};

const SidebarItemContainer = ({ text, children }: SidebarItemContainerProps) => {
  return (
    <section className="bg-white rounded-md mt-4 py-3 px-4 shadow-[1px_1px_3px_3px_rgba(0,0,0,0.1)]">
      {text && <h3 className="text-xs text-stone-500 mb-3">{text}</h3>}
      <span>{children}</span>
    </section>
  );
};

export default SidebarItemContainer;

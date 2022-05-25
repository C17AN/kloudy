import cx from "classnames";
import React, { ReactNode } from "react";

type SidebarItemContainerProps = {
  text: string;
  children?: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
};

const SidebarItemContainer = ({
  text,
  icon,
  children,
  onClick
}: SidebarItemContainerProps) => {
  return (
    <section
      className="bg-white rounded-md mt-4 py-3 px-4 shadow-[1px_1px_3px_3px_rgba(0,0,0,0.1)]"
      onClick={onClick}
    >
      <h3
        className={cx(
          "flex items-center text-xs text-stone-500 ",
          {
            "mb-3": children
          },
          {
            "cursor-pointer hover:text-stone-600 hover:font-semibold transition-all":
              !children
          }
        )}
      >
        {icon && <span className="mr-2">{icon}</span>}
        <span>{text}</span>
      </h3>
      {children && <span>{children}</span>}
    </section>
  );
};

export default SidebarItemContainer;

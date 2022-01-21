import React, { ReactNode } from "react";

type Props = {
  isClosed: boolean;
  children: ReactNode;
};

const NavLinkCon = ({ isClosed, children }: Props) => {
  return (
    <div
      className={`${
        isClosed ? "hidden" : "flex"
      } lg:flex justify-evenly items-baseline  w-full flex-grow mt-2 lg:mt-0`}
    >
      {children}
    </div>
  );
};

export default NavLinkCon;

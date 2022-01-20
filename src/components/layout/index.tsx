import React, { FC, useState } from "react";
import CartSVG from "@components/svgs/Cart";
import CloseSVG from "@components/svgs/Close";
import MenuSVG from "@components/svgs/Menu";

const Layout: FC = ({ children }) => {
  const [isClosed, setIsClosed] = useState(true);
  return (
    <>
      <header className="bg-orange-500 w-full overflow-visible absolute">
        <nav className="container mx-auto py-2 px-3 flex justify-between items-start lg:items-center">
          <div
            onClick={() => {
              setIsClosed(!isClosed);
            }}
            className="lg:hidden"
          >
            <MenuSVG
              className={isClosed ? "h-8 w-8 stroke-slate-50" : "hidden"}
            />
            <CloseSVG
              className={isClosed ? "hidden" : "h-8 w-8 stroke-slate-50"}
            />
          </div>
          <ul className="list-none flex flex-col lg:flex-row justify-between lg:flex-grow lg:mr-2 items-baseline ">
            <li
              className={`${
                isClosed ? "hidden" : ""
              } lg:block bg-green-400 mt-2 lg:mt-0 order-2 lg:order1`}
            >
              1
            </li>
            <li className="bg-green-400 order-1 lg:order-2">2</li>
            <li
              className={`${
                isClosed ? "hidden" : ""
              } lg:block bg-green-400 mt-2 lg:mt-0 order-3 lg:order-3`}
            >
              3
            </li>
          </ul>
          <div className="flex items-center">
            <CartSVG className="fill-slate-50 h-8 w-8" />
            <span className="text-base text-slate-50">1</span>
          </div>
        </nav>
      </header>
      {children}
    </>
  );
};

export default Layout;

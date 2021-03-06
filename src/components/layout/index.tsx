import React, { FC, useState } from "react";
import Link from "@components/ui/Link";
import Logo from "@components/ui/Logo";
import NavLinkCon from "./NavLinkCon";
// SVGS
import CartSVG from "@components/svgs/Cart";
import CloseSVG from "@components/svgs/Close";
import MenuSVG from "@components/svgs/Menu";

const Layout: FC = ({ children }) => {
  const [isClosed, setIsClosed] = useState(true);
  return (
    <>
      <header className="bg-orange-500 w-full overflow-visible absolute">
        <nav className="container mx-auto py-2 px-3 flex justify-between items-baseline lg:items-center">
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
          <ul className="list-none flex flex-col lg:flex-row justify-between lg:flex-grow lg:mr-2 items-center flex-grow">
            <li className="order-2 lg:order1 w-full">
              <NavLinkCon isClosed={isClosed}>
                <Link to="/about">About</Link>
                <Link to="/menu">our menu</Link>
              </NavLinkCon>
            </li>
            <li className="order-1 lg:order-2 lg:mx-1.5">
              <Link to="/">
                <Logo />
              </Link>
            </li>
            <li className="order-3 lg:order-3 w-full">
              <NavLinkCon isClosed={isClosed}>
                <Link to="/contact">Contact us</Link>
                <Link to="/near">near you</Link>
              </NavLinkCon>
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

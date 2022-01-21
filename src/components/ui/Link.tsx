import React, { ReactNode } from "react";
import { Link as GatsbyLink } from "gatsby";
type Props = {
  to: string;
  children: ReactNode;
};

const Link = (props: Props) => {
  return (
    <GatsbyLink
      to={props.to}
      className="text-2xl capitalize underline underline-offset-2 lg:no-underline lg:hover:underline decoration-amber-200 text-slate-50 font-openSans"
    >
      {props.children}
    </GatsbyLink>
  );
};

export default Link;

import React from "react";

const Logo = () => {
  return (
    <h1 className="max-w-max font-pacifico group relative p-3 block">
      <span className="z-20 relative bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-400 text-3xl lg:text-4xl lg:text-slate-50 lg:bg-none duration-300 lg:group-hover:text-transparent lg:group-hover:bg-clip-text lg:group-hover:bg-gradient-to-r ease-in-out">
        Sweety
      </span>
      <span className="absolute bg-slate-50 h-full w-full rounded z-0 scale-100 lg:scale-0 top-0 left-0 duration-300 lg:group-hover:scale-100 ease-in-out" />
    </h1>
  );
};

export default Logo;

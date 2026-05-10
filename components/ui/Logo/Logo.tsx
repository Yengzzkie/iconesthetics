import React from "react";

const Logo = () => {
  return (
    <div className="text-(--text-primary) font-serif relative border p-3 w-fit">
      <h1 className="text-xl lg:text-3xl font-bold">ICON ESTHETICS</h1>
      <div className="bg-(--background) absolute -bottom-2.5 right-3 text-xs lg:text-sm px-0.5 tracking-wider">
        BEAUTY & SPA
      </div>
    </div>
  );
};

export default Logo;

import React from "react";

const Body = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      className="mx-auto ml-[55px] min-h-screen max-w-5xl bg-[#0D0C0F] pl-6 pr-1
     text-gray-500 first-letter:ml-[55px] md:ml-[190px]"
    >
      {children}
    </main>
  );
};

export default Body;

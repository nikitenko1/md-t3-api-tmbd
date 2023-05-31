import React from "react";

const GridRow = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="row scrollbar-thumb-gray-800 scrollbar-thin mt-4 rounded">
      {children}
    </div>
  );
};

export default GridRow;

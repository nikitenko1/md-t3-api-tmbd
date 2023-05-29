import { useRouter } from "next/router";
import React from "react";

const Right = () => {
  const router = useRouter();
  if (router.pathname === "/auth/signin") return null;

  return <div>Right</div>;
};

export default Right;

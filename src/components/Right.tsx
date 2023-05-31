import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import { useRecoilState } from "recoil";
import { rightSidebar } from "../../atoms/rightSidebar";
import { IoClose } from "react-icons/io5";
import Image from "next/legacy/image";
import { useMediaQuery } from "usehooks-ts";
import { BiLogOut } from "react-icons/bi";
import { IoMdLogIn } from "react-icons/io";
import Link from "next/link";
import Search from "./Search";

const Right = () => {
  const [openSidebar, setOpenSidebar] = useRecoilState(rightSidebar);
  const { data: session, status } = useSession();
  const handleSignOut = async () => {
    await signOut({
      callbackUrl: "http://localhost:3000/",
    });
  };
  // Easily retrieve media dimensions with this Hook React which also works onResize
  const desktop = useMediaQuery("(min-width:768px)");

  const router = useRouter();
  if (router.pathname === "/auth/signin") return null;
  if (openSidebar) return null;
  return (
    <div className="fixed right-0 top-0 z-[999] min-h-screen space-y-4 bg-[#1A161F] p-4 text-gray-500">
      <div className="flex items-center gap-2">
        {status === "unauthenticated" ? (
          <Link href={"/auth/signin"}>
            {desktop ? (
              <p className="cursor-pointer border-[#bc13fe] font-bold uppercase text-white hover:border-b-2">
                Sign in
              </p>
            ) : (
              <IoMdLogIn className="cursor-pointer text-xl text-white hover:text-[#bc13fe]" />
            )}
          </Link>
        ) : (
          <>
            <Image
              src={session?.user?.image || `/noAvatar.png`}
              width={40}
              height={40}
              className="rounded-full"
              alt="cart"
            />
            <div>
              <p className="text-sm text-gray-400">{session?.user?.name}</p>

              <p className="text-sm text-gray-400">session?.user?.email</p>
              <button
                className="mt-3 cursor-pointer border-[#bc13fe] font-bold uppercase text-white 
                hover:border-b-2"
                onClick={handleSignOut}
              >
                {desktop ? (
                  <span>Sign out</span>
                ) : (
                  <BiLogOut className="cursor-pointer text-xl text-white hover:text-[#bc13fe]" />
                )}
              </button>
            </div>
          </>
        )}
      </div>
      <div
        className="absolute -top-2 right-2 hidden cursor-pointer md:block lg:hidden"
        onClick={() => setOpenSidebar(false)}
      >
        <IoClose className="text-lg" />
      </div>
      <Search />
    </div>
  );
};

export default Right;

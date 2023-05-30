import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import {
  AiFillClockCircle,
  AiFillHeart,
  AiFillHome,
  AiFillInfoCircle,
  AiFillStar,
  AiOutlineDownload,
  AiOutlineLogout,
} from "react-icons/ai";
import { BsFillAlarmFill, BsFillBookmarkCheckFill } from "react-icons/bs";
import { RiCompassDiscoverFill } from "react-icons/ri";
import { MdOutlineGroups } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import Image from "next/legacy/image";
import { signOut, useSession } from "next-auth/react";

const Sidebar = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const handleSignOut = async () => {
    await signOut({
      callbackUrl: "http://localhost:3000/",
    });
  };
  if (router.pathname === "/auth/signin") return null;

  return (
    <aside
      className="fixed left-0 top-0 z-50 flex min-h-screen w-14 flex-col space-y-4 
    divide-y-0 divide-gray-50 bg-[#1A161F] pb-4 pl-2 pt-16 md:w-48 md:divide-y md:pl-4"
    >
      <div className="space-y-3 text-gray-500">
        <p className="hidden text-xs font-bold tracking-tighter md:block">
          MENU
        </p>
        <ul className="flex flex-col space-y-3 pl-[6px]">
          <Link href="/">
            <span
              className={`flex cursor-pointer items-center gap-1.5 ${
                router.pathname === "/"
                  ? "border-[#ec1c24] font-bold text-white md:border-r-4"
                  : ""
              }`}
            >
              <AiFillHome
                className="text-2xl md:text-base"
                color={`${router.pathname === "/" ? "#EC1C24" : ""}`}
              />
              <p className="hidden md:block">Home</p>
            </span>
          </Link>
          <Link href="/discovery">
            <span
              className={`flex cursor-pointer items-center gap-1.5 ${
                router.pathname === "/discovery"
                  ? "border-[#ec1c24] font-bold text-white md:border-r-4"
                  : ""
              }`}
            >
              <RiCompassDiscoverFill
                className="text-2xl md:text-base"
                color={`${router.pathname === "/discovery" ? "#EC1C24" : ""}`}
              />
              <p className="hidden md:block">Discovery</p>
            </span>
          </Link>
          <Link href="/coming-soon">
            <span
              className={`flex cursor-pointer items-center gap-1.5 ${
                router.pathname === "/coming-soon"
                  ? "border-[#ec1c24] font-bold text-white md:border-r-4"
                  : ""
              }`}
            >
              <BsFillAlarmFill
                className="text-2xl md:text-base"
                color={`${router.pathname === "/coming-soon" ? "#EC1C24" : ""}`}
              />
              <p className="hidden md:block">Coming Soon</p>
            </span>
          </Link>
          <Link href="">
            <span
              className={`flex cursor-pointer items-center gap-1.5 ${
                router.pathname === "/community"
                  ? "border-[#ec1c24] font-bold text-white md:border-r-4"
                  : ""
              }`}
            >
              <MdOutlineGroups
                className="text-2xl md:text-base"
                color={`${router.pathname === "/community" ? "#EC1C24" : ""}`}
              />{" "}
              <p className="hidden md:block">Community</p>
            </span>
          </Link>
        </ul>
      </div>
      <div className="space-y-3 pt-4 text-gray-500">
        <p className="hidden text-xs font-bold tracking-tighter text-gray-500 md:block">
          LIBRARY
        </p>
        <ul className="flex flex-col space-y-3 pl-[6px]">
          <Link href="">
            <span
              className={`flex cursor-pointer items-center gap-1.5 ${
                router.pathname === "/recent"
                  ? "border-[#ec1c24] font-bold text-white md:border-r-4"
                  : ""
              }`}
            >
              <AiFillClockCircle
                className="text-2xl md:text-base"
                color={`${router.pathname === "recent" ? "#EC1C24" : ""}`}
              />
              <p className="hidden md:block">Recent</p>
            </span>
          </Link>
          <Link href="/bookmarks">
            <span
              className={`flex cursor-pointer items-center gap-1.5 ${
                router.pathname === "/bookmarks"
                  ? "border-[#ec1c24] font-bold text-white md:border-r-4"
                  : ""
              }`}
            >
              <BsFillBookmarkCheckFill
                className="text-2xl md:text-base"
                color={`${router.pathname === "/bookmarks" ? "#EC1C24" : ""}`}
              />
              <p className="hidden md:block">Bookmarked</p>
            </span>
          </Link>
          <Link href="">
            <span
              className={`flex cursor-pointer items-center gap-1.5 ${
                router.pathname === "/top-rated"
                  ? "border-[#ec1c24] font-bold text-white md:border-r-4"
                  : ""
              }`}
            >
              <AiFillStar
                className="text-2xl md:text-base"
                color={`${router.pathname === "/top-rated" ? "#EC1C24" : ""}`}
              />
              <p className="hidden md:block">Top rated</p>
            </span>
          </Link>
          <Link href="">
            <span
              className={`flex cursor-pointer items-center gap-1.5 ${
                router.pathname === "/downloaded"
                  ? "border-[#ec1c24] font-bold text-white md:border-r-4"
                  : ""
              }`}
            >
              <AiOutlineDownload
                className="text-2xl md:text-base"
                color={`${router.pathname === "/downloaded" ? "#EC1C24" : ""}`}
              />
              <p className="hidden md:block">Downloaded</p>
            </span>
          </Link>
          <Link href="/favourites">
            <span
              className={`flex cursor-pointer items-center gap-1.5 ${
                router.pathname === "/favourites"
                  ? "border-[#ec1c24] font-bold text-white md:border-r-4"
                  : ""
              }`}
            >
              <AiFillHeart
                className="text-2xl md:text-base"
                color={`${router.pathname === "/favourites" ? "#EC1C24" : ""}`}
              />
              <p className="hidden md:block">Favourites</p>
            </span>
          </Link>
        </ul>
      </div>
      <div className="space-y-3 pl-[6px] pt-4 text-gray-500">
        <Link href="">
          <span
            className={`flex cursor-pointer items-center gap-1.5 ${
              router.pathname === "/help"
                ? "border-[#ec1c24] font-bold text-white md:border-r-4"
                : ""
            }`}
          >
            <AiFillInfoCircle
              className="text-2xl md:text-base"
              color={`${router.pathname === "/help" ? "#EC1C24" : ""}`}
            />
            <p className="hidden md:block">Help</p>
          </span>
        </Link>
        <Link href="">
          <span
            className={`flex cursor-pointer items-center gap-1.5 ${
              router.pathname === "/settings"
                ? "border-[#ec1c24] font-bold text-white md:border-r-4"
                : ""
            }`}
          >
            <IoMdSettings
              className="text-2xl md:text-base"
              color={`${router.pathname === "/settings" ? "#EC1C24" : ""}`}
            />
            <p className="hidden md:block">Settings</p>
          </span>
        </Link>
      </div>
      <div className="space-y-2 pl-[6px] pt-4">
        <button
          className="flex items-center gap-2 font-bold text-gray-500"
          onClick={handleSignOut}
        >
          <AiOutlineLogout className="text-2xl md:text-base" />
          <p className="hidden md:block">Logout</p>
        </button>
        {session && (
          <div className="md:hidden">
            <Image
              src={session?.user?.image || `/noAvatar.png`}
              width={30}
              height={30}
              objectFit="cover"
              className="rounded-full"
              alt="cart"
            />
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;

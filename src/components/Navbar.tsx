import React from "react";
import { useRecoilState } from "recoil";
import { rightSidebar } from "../../atoms/rightSidebar";
import { useRouter } from "next/router";
import Link from "next/link";
import { BiPodcast } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import { BsGridFill } from "react-icons/bs";
import { IoMenuOutline } from "react-icons/io5";

const Navbar = () => {
  const router = useRouter();
  const [openSidebar, setOpenSidebar] = useRecoilState(rightSidebar);

  if (router.pathname === "/auth/signin") return null;

  return (
    <nav
      className="sticky top-0 z-[999] ml-[55px] flex h-16 max-w-5xl items-center
    justify-between bg-[#0D0C0F] pl-6 text-gray-500 md:ml-[190px]"
    >
      <ul className="flex gap-x-8 whitespace-nowrap">
        <li
          className={`${router.pathname === "/" ? "font-bold text-white" : ""}`}
        >
          <Link href="/">Movies</Link>
        </li>
        <li
          className={`${
            router.pathname === "/tv-series" ? "font-bold text-white" : ""
          }`}
        >
          <Link href="/tv-series">TV Series</Link>
        </li>
      </ul>
      <ul className="hidden gap-x-8 pr-6 text-xl text-gray-500 md:flex">
        <IoMenuOutline
          className="cursor-pointer md:inline-block"
          onClick={() => setOpenSidebar((prev) => !prev)}
        />
        <BiPodcast />

        <IoMdNotifications />

        <BsGridFill />
      </ul>
    </nav>
  );
};

export default Navbar;

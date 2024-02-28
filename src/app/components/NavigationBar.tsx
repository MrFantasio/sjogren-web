"use client";

import Link from "next/link";
import { TypeLandingPageSkeleton } from "../utils/types/ContentfulTypes";
import { EntryCollection } from "contentful";
import { GiConsoleController, GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { usePathname } from "next/navigation";

interface NavigationBarProps {
  landingPages: EntryCollection<TypeLandingPageSkeleton>;
}

const NavigationBar = ({ landingPages }: NavigationBarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-8 flex flex-row justify-between w-full bg-darkblue">
      <Link href={"/"} className={" hover:text-black text-white "}>
        Helena Sjögren
      </Link>
      <ul className="md:flex flex-row gap-10 text-white hidden">
        <li
          className={
            "active:text-gray-800 hover:text-black " +
            (pathname === "/" ? " text-melon underline" : "")
          }
        >
          <Link href={"/"}>Home</Link>
        </li>
        {landingPages.items.map((lp) => (
          <li
            key={lp.sys.id}
            className={
              "active:text-gray-800 hover:text-black" +
              (pathname === (("/" + lp.fields.slug) as unknown as string)
                ? " text-melon underline"
                : "")
            }
          >
            <Link href={lp.fields.slug}>
              {lp.fields.title as unknown as string}
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={handleOpenMenu} className="md:hidden block">
        <GiHamburgerMenu className="md:hidden text-white text-2xl" />
      </button>
      {isOpen && (
        <div
          className=" w-screen h-full top-navHeight absolute z-20 left-0"
          onClick={handleOpenMenu}
        >
          <div
            className={
              "md:hidden text-white bg-darkblue p-6 transition-all absolute right-0  z-30 w-1/2 h-full " +" animate-slideInFromRight"
              // (!isOpen
              //   ? " animate-slideInFromRight"
              //   : " animate-slideInFromLeft")
            }
          >
            <ul className="md:hidden flex flex-col gap-8">
              <li
                className={
                  "active:text-gray-800 hover:text-black " +
                  (pathname === ("/")
                    ? " text-melon underline"
                    : "")
                }
              >
                <Link href={"/"}>Home</Link>
              </li>
              {landingPages.items.map((lp) => (
                <li
                  key={lp.sys.id}
                  className={
                    "active:text-gray-800 hover:text-black " +
                    (pathname === (("/" + lp.fields.slug) as unknown as string)
                      ? " text-melon underline"
                      : "")
                  }
                >
                  <button onClick={handleOpenMenu}>
                    <Link href={lp.fields.slug}>
                      {lp.fields.title as unknown as string}
                    </Link>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;

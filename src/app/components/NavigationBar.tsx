"use client";

import Link from "next/link";
import { TypeLandingPageSkeleton } from "../utils/types/ContentfulTypes";
import { EntryCollection } from "contentful";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

interface NavigationBarProps {
  landingPages: EntryCollection<TypeLandingPageSkeleton>;
}

const NavigationBar = ({ landingPages }: NavigationBarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="p-8 flex flex-row justify-between w-full bg-slate-600">
      <p className="text-white">Helena Sjögren</p>
      <ul className="md:flex flex-row gap-10 text-white hidden">
        <li className="hover:text-black transition-colors">
          <Link href={"/"}>Home</Link>
        </li>
        {landingPages.items.map((lp) => (
          <li key={lp.sys.id} className="hover:text-black transition-colors">
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
        <div className="md:hidden text-white absolute right-0 top-24 bg-gray-600 p-8 transition-all">
          <ul className="md:hidden flex flex-col gap-8">
            {landingPages.items.map((lp) => (
              <li key={lp.sys.id}>
                <Link href={lp.fields.slug}>
                  {lp.fields.title as unknown as string}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;

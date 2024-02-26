import Link from "next/link";
import { TypeLandingPageSkeleton } from "../utils/types/ContentfulTypes";
import { EntryCollection } from "contentful";

interface NavigationBarProps {
  landingPages: EntryCollection<TypeLandingPageSkeleton>;
}

const NavigationBar = ({ landingPages }: NavigationBarProps) => {
  return (
    <nav className="p-8 flex flex-row justify-between w-full bg-slate-600">
      <p className="text-white">Helena Sjögren</p>
      <ul className="flex flex-row gap-10 text-white">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        {landingPages.items.map((lp) => (
          <li key={lp.sys.id}>
            <Link href={lp.fields.slug}>
              {lp.fields.title as unknown as string}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;

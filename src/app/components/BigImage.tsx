import Image from "next/image";
import { Hero } from "../utils/helpers/contentful/hero";

interface BigImageProps {
  hero: Hero | null;
}
const BigImage = ({ hero }: BigImageProps) => {
  return (
    <div className="relative w-full">
      <div className="w-full">
        <Image
          src={hero?.image?.src as string}
          width={1000}
          height={1000}
          alt={hero?.image?.alt as string}
          className="w-full"
        />
      </div>
      <div
        className={
          "absolute top-10 left-82 " +
          "md:top-20 md:ml-auto md:mr-auto md:left-48 text-center transition-[opacity, transform] duration-300 animate-slideDown"
        }
      >
        <h1 className="md:text-2xl text-black text-center font-montsserat">
          <span className="p-4">{hero?.title}</span>
        </h1>
      </div>
      <div
        className={
          "absolute bottom-64 ml-auto mr-auto right-24 w-96 bg-charcoal p-4 text-justify hidden md:block" +
          "transition-[opacity, transform] duration-300 animate-slideUp"
        }
      >
        <p className="text-melon text-xl">{hero?.text}</p>
      </div>
    </div>
  );
};
export default BigImage;

import { fetchGallery } from "../utils/helpers/contentfulClient";
import Image from "next/image";

const Gallery = async () => {
  const galleryImages = await fetchGallery("2nJb4vH3q6BeSYPx3eIAiZ");

  console.log(galleryImages);
  return (
    <div className="flex flex-wrap mt-12 ">
      {galleryImages?.images.map((img, i) => (
        <div key={img!.id} className="w-80 h-80 object-fit overflow-hidden ">
          <Image
            width={500}
            height={500}
            src={img?.src as string}
            alt={img?.src as string}
            className=" h-full w-full object-cover"
          />
        </div>
      ))}
      {galleryImages?.images.length! % 3 !== 0 && (
        <div className="w-80 h-80 bg-melon"></div>
      )}
    </div>
  );
};
export default Gallery;

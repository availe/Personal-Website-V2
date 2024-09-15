import Image from "next/image";
import { preload } from "react-dom";

interface ImageSectionProps {
  src: string;
  alt: string;
  preload: boolean;
}

export const ImageSection: React.FC<ImageSectionProps> = ({ src, alt, preload }) => (
  <div className="flex justify-center items-center w-full">
    <figure className="relative w-full aspect-[2/1]">
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: "contain" }}
        priority={preload}
      />
    </figure>
  </div>
);

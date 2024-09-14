import Image from "next/image";

interface ImageSectionProps {
  src: string;
  alt: string;
}

export const ImageSection: React.FC<ImageSectionProps> = ({ src, alt }) => (
  <div className="flex justify-center items-center w-full">
    <figure className="relative w-full aspect-[2/1]">
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: "contain" }}
      />
      <figcaption className="text-center mt-2">{alt}</figcaption>
    </figure>
  </div>
);

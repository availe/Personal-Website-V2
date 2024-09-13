import Image from "next/image";

interface ImageSectionProps {
  src: string;
  alt: string;
  imageLeft: boolean;
}

export const ImageSection: React.FC<ImageSectionProps> = ({
  src,
  alt,
  imageLeft,
}) => (
  <div
    className={`flex justify-center items-center p-8 ${
      imageLeft ? "lg:order-1" : "lg:order-2"
    }`}
  >
    <figure className="relative w-full h-full">
      <Image
        src={src}
        alt={alt}
        width={572}
        height={272}
        style={{ objectFit: "contain" }}
      />
      <figcaption className="text-center mt-2">{alt}</figcaption>
    </figure>
  </div>
);

import Image from "next/image";
import type { DetailImage } from "@/data/detail";

type DetailFigureProps = {
  image: DetailImage;
  sizes?: string;
  preload?: boolean;
  linkClassName?: string;
};

export function DetailFigure({ image, sizes = "(min-width: 54rem) 48rem, 100vw", preload, linkClassName }: DetailFigureProps) {
  const { href, label } = image.link ?? { href: image.src, label: `View full-size ${image.alt}` };

  return (
    <figure>
      <a
        className={linkClassName ? `detail-section-image ${linkClassName}` : "detail-section-image"}
        href={href}
        aria-label={label}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes={sizes}
          preload={preload}
        />
      </a>
      {image.caption && <figcaption>{image.caption}</figcaption>}
    </figure>
  );
}

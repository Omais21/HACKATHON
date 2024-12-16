import { StaticImageData } from "next/image";

type ProductCardProps = {
  cardDiscount: string | number | boolean | React.ReactNode | null | undefined;
  newItem?: string | number | boolean | React.ReactNode | null | undefined;
  cardImage: StaticImageData | string;
  cardName: string | React.ReactNode | null | undefined;
  discountedRate: string | React.ReactNode | null | undefined;
  oldRate: string | React.ReactNode | null | undefined;
  percent: string | React.ReactNode | null | undefined;
};

export default function ProductCard({
  cardImage,
  cardName,
  discountedRate,
  oldRate,
  percent,
}: ProductCardProps) {
  return (
    <div className="flex flex-col gap-4 max-w-[280px] w-full mx-auto">
      {/* Card Image */}
      <img
        src={typeof cardImage === "string" ? cardImage : cardImage.src} // Handle StaticImageData and string
        className="w-full h-60 object-cover"
        alt="product"
      />

      <div className="flex flex-col gap-3 px-3">
        <p className="pt-3 font-thin text-base text-center sm:text-left">{cardName}</p>
        <p className="flex gap-3 justify-center sm:justify-start items-center">
          <span className="text-primary font-thin text-lg">{discountedRate}</span>
          <span className="text-gray-500 line-through text-sm">{oldRate}</span>
        </p>
        <p className="text-sm text-center sm:text-left text-gray-500">{percent}% off</p>
      </div>
    </div>
  );
}

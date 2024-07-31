import Image from "next/image";
import { FC } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const ServiceCard: FC<ServiceCardProps> = ({
  title,
  description,
  imageSrc,
}) => {
  return (
    <div className="bg-white md:min-w-[580px] h-[343px] rounded-[45px] overflow-hidden relative">
      <div className="flex gap-5 px-5 py-8 md:p-10">
        <div className="flex flex-col items-center gap-1">
          <div className="bg-bs-violet w-[14px] h-[14px] rounded-full"></div>
          <div className="bg-bs-violet w-px h-[242px]"></div>
        </div>
        <div className="w-full mb-0 relative">
          <h3 className="md:text-h3-bold-32 text-h5-medium-18 font-semibold">
            {title}
          </h3>
          <p className="text-small-body-regular-16 text-[#808080]">
            {description}
          </p>
          <div className="py-2"></div>
          <div className="absolute -bottom-12 w-full flex justify-center">
            <Image src={imageSrc} alt={title} width={222} height={212} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

// Import Swiper React components
import { MoneyIcon, SendIcon } from "@/icons";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
// import "swiper/swiper-bundle.min.css";

// interface CarouselProps {
//   services: any;
// }

// const Carousel: FC<CarouselProps> = ({ services }) => {
//   return (
//     <div className="px-6 md:px-48 space-y-10 pt-10">
//       <Swiper
//         spaceBetween={30}
//         slidesPerView={1}
//         pagination={{ clickable: true }}
//         breakpoints={{
//           640: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//       >
//         <SwiperSlide>
//           <div className="flex w-full gap-3 items-center">
//             <div>
//               <div className="bg-[#F2EDFF] h-[82px] w-[82px] rounded-full"></div>
//             </div>
//             <div>
//               <div className="font-bold">Send</div>
//               <span className="font">
//                 Send Buy Share Effortlessly transfer airtime and data to
//                 multiple contacts in seconds.
//               </span>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="flex w-full gap-3 items-center">
//             <div>
//               <div className="bg-[#F2EDFF] h-[82px] w-[82px] rounded-full"></div>
//             </div>
//             <div>
//               <div className="font-bold">Buy</div>
//               Purchase airtime, data, and pay utility bills like electricity and
//               DStv seamlessly.
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="flex w-full gap-3 items-center">
//             <div>
//               <div className="bg-[#F2EDFF] h-[82px] w-[82px] rounded-full"></div>
//             </div>
//             <div>
//               <div className="font-bold">Share</div>
//               Convert and share airtime to cash or share with others easily.
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// const services = [
//   {
//     title: "Send",
//     description:
//       "Send Buy Share Effortlessly transfer airtime and data to multiple contacts in seconds.",
//     imageSrc: "path/to/image1",
//   },
//   {
//     title: "Buy",
//     description:
//       "Purchase airtime, data, and pay utility bills like electricity and DStv seamlessly.",
//     imageSrc: "path/to/image2",
//   },
//   {
//     title: "Share",
//     description:
//       "Convert and share airtime to cash or share with others easily.",
//     imageSrc: "path/to/image3",
//   },
// ];

const SendBuyShare = () => {
  return (
    // <Carousel services={services} />
    <div className="grid grid-cols-1 md:grid-cols-3  gap-10 text-small-body-regular-16">
      <div className="flex w-full gap-3 items-center">
        <div>
          <div className="bg-[#F2EDFF] h-[82px] w-[82px] rounded-full flex items-center justify-center">
            <SendIcon lassName="w-full" />
          </div>
        </div>
        <div>
          <div className="font-bold">Send</div>
          <span className="font">
            Send Buy Share Effortlessly transfer airtime and data to multiple
            contacts in seconds.
          </span>
        </div>
      </div>
      <div className="flex w-full gap-3 items-center">
        <div>
          <div className="bg-[#F2EDFF] h-[82px] w-[82px] rounded-full flex items-center justify-center">
            <MoneyIcon className="w-full"  />
          </div>
        </div>
        <div>
          <div className="font-bold">Buy</div>
          Purchase airtime, data, and pay utility bills like electricity and
          DStv seamlessly.
        </div>
      </div>
      <div className="flex w-full gap-3 items-center">
        <div>
          <div className="bg-[#F2EDFF] h-[82px] w-[82px] rounded-full flex items-center justify-center">
            <SendIcon />
          </div>
        </div>
        <div>
          <div className="font-bold">Share</div>
          Convert and share airtime to cash or share with others easily.
        </div>
      </div>
    </div>
  );
};

export default SendBuyShare;

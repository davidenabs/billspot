import Image from "next/image";
import { FC } from "react";
import { Text } from "rizzui";

const DownloadBillspot = () => {
  return (
    <div className="flex justify-center items-center px16 py-20 bg-[linear-gradient(114deg,#C2ACFF_0%,#7C4DFF_93.75%)] max-md:px-5">
      <div className="flex flex-col items-center mt-3 max-w-full w[476px]">
        <div className="text-3xl md:text-4xl font-bold text-white max-md:max-w-full">
          What are you waiting for?
        </div>
        <div className="self-stretch mt-3.5 text-2xl md:text-4xl  font-bold leading-10 text-center text-white max-md:max-w-full">
          Download the <span className="text-bs-yellow">Billspot App</span> &
          <br></br>get started now
        </div>
        <div className="flex gap-2.5 justify-center p-5 mt-16 rounded-xl bg-[#2C2C2C] max-md:mt-10">
          <div className="flex gap-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c3e31120baf8a7d49ff229da7a147aba8be7016a8fbb91f49942037a519d287?apiKey=e3159558e3c24b7bb6f2db02f0873db3&&apiKey=e3159558e3c24b7bb6f2db02f0873db3"
              className="shrink-0 w-6 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6added0a9a0364fa3672a36bc8a920f1c8689ab5fecfccfb545ed4bc5f099a71?apiKey=e3159558e3c24b7bb6f2db02f0873db3&&apiKey=e3159558e3c24b7bb6f2db02f0873db3"
              className="shrink-0 w-6 aspect-square"
            />
          </div>
          <div className="my-auto text-lg font-bold leading-5 text-bs-yellow">
            Download Billspot
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadBillspot;

import React from "react";

type Props = {};

const Info = (props: Props) => {
  return (
    <>
      <div className="md:hidden flex flex-col rounded-2xl bg-gradient-to-br from-[#f7ce68] to-[#fbab7e] w-full h-[100px] p-5 space-y3 relative overflow-hidden">
        <div className="w-[106px] h-[78px] absolute left-56 top-[24px] overflow-hidden">
          <svg
            width={106}
            height={60}
            viewBox="0 0 106 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-[-1px] top-[17px]"
            preserveAspectRatio="xMidYMid meet"
          >
            <circle cx={53} cy={53} r={53} fill="#F2EDFF" />
          </svg>
          <div className="w-[60px] h-[135px] absolute left-[21px] top-px rounded-[9px] bg-[#7c4dff] border-[3px] border-black" />
          <p className="absolute left-7 top-[23px] text-[49px] font-bold text-left text-[#7c4dff]">
            ⚡️
          </p>
          <div className="w-[47px] h-[5px] absolute left-7 top-2.5 rounded-[30px] bg-[#b094ff]" />
          <div className="w-3 h-[5px] absolute left-7 top-[17px] rounded-[30px] bg-[#b094ff]" />
          <div className="w-[33px] h-[5px] absolute left-[42px] top-[17px] rounded-[30px] bg-[#b094ff]" />
        </div>
        <div className="flex flex-col justify-start items-start gap-0.5">
          <p className="text-lg font-bold text-left text-[#1d1d1d]">
            Pay Bills Utility Bills
          </p>
          <p className="w-[215px] text-xs text-left text-[#2c2c2c]">
            Never run out of cable tv subscriptions, electricity etc no charges.
          </p>
        </div>
      </div>

      <div className="md:hidden flex flex-col rounded-2xl bg-gradient-to-br from-[#85ffbd] to-[#fffb7d] w-full h-[100px] p-5 space-y3 relative overflow-hidden">
        {/* <div className="w-[106px] h-[78px] absolute left-56 top-[24px] overflow-hidden">
              <svg
                width={106}
                height={60}
                viewBox="0 0 106 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[-1px] top-[17px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle cx={53} cy={53} r={53} fill="#F2EDFF" />
              </svg>
              <div className="w-[60px] h-[135px] absolute left-[21px] top-px rounded-[9px] bg-[#7c4dff] border-[3px] border-black" />
              <p className="absolute left-7 top-[23px] text-[49px] font-bold text-left text-[#7c4dff]">
                ⚡️
              </p>
              <div className="w-[47px] h-[5px] absolute left-7 top-2.5 rounded-[30px] bg-[#b094ff]" />
              <div className="w-3 h-[5px] absolute left-7 top-[17px] rounded-[30px] bg-[#b094ff]" />
              <div className="w-[33px] h-[5px] absolute left-[42px] top-[17px] rounded-[30px] bg-[#b094ff]" />
            </div> */}

        <div className="">
          <img
            className="absolute left-[275.5px] top-[420.5px] w-6"
            src="/images/mtn.png"
          />
          <img
            className="absolute left-[312.5px] top-[447.5px] w-6"
            src="/images/mtn.png"
          />
          <img
            className="absolute left-[321.5px] top-[405.5px] w-6"
            src="/images/mtn.png"
          />
        </div>

        <div className="flex flex-col justify-start items-start gap-0.5">
          <p className="text-lg font-bold text-left text-[#1d1d1d]">
            Buy and Sell Airtime
          </p>
          <p className="w-[215px] text-xs text-left text-[#2c2c2c]">
            Never run out of cable tv subscriptions, electricity etc no charges.
          </p>
        </div>
      </div>
    </>
  );
};

export default Info;

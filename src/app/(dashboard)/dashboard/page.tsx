import * as React from "react";

export default function DashboardHomePage() {
  return (
    <div className="w-full flex items-center py-20 p-12">
      <div className="text-[32px] text-left text-[#1d1d1d]">
        <span className="text-[32px] font-bold text-left text-[#1d1d1d]">
          Hello
        </span>
        <span className="text-[32px] font-medium text-left text-[#1d1d1d]">
          {" "}
        </span>
        <span className="text-[32px] text-left text-[#1d1d1d]">Kizito,</span>
        <span className="text-[32px] font-medium text-left text-[#1d1d1d]">
          {" "}
          👋🏼
        </span>
      </div>
        <div className="flex justify-center items-center  gap-[21px]">
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
            <svg
              width={20}
              height={21}
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M7.5 16.3334C7.5 17.0334 7.60833 17.7167 7.80833 18.3501C4.60833 17.2417 2.19167 14.3001 1.94167 10.8584C1.69167 7.20006 3.8 3.78339 7.20833 2.35006C8.09167 1.98339 8.54167 2.25006 8.73333 2.44172C8.91667 2.62506 9.175 3.06672 8.80833 3.90839C8.43333 4.77506 8.25 5.69172 8.25 6.64172C8.25833 8.34172 8.925 9.91672 10.0083 11.1251C8.48333 12.3417 7.5 14.2251 7.5 16.3334Z"
                fill="#2C2C2C"
              />
              <path
                opacity="0.4"
                d="M17.675 15.2667C16.025 17.5083 13.4083 18.825 10.6167 18.825C10.4833 18.825 10.35 18.8167 10.2167 18.8083C9.38333 18.775 8.575 18.6167 7.80833 18.35C7.60833 17.7167 7.5 17.0333 7.5 16.3333C7.5 14.225 8.48333 12.3417 10.0083 11.125C11.2333 12.5 12.9917 13.3917 14.9333 13.475C15.4583 13.5 15.9833 13.4583 16.5 13.3667C17.4333 13.2 17.8083 13.55 17.9417 13.775C18.0833 14 18.2333 14.4917 17.675 15.2667Z"
                fill="#2C2C2C"
              />
            </svg>
            <p className="flex-grow-0 flex-shrink-0 text-lg font-medium text-left text-[#2c2c2c]">
              Dark mode
            </p>
          </div>
          <svg
            width={41}
            height={21}
            viewBox="0 0 41 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-[41px] h-5"
            preserveAspectRatio="none"
          >
            <rect y="0.5" width={41} height={20} rx={10} fill="#D4D2D8" />
            <circle cx={10} cy="10.5" r={9} fill="white" />
          </svg>
        </div>
        <svg
          width={28}
          height={29}
          viewBox="0 0 28 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            opacity="0.4"
            d="M22.5633 17.405L21.3967 15.4683C21.1517 15.0366 20.93 14.22 20.93 13.7416V10.79C20.93 6.98663 17.8383 3.8833 14.0233 3.8833C10.2083 3.8833 7.11668 6.98663 7.11668 10.79V13.7416C7.11668 14.22 6.89501 15.0366 6.65001 15.4566L5.47168 17.405C5.00501 18.1866 4.90001 19.05 5.19168 19.8433C5.47168 20.625 6.13668 21.2316 7.00001 21.5233C9.26335 22.2933 11.6433 22.6666 14.0233 22.6666C16.4033 22.6666 18.7833 22.2933 21.0467 21.535C21.8633 21.2666 22.4933 20.6483 22.7967 19.8433C23.1 19.0383 23.0183 18.1516 22.5633 17.405Z"
            fill="#808080"
          />
          <path
            d="M16.625 4.37325C15.82 4.05825 14.945 3.88325 14.0234 3.88325C13.1134 3.88325 12.2383 4.04659 11.4333 4.37325C11.935 3.42825 12.9267 2.83325 14.0234 2.83325C15.1317 2.83325 16.1117 3.42825 16.625 4.37325Z"
            fill="#808080"
          />
          <path
            d="M17.3016 23.8449C16.8116 25.1983 15.5166 26.1666 14 26.1666C13.0783 26.1666 12.1683 25.7933 11.5266 25.1283C11.1533 24.7783 10.8733 24.3116 10.71 23.8333C10.8616 23.8566 11.0133 23.8683 11.1766 23.8916C11.445 23.9266 11.725 23.9616 12.005 23.9849C12.67 24.0433 13.3466 24.0783 14.0233 24.0783C14.6883 24.0783 15.3533 24.0433 16.0066 23.9849C16.2516 23.9616 16.4966 23.9499 16.73 23.9149C16.9166 23.8916 17.1033 23.8683 17.3016 23.8449Z"
            fill="#808080"
          />
          <circle cx={20} cy={9} r="5.5" fill="#C20052" stroke="white" />
        </svg>
        <div className="w-[77px] h-[51px]">
          <img className="" src="ellipse-28.png" />
          <svg
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[18px] h-[18px] "
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M2.49761 6.75004C2.49761 6.89254 2.55011 7.03504 2.66261 7.14754L7.55261 12.0375C8.34761 12.8325 9.65261 12.8325 10.4476 12.0375L15.3376 7.14754C15.5551 6.93004 15.5551 6.57004 15.3376 6.35254C15.1201 6.13504 14.7601 6.13504 14.5426 6.35254L9.65261 11.2425C9.29261 11.6025 8.70761 11.6025 8.34761 11.2425L3.45761 6.35254C3.24011 6.13504 2.88011 6.13504 2.66261 6.35254C2.55761 6.46504 2.49761 6.60754 2.49761 6.75004Z"
              fill="#808080"
            />
          </svg>
        </div>
    </div>
  );
}

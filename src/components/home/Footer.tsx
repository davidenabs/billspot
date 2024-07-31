import Button from "../forms/button";

const Footer = () => {
  return (
    <div className="flex justify-center items-center px-16 py-20 bg-[linear-gradient(114deg,#080808_0%,#1F1F1F_100%)] max-md:px-5">
      <div className="flex flex-col w-full max-w-[1071px] max-md:max-w-full">
        <div className="grid md:grid-cols-2 gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col max-md:max-w-full">
            <div className="text-2xl md:text-3xl font-bold text-white max-md:max-w-full">
              Join over 5K+ Customers
            </div>
            <div className="mt-6 text-xl leading-6 text-zinc-500 max-md:max-w-full">
              Join the thousands of users worldwide using Billspot to carry out
              safe and secure digital transactions. We are ready to welcome you.
            </div>
          </div>
          <div className="flex md:justify-end items-center">
            <Button className="!py- text-lg font-bold leading-5 text-bs-yellow bg-bs-violet rounded-lg max-md:px-5">
              Sign up for free
            </Button>
          </div>
        </div>
        <div className="w-full h-px bg-[#808080] my-10"></div>
        <div className="max-w-full w-[497px] md:mt-10">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
              <img
                src="/images/billspot-logo.png"
                className="shrink-0 w-28 max-w-full aspect-[2.04] max-md:mt-10"
              />
            </div>
            <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
              <div className="flex grow gap-5 text-sm text-white max-md:mt-10">
                <div className="flex flex-col flex-1">
                  <div className="text-xl font-bold">Refill</div>
                  <a
                    href="#"
                    className="mt-3.5 text-white hover:text-gray-400 transition-colors duration-200"
                  >
                    Airtime to Cash
                  </a>
                  <a
                    href="#"
                    className="mt-3.5 text-white hover:text-gray-400 transition-colors duration-200"
                  >
                    Pay Electricity Bill
                  </a>
                  <a
                    href="#"
                    className="mt-3.5 text-white hover:text-gray-400 transition-colors duration-200 max-md:mr-2"
                  >
                    Pay Cable Tv Bills
                  </a>
                  <a
                    href="#"
                    className="mt-3.5 text-white hover:text-gray-400 transition-colors duration-200"
                  >
                    Buy Cheap Airtime
                  </a>
                  <a
                    href="#"
                    className="mt-3.5 text-white hover:text-gray-400 transition-colors duration-200"
                  >
                    Buy Cheap Data
                  </a>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="text-xl font-bold">Resources</div>
                  <a
                    href=""
                    className="mt-3.5 text-white hover:text-gray-400 transition-colors duration-200"
                  >
                    Blog
                  </a>
                  <a
                    href=""
                    className="mt-3.5 text-white hover:text-gray-400 transition-colors duration-200"
                  >
                    Support & Footers
                  </a>
                  <a
                    href=""
                    className="mt-3.5 text-white hover:text-gray-400 transition-colors duration-200"
                  >
                    Contact us
                  </a>
                  <a
                    href=""
                    className="mt-3.5 text-white hover:text-gray-400 transition-colors duration-200"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href=""
                    className="mt-3.5 text-white hover:text-gray-400 transition-colors duration-200"
                  >
                    Terms of use
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import Button from "../forms/button";

const Hero = () => {
  return (
    <div className="mx-aut">
      <div className="relative w-full px-4 sm:px-6 lg:px-32">
        <div className="flex flex-col lg:flex-row justifycenter items-center">
          <div className="flex flex-col mt-36 max-w-full w-[726px] max-md:mt-10">
            <div className="text-4xl md:text-5xl leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[55px] md:text-center text-left lg:text-left">
              Simplify Your Digital Transactions with Billspot
            </div>
            <div className="mt-5 text-base md:text-xl font-medium max-md:max-w-full md:text-center text-left lg:text-left">
              Manage airtime, data, bill payments, and more with ease.
              Experience convenience at your fingertips.
            </div>
            <div className="flex gap-10 lg:justify-start items-center mt-9">
              <Button className="h-[58px] font-bold w-[185px] text-lg">
                Register now
              </Button>
              {/* <a href="#" className="text-base">Login</a> */}
              <Button className="h-[58px] md:hidden !text-black !bg-transparent font-bold text-lg">
                Login
              </Button>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <img
              className="right1/4  absolute xl:-bottom-[37.7%] xl:right-36 w-[409px] xl:w-[669px] xl:h-[564px]"
              src="/images/hand-holding-phone.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

const HeroSection = () => {
  return (
    <>
      <div className="relative">
        {/* <div className="absolute bottom-0 right-0 overflow-hidden lg:inset-y-0">
          <img
            className="w-auto h-full"
            src="https://d33wubrfki0l68.cloudfront.net/1e0fc04f38f5896d10ff66824a62e466839567f8/699b5/images/hero/3/background-pattern.png"
            alt=""
          />
        </div> */}

        <section className="relative py-12 sm:py-16 lg:py-20 lg:pb-36">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center gap-y-12 lg:gap-x-8 min-h-screen">
              <div className="flex justify-center items-start">
                <div className="text-center lg:text-left">
                  <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj">
                    No More Manual Entry – Let AI Organize Your Expenses
                  </h1>
                  <p className="mt-2 text-lg text-white sm:mt-8 font-inter">
                    Plain English → Perfect Records. Let AI decode your spending
                    automatically.
                  </p>
                  <div className="relative p-2 w-4/5">
                    <div className="mt-8 flex justify-start items-center">
                      <a
                        href="/signup"
                        className="inline-flex px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-orange-600 rounded-lg focus:outline-none focus:bg-gray-600 font-pj hover:bg-gray-600"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HeroSection;

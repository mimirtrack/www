const HeroText = () => (
  <div className="px-4 mx-auto mt-8 max-w-screen-xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-2">
    <div className="text-center">
      <h1 className="text-5xl font-extrabold tracking-tight leading-10 sm:leading-none md:text-6xl">
        Game Tracking. <br className="xl:hidden" />
        <span className="text-theme-orange">Made Simple.</span>
      </h1>
      <p className="max-w-md font-light mx-auto mt-3 text-base text-gray-200 sm:text-xl md:mt-5 md:text-2xl md:max-w-3xl">
        Mimir tracks the games you are playing and provides you with detailed
        statistics about your playtime.
      </p>
    </div>
  </div>
);

export default HeroText;

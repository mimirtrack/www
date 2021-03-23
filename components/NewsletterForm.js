const NewsletterForm = () => (
  <div class="relative max-w-screen-xl mx-auto px-4 lg:px-14 py-12 sm:px-6 lg:py-16">
    <div class="px-6 py-6 bg-theme-orange rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-10 lg:flex lg:items-center lg:justify-between">
      <div class="xl:w-0 xl:flex-1">
        <h2 class="text-2xl font-semibold sm:text-3xl sm:leading-9">
          Be the first to know when we launch!
        </h2>
        <p class="mt-3 max-w-lg text-lg text-gray-200">
          Sign up for our newsletter to stay up to date
        </p>
      </div>
      <div class="mt-6 sm:w-full md:max-w-md xl:mt-0 xl:ml-8">
        <form class="sm:flex">
          <input
            type="email"
            aria-label="Email address"
            required=""
            class="appearance-none w-full px-5 py-3 border border-transparent text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 transition duration-150 ease-in-out"
            placeholder="Enter your email"
            value=""
          />
          <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-theme-purple hover:bg-theme-purple-hover focus:outline-none focus:bg-indigo-400 transition duration-150 ease-in-out">
              Sign me up
            </button>
          </div>
        </form>
        <p class="mt-3 text-sm leading-5 text-gray-200">
          Your email will only be used to let you know about Mimir updates. You
          can unsubscribe at any time.
        </p>
      </div>
    </div>
  </div>
);

export default NewsletterForm;

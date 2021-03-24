import { useState } from "react";

const isValidEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(
    "Your email will only be used to let you know about Mimir updates. You can unsubscribe at any time."
  );

  const subscribe = async (event) => {
    event.preventDefault();

    if (!isValidEmail(email)) {
      setMessage("Please enter a valid email.");
      return;
    }

    const response = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await response.json();

    if (error) {
      setMessage(error);
      return;
    }

    setEmail("");
    setMessage(
      "Success 🎉 Please check your inbox to confirm the subscription"
    );
  };

  return (
    <div className="relative max-w-screen-xl mx-auto px-4 lg:px-14 py-12 sm:px-6 lg:py-16">
      <div className="px-6 py-6 bg-theme-orange rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-10 lg:flex lg:items-center lg:justify-between">
        <div className="xl:w-0 xl:flex-1">
          <h2 className="text-2xl font-semibold sm:text-3xl sm:leading-9">
            Be the first to know when we launch!
          </h2>
          <p className="mt-3 max-w-lg text-lg text-gray-200">
            Sign up for our newsletter to stay up to date
          </p>
        </div>
        <div className="mt-6 sm:w-full md:max-w-md xl:mt-0 xl:ml-8">
          <form className="sm:flex">
            <input
              type="email"
              aria-label="Email address"
              className="appearance-none w-full px-5 py-3 border border-transparent text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 transition duration-150 ease-in-out"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                onClick={subscribe}
                className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-theme-purple hover:bg-theme-purple-hover focus:outline-none focus:bg-indigo-400 transition duration-150 ease-in-out"
              >
                Sign me up
              </button>
            </div>
          </form>
          <p className="mt-3 text-sm leading-5 text-gray-200">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterForm;

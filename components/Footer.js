const Footer = () => (
  <footer className="border-t-2 mx-8 md:mx-16 mt-8 py-6 px-2 border-theme-orange">
    <div className="flex w-full justify-between">
      <img
        src="/images/logo-full-white.png"
        className="w-32 h-full"
        alt="Mimir Viking Helmet Logo"
      />
      <div className="flex">
        <p>
          <a
            href="mailto:hello@mimir.gg"
            className="no-underline hover:underline pr-2"
          >
            Contact
          </a>
        </p>
        <p>
          <a href="#" className="no-underline hover:underline pl-2">
            Privacy
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

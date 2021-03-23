import HeroText from "components/HeroText";
import MarketingProse from "components/MarketingProse";
import Header from "components/Header";
import Footer from "components/Footer";
import NewsletterForm from "components/NewsletterForm";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <HeroText />
        <NewsletterForm />
        <MarketingProse />
      </main>
      <Footer />
    </div>
  );
}

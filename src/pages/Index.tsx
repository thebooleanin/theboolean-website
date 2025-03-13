
import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeaturedArticles from "@/components/FeaturedArticles";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <PageTransition>
        <Hero />
        <Services />
        <FeaturedArticles />
        <AboutSection />
        <ContactSection />
        <NewsletterSignup />
        <Footer />
      </PageTransition>
    </>
  );
};

export default Index;


import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import NewsletterSignup from "@/components/NewsletterSignup";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const About = () => {
  return (
    <>
      <Navbar />
      <PageTransition>
        <div className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl md:text-5xl font-bold mb-6 font-display"
              >
                About 
                <span className={cn(
                  "relative inline-block px-1",
                  "after:absolute after:bottom-2 md:after:bottom-3 after:left-0 after:w-full after:h-3 after:bg-accent/50 after:-z-10"
                )}>
                  theboolean
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-lg md:text-xl text-muted-foreground text-balance"
              >
                Where Technology, Automotive, and Cycling News Come Together
              </motion.p>
            </div>
          </div>
          
          <div className="absolute top-1/3 -right-20 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/3 -left-20 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl"></div>
        </div>
        
        <AboutSection />
        <Services />
        <div className="section-padding">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-6 font-display text-center"
              >
                Our Story
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="prose prose-lg max-w-none text-muted-foreground"
              >
                <p>
                  theboolean was founded in 2020 with a simple mission: to provide expertly curated content at the intersection of technology, automotive innovation, and cycling. What started as a passion project quickly evolved into a trusted source of news, insights, and analysis.
                </p>
                <p>
                  Our team of writers, editors, and industry experts are committed to delivering accurate, engaging, and forward-thinking content. We believe in the power of information to inspire innovation and drive progress.
                </p>
                <p>
                  As our slogan states, "For tomorrow Today we are working." This reflects our commitment to staying ahead of trends, anticipating the future, and bringing our readers the most relevant information today that will shape tomorrow's landscape.
                </p>
                <p>
                  Whether you're a tech enthusiast, automotive aficionado, or cycling devotee, theboolean offers a unique perspective that bridges these worlds, finding the common threads that connect them in our increasingly interconnected digital age.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
        <NewsletterSignup />
        <Footer />
      </PageTransition>
    </>
  );
};

export default About;

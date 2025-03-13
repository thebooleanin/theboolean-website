
import { useState } from "react";
import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
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
                Get in
                <span className={cn(
                  "relative inline-block px-1",
                  "after:absolute after:bottom-2 md:after:bottom-3 after:left-0 after:w-full after:h-3 after:bg-accent/50 after:-z-10"
                )}>
                  Touch
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-lg md:text-xl text-muted-foreground text-balance"
              >
                Have a question or want to work with us? We'd love to hear from you.
              </motion.p>
            </div>
          </div>
          
          <div className="absolute top-1/3 -right-20 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/3 -left-20 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="section-padding">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="glass-panel p-6 rounded-2xl text-center hover-lift"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-secondary mb-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Our Location</h3>
                  <p className="text-muted-foreground">
                    123 Innovation Street<br />
                    Tech District, CA 94103<br />
                    United States
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="glass-panel p-6 rounded-2xl text-center hover-lift"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-secondary mb-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Phone</h3>
                  <p className="text-muted-foreground mb-1">
                    <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                      +1 (234) 567-890
                    </a>
                  </p>
                  <p className="text-muted-foreground">
                    <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                      +1 (234) 567-891
                    </a>
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="glass-panel p-6 rounded-2xl text-center hover-lift"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-secondary mb-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground mb-1">
                    <a href="mailto:info@theboolean.com" className="hover:text-primary transition-colors">
                      info@theboolean.com
                    </a>
                  </p>
                  <p className="text-muted-foreground">
                    <a href="mailto:support@theboolean.com" className="hover:text-primary transition-colors">
                      support@theboolean.com
                    </a>
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        
        <ContactSection />
        <Footer />
      </PageTransition>
    </>
  );
};

export default Contact;

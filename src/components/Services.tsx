
import { motion } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import ServiceItem from "./ServiceItem";

const Services = () => {
  const services = [
    {
      icon: "🚀",
      title: "Digital Transformation",
      description: "We help businesses transform their digital presence with cutting-edge technology and innovative solutions.",
      accentColor: "bg-gradient-to-br from-blue-400 to-indigo-600"
    },
    {
      icon: "🎨",
      title: "Web Development",
      description: "Custom web solutions built with modern frameworks and cutting-edge technologies for optimal performance.",
      accentColor: "bg-gradient-to-br from-violet-500 to-purple-600"
    },
    {
      icon: "📱",
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps designed for exceptional user experience and performance.",
      accentColor: "bg-gradient-to-br from-pink-500 to-rose-500"
    },
    {
      icon: "📊",
      title: "Data Analytics",
      description: "Transform your raw data into actionable insights with our advanced analytics and visualization solutions.",
      accentColor: "bg-gradient-to-br from-emerald-400 to-teal-600"
    },
    {
      icon: "🔍",
      title: "SEO Optimization",
      description: "Enhance your online visibility and reach your target audience with our proven SEO strategies.",
      accentColor: "bg-gradient-to-br from-amber-400 to-orange-600"
    },
    {
      icon: "📰",
      title: "Content Strategy",
      description: "Comprehensive content planning and creation services across technology, automotive, and cycling sectors.",
      accentColor: "bg-gradient-to-br from-sky-400 to-blue-600"
    }
  ];

  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="section-padding relative overflow-hidden" ref={sectionRef} id="services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-3"
          >
            <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
              Services We Offer
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4 font-display text-balance"
          >
            Transforming Businesses with
            <span className={cn(
              "relative inline-block px-2",
              "after:absolute after:bottom-1 after:left-0 after:w-full after:h-3 after:bg-primary/20 after:-z-10"
            )}>
              Cutting-Edge Solutions
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance"
          >
            We deliver exceptional digital experiences through our comprehensive range of services tailored to your specific needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceItem 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index + 1}
              accentColor={service.accentColor}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a 
            href="/contact" 
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 -left-20 w-64 h-64 bg-violet-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-1/2 w-1/2 h-1/2 bg-secondary/5 rounded-full filter blur-3xl -translate-x-1/2"></div>
    </section>
  );
};

export default Services;

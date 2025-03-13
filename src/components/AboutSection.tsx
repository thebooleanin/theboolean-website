
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const statsItems = [
  { number: "5+", label: "Years Experience" },
  { number: "200+", label: "Articles Published" },
  { number: "50K+", label: "Monthly Readers" },
  { number: "10+", label: "Awards Won" },
];

const AboutSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                  alt="The Boolean Team at work" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-2/3 aspect-square rounded-2xl overflow-hidden border-4 border-background shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                  alt="Close-up of work" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-xl -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-xl -z-10"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-3">
              <span className="px-3 py-1 text-xs font-medium bg-secondary text-primary rounded-full">
                About theboolean
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display max-w-md text-balance">
              We're a team of 
              <span className={cn(
                "relative inline-block px-1",
                "after:absolute after:bottom-1 after:left-0 after:w-full after:h-2 after:bg-accent/50 after:-z-10"
              )}>
                passionate
              </span>
              tech enthusiasts
            </h2>
            <p className="text-muted-foreground mb-6">
              Founded with a vision to bridge the gap between technology, automotive innovation, and cycling, theboolean has grown into a trusted source of news and analysis across multiple domains.
            </p>
            <p className="text-muted-foreground mb-8">
              Our team of expert writers and industry insiders work tirelessly to bring you the most relevant and insightful content. We believe in thorough research, honest reporting, and making complex technological concepts accessible to everyone.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
              {statsItems.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">{item.number}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>

            <a
              href="/about"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Our Story
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

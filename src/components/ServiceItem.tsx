
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ServiceItemProps {
  title: string;
  description: string;
  icon: string;
  delay: number;
  accentColor?: string;
}

const ServiceItem = ({ 
  title, 
  description, 
  icon, 
  delay, 
  accentColor = "bg-gradient-to-br from-primary/90 to-secondary/90" 
}: ServiceItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
      className="glass-panel relative p-8 rounded-2xl overflow-hidden group hover-lift"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br from-primary to-secondary" />
      
      <div className={cn(
        "inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6",
        accentColor
      )}>
        <span className="text-3xl">{icon}</span>
      </div>
      
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
      
      <div className="mt-6 pt-4 border-t border-border/30">
        <a href="#" className="text-sm font-medium text-primary flex items-center">
          Learn more
          <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default ServiceItem;

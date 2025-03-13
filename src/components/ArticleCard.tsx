
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ArticleProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  minuteRead: number;
}

interface ArticleCardProps {
  article: ArticleProps;
  featured?: boolean;
  index?: number;
}

const ArticleCard = ({ article, featured = false, index = 0 }: ArticleCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group overflow-hidden rounded-2xl border border-border bg-card hover-lift",
        featured ? "md:col-span-2" : ""
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/blog/${article.id}`} className="block">
        <div className={cn(
          "relative overflow-hidden w-full",
          featured ? "h-64 md:h-80" : "h-52"
        )}>
          <motion.div
            className="absolute inset-0 bg-black/10 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
            animate={{ 
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.7 }}
          />
          <div className="absolute top-4 left-4 z-20">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
              {article.category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center mb-3 text-sm text-muted-foreground">
            <div className="flex items-center">
              <img 
                src={article.author.avatar} 
                alt={article.author.name}
                className="w-6 h-6 rounded-full mr-2"
              />
              <span>{article.author.name}</span>
            </div>
            <span className="mx-2">•</span>
            <span>{article.date}</span>
            <span className="mx-2">•</span>
            <span>{article.minuteRead} min read</span>
          </div>
          <h3 className={cn(
            "font-display font-semibold mb-2 text-foreground group-hover:text-primary transition-colors",
            featured ? "text-2xl" : "text-xl"
          )}>
            {article.title}
          </h3>
          <p className="text-muted-foreground">{article.excerpt}</p>
        </div>
      </Link>
    </motion.article>
  );
};

export default ArticleCard;

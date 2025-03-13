
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import ArticleCard, { ArticleProps } from "./ArticleCard";

// Sample data (in a real app, this would come from an API)
const articles: ArticleProps[] = [
  {
    id: "tesla-model-3-refresh",
    title: "Tesla Model 3 Refresh: Everything You Need to Know",
    excerpt: "Tesla's most popular vehicle gets a significant update with improved range, interior, and more.",
    category: "Automotive",
    date: "May 15, 2023",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    author: {
      name: "Alex Johnson",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    minuteRead: 8
  },
  {
    id: "apple-vision-pro",
    title: "Hands-On with Apple Vision Pro: The Future of Spatial Computing",
    excerpt: "We spent a week with Apple's revolutionary new device and here's what we discovered.",
    category: "Tech",
    date: "June 2, 2023",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    author: {
      name: "Sarah Chen",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    minuteRead: 12
  },
  {
    id: "tour-de-france-2023",
    title: "Tour de France 2023: Route Analysis and Favorites",
    excerpt: "An in-depth look at this year's challenging route and the top contenders for the yellow jersey.",
    category: "Cycling",
    date: "June 10, 2023",
    image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182",
    author: {
      name: "Thomas Dubois",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg"
    },
    minuteRead: 10
  },
  {
    id: "ai-revolution",
    title: "The AI Revolution in Content Creation",
    excerpt: "How artificial intelligence is transforming how we create and consume digital content.",
    category: "Tech",
    date: "May 28, 2023",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    author: {
      name: "Michelle Wong",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg"
    },
    minuteRead: 7
  },
  {
    id: "electric-bikes-comparison",
    title: "The Ultimate Electric Bike Comparison for 2023",
    excerpt: "We tested the top e-bikes on the market to help you find your perfect ride.",
    category: "Cycling",
    date: "June 5, 2023",
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890",
    author: {
      name: "David Miller",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    minuteRead: 9
  }
];

const tabs = [
  { id: "all", label: "All" },
  { id: "tech", label: "Tech" },
  { id: "automotive", label: "Automotive" },
  { id: "cycling", label: "Cycling" }
];

const FeaturedArticles = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredArticles = activeTab === "all" 
    ? articles 
    : articles.filter(article => article.category.toLowerCase() === activeTab);

  return (
    <section className="section-padding relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-3"
            >
              <span className="px-3 py-1 text-xs font-medium bg-secondary text-primary rounded-full">
                Featured Content
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-4 md:mb-0 font-display text-balance"
            >
              Latest
              <span className={cn(
                "relative inline-block px-1",
                "after:absolute after:bottom-1 after:left-0 after:w-full after:h-2 after:bg-accent/50 after:-z-10"
              )}>
                Articles
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex space-x-1 overflow-x-auto pb-2 md:pb-0 no-scrollbar"
          >
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-full transition-colors whitespace-nowrap",
                  activeTab === tab.id 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-secondary text-primary hover:bg-secondary/80"
                )}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article, index) => (
            <ArticleCard 
              key={article.id} 
              article={article} 
              featured={index === 0} 
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <Link 
            to="/blog" 
            className="inline-flex items-center justify-center h-11 px-8 py-2 rounded-md bg-secondary text-primary font-medium hover:bg-secondary/80 transition-colors"
          >
            View All Articles
          </Link>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-1/3 -right-20 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default FeaturedArticles;

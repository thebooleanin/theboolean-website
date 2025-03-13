
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleCard, { ArticleProps } from "@/components/ArticleCard";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Sample data (in a real app, this would come from an API)
const allArticles: ArticleProps[] = [
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
  },
  {
    id: "future-of-autonomous-vehicles",
    title: "The Future of Autonomous Vehicles: Beyond Self-Driving Cars",
    excerpt: "How autonomous technology is expanding to transform logistics, public transportation, and more.",
    category: "Automotive",
    date: "June 8, 2023",
    image: "https://images.unsplash.com/photo-1515940175183-6798529cb860",
    author: {
      name: "James Wilson",
      avatar: "https://randomuser.me/api/portraits/men/42.jpg"
    },
    minuteRead: 11
  },
  {
    id: "web-development-trends-2023",
    title: "Web Development Trends to Watch in 2023",
    excerpt: "From AI-powered tools to new frameworks, these are the trends shaping the future of web development.",
    category: "Tech",
    date: "May 20, 2023",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    author: {
      name: "Emily Rodriguez",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg"
    },
    minuteRead: 6
  },
  {
    id: "mountain-biking-beginners-guide",
    title: "A Beginner's Guide to Mountain Biking: Gear, Trails, and Techniques",
    excerpt: "Everything you need to know to get started with mountain biking, from choosing the right bike to mastering basic skills.",
    category: "Cycling",
    date: "June 12, 2023",
    image: "https://images.unsplash.com/photo-1594076349977-12edb298e546",
    author: {
      name: "Chris Taylor",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    minuteRead: 10
  },
  {
    id: "cybersecurity-essentials",
    title: "Cybersecurity Essentials for the Modern Business",
    excerpt: "Protecting your digital assets has never been more important. Learn the key strategies to secure your business.",
    category: "Tech",
    date: "May 25, 2023",
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1",
    author: {
      name: "Robert Chang",
      avatar: "https://randomuser.me/api/portraits/men/53.jpg"
    },
    minuteRead: 8
  },
  {
    id: "classic-car-restoration",
    title: "The Art of Classic Car Restoration: Preserving Automotive History",
    excerpt: "A deep dive into the meticulous process of restoring vintage automobiles to their former glory.",
    category: "Automotive",
    date: "June 15, 2023",
    image: "https://images.unsplash.com/photo-1554744512-d6c603f27c54",
    author: {
      name: "Michael Brown",
      avatar: "https://randomuser.me/api/portraits/men/81.jpg"
    },
    minuteRead: 12
  }
];

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [articles, setArticles] = useState<ArticleProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const articlesPerPage = 6;

  const categoryParam = searchParams.get("category")?.toLowerCase();
  
  useEffect(() => {
    let filteredArticles = categoryParam 
      ? allArticles.filter(article => article.category.toLowerCase() === categoryParam)
      : allArticles;
    
    setTotalPages(Math.ceil(filteredArticles.length / articlesPerPage));
    
    // Get current page articles
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    setArticles(filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle));
  }, [categoryParam, currentPage]);
  
  const categories = [
    { id: "", label: "All" },
    { id: "tech", label: "Tech" },
    { id: "automotive", label: "Automotive" },
    { id: "cycling", label: "Cycling" }
  ];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  const handleCategoryFilter = (categoryId: string) => {
    if (categoryId) {
      setSearchParams({ category: categoryId });
    } else {
      setSearchParams({});
    }
    setCurrentPage(1);
  };

  const pageTitle = categoryParam 
    ? `${categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1)} Articles | theboolean Blog` 
    : "Latest Articles | theboolean Blog";
  
  const pageDescription = categoryParam
    ? `Explore our latest articles about ${categoryParam} - insightful news, reviews, and analysis.`
    : "Explore the latest news, insights, and analysis on technology, automotive, and cycling.";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://theboolean.com/blog${categoryParam ? `?category=${categoryParam}` : ''}`} />
        <link rel="canonical" href={`https://theboolean.com/blog${categoryParam ? `?category=${categoryParam}` : ''}`} />
      </Helmet>
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
                Our
                <span className={cn(
                  "relative inline-block px-1",
                  "after:absolute after:bottom-2 md:after:bottom-3 after:left-0 after:w-full after:h-3 after:bg-accent/50 after:-z-10"
                )}>
                  Blog
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-lg md:text-xl text-muted-foreground text-balance"
              >
                The latest news, insights, and analysis on technology, automotive, and cycling.
              </motion.p>
            </div>
          </div>
          
          <div className="absolute top-1/3 -right-20 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/3 -left-20 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="section-padding">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryFilter(category.id)}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-full transition-colors",
                    (category.id === categoryParam || (!categoryParam && category.id === ""))
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-primary hover:bg-secondary/80"
                  )}
                >
                  {category.label}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <ArticleCard 
                  key={article.id}
                  article={article}
                  index={index}
                />
              ))}
            </div>
            
            {totalPages > 1 && (
              <div className="mt-12">
                <Pagination>
                  <PaginationContent>
                    {currentPage > 1 && (
                      <PaginationItem>
                        <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} />
                      </PaginationItem>
                    )}
                    
                    {[...Array(totalPages)].map((_, index) => {
                      const page = index + 1;
                      
                      // Display first page, last page, and pages around current page
                      if (
                        page === 1 ||
                        page === totalPages ||
                        (page >= currentPage - 1 && page <= currentPage + 1)
                      ) {
                        return (
                          <PaginationItem key={page}>
                            <PaginationLink
                              isActive={page === currentPage}
                              onClick={() => handlePageChange(page)}
                            >
                              {page}
                            </PaginationLink>
                          </PaginationItem>
                        );
                      }
                      
                      // Add ellipsis
                      if (page === 2 || page === totalPages - 1) {
                        return (
                          <PaginationItem key={`ellipsis-${page}`}>
                            <PaginationEllipsis />
                          </PaginationItem>
                        );
                      }
                      
                      return null;
                    })}
                    
                    {currentPage < totalPages && (
                      <PaginationItem>
                        <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
                      </PaginationItem>
                    )}
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </PageTransition>
    </>
  );
};

export default Blog;

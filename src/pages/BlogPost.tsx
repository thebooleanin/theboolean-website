
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArticleProps } from "@/components/ArticleCard";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import NewsletterSignup from "@/components/NewsletterSignup";

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
  // Add more articles here as needed, matching the ones from Blog.tsx
];

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<ArticleProps | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<ArticleProps[]>([]);
  
  useEffect(() => {
    // In a real app, this would be an API call
    const foundArticle = allArticles.find(article => article.id === id);
    
    if (foundArticle) {
      setArticle(foundArticle);
      
      // Get related articles from the same category
      const related = allArticles
        .filter(a => a.category === foundArticle.category && a.id !== id)
        .slice(0, 3);
        
      setRelatedArticles(related);
    }
    
    // Scroll to top when article changes
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!article) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Article not found</h1>
            <p className="text-muted-foreground mb-6">The article you're looking for doesn't exist or has been removed.</p>
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all articles
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <PageTransition>
        <article className="pt-28 pb-16 md:pt-32 md:pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to all articles
              </Link>
              
              <div className="mb-8">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full mb-4">
                  {article.category}
                </span>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-display"
                >
                  {article.title}
                </motion.h1>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <img 
                      src={article.author.avatar} 
                      alt={article.author.name} 
                      className="w-10 h-10 rounded-full"
                    />
                    <span>{article.author.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{article.minuteRead} min read</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-10 rounded-2xl overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-auto object-cover aspect-[16/9]"
                />
              </div>
              
              <div className="prose prose-lg max-w-none mb-12">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                </p>
                <p>
                  Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                </p>
                <h2>Key Features and Innovations</h2>
                <p>
                  Suspendisse potenti. Praesent et lorem ipsum. Ut vel placerat est. Aenean quis pretium elit. Cras aliquet fermentum odio vel eleifend. In hac habitasse platea dictumst. Fusce luctus luctus est ut auctor.
                </p>
                <ul>
                  <li>Improve user experience with intuitive design</li>
                  <li>Enhanced performance with next-gen technology</li>
                  <li>Sustainable approach to reduce environmental impact</li>
                  <li>Seamless integration with existing ecosystems</li>
                </ul>
                <p>
                  Curabitur sit amet porttitor urna. Ut faucibus ultrices massa, nec pretium nulla porta non. Phasellus consectetur, metus a vestibulum venenatis, dui justo venenatis velit, a venenatis nulla diam id magna. Donec vitae augue non massa tristique rhoncus vel quis mauris.
                </p>
                <blockquote>
                  <p>Innovation distinguishes between a leader and a follower. It's about finding the unique approaches that set products apart in a crowded marketplace.</p>
                </blockquote>
                <h2>Looking Ahead</h2>
                <p>
                  Fusce luctus lectus ipsum, nec malesuada felis suscipit nec. Praesent eu aliquet enim, eget lacinia ante. Suspendisse id dolor tincidunt, euismod nunc nec, volutpat nibh. Sed consectetur nunc ut risus luctus, sit amet vestibulum risus interdum.
                </p>
                <p>
                  Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                </p>
              </div>
              
              <div className="flex items-center justify-between py-6 border-t border-b border-border mb-12">
                <div className="flex items-center gap-4">
                  <img 
                    src={article.author.avatar} 
                    alt={article.author.name} 
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="text-sm text-muted-foreground">Written by</p>
                    <p className="font-medium">{article.author.name}</p>
                  </div>
                </div>
                
                <button 
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Link copied to clipboard!');
                  }}
                >
                  <Share2 className="w-5 h-5" />
                  <span className="hidden sm:inline">Share</span>
                </button>
              </div>
            </div>
          </div>
        </article>
        
        {relatedArticles.length > 0 && (
          <section className="pb-20">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 font-display">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedArticles.map((article, index) => (
                    <Link 
                      key={article.id}
                      to={`/blog/${article.id}`}
                      className="group"
                    >
                      <div className="rounded-xl overflow-hidden mb-4">
                        <img 
                          src={article.image} 
                          alt={article.title} 
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{article.title}</h3>
                      <p className="text-sm text-muted-foreground">{article.excerpt}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
        
        <NewsletterSignup />
        <Footer />
      </PageTransition>
    </>
  );
};

export default BlogPost;

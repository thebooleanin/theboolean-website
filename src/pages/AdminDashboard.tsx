
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Plus, Trash2, Edit, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAdmin } from "@/hooks/useAdmin";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArticleProps } from "@/components/ArticleCard";

// Sample data (in a real app, this would be stored in a database)
const initialArticles: ArticleProps[] = [
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
];

const AdminDashboard = () => {
  const { adminEmail, logout } = useAdmin();
  const [articles, setArticles] = useState<ArticleProps[]>(initialArticles);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingArticle, setEditingArticle] = useState<ArticleProps | null>(null);
  
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [category, setCategory] = useState("Tech");
  const [image, setImage] = useState("");
  const [minuteRead, setMinuteRead] = useState(5);

  const handleEditArticle = (article: ArticleProps) => {
    setEditingArticle(article);
    setTitle(article.title);
    setExcerpt(article.excerpt);
    setCategory(article.category);
    setImage(article.image);
    setMinuteRead(article.minuteRead);
    setIsEditMode(true);
  };

  const handleNewArticle = () => {
    setEditingArticle(null);
    setTitle("");
    setExcerpt("");
    setCategory("Tech");
    setImage("https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d");
    setMinuteRead(5);
    setIsEditMode(true);
  };

  const handleSaveArticle = () => {
    if (!title || !excerpt || !category || !image) {
      toast.error("Please fill in all fields");
      return;
    }

    const now = new Date();
    const formattedDate = `${now.toLocaleString('default', { month: 'long' })} ${now.getDate()}, ${now.getFullYear()}`;
    
    // Generate slug-like ID from title
    const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '');
    
    const newArticle: ArticleProps = {
      id,
      title,
      excerpt,
      category,
      date: formattedDate,
      image,
      author: {
        name: "Admin User",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      minuteRead
    };
    
    if (editingArticle) {
      // Update existing article
      setArticles(articles.map(article => 
        article.id === editingArticle.id ? { ...newArticle, id: editingArticle.id } : article
      ));
      toast.success("Article updated successfully");
    } else {
      // Add new article
      setArticles([newArticle, ...articles]);
      toast.success("Article created successfully");
    }
    
    setIsEditMode(false);
  };

  const handleDeleteArticle = (id: string) => {
    if (confirm("Are you sure you want to delete this article?")) {
      setArticles(articles.filter(article => article.id !== id));
      toast.success("Article deleted successfully");
    }
  };

  const handleCancel = () => {
    setIsEditMode(false);
    setEditingArticle(null);
  };

  return (
    <div className="min-h-screen">
      <header className="bg-card border-b py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold">theboolean</span>
            <span className="ml-4 text-sm text-muted-foreground">Admin Panel</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">{adminEmail}</span>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={logout} 
              className="flex items-center"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Manage Articles</h1>
          {!isEditMode && (
            <Button onClick={handleNewArticle} className="flex items-center">
              <Plus className="h-4 w-4 mr-2" />
              New Article
            </Button>
          )}
        </div>

        {isEditMode ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-card rounded-lg p-6 shadow-card"
          >
            <h2 className="text-xl font-semibold mb-4">
              {editingArticle ? "Edit Article" : "Create New Article"}
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Article title"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Excerpt</label>
                <Textarea
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="Brief description"
                  rows={3}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  >
                    <option value="Tech">Tech</option>
                    <option value="Automotive">Automotive</option>
                    <option value="Cycling">Cycling</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Image URL</label>
                  <Input
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Reading Time (minutes)</label>
                  <Input
                    type="number"
                    value={minuteRead}
                    onChange={(e) => setMinuteRead(parseInt(e.target.value) || 5)}
                    min={1}
                    max={60}
                  />
                </div>
              </div>
              
              {image && (
                <div className="mt-4">
                  <p className="text-sm font-medium mb-2">Image Preview</p>
                  <img 
                    src={image} 
                    alt="Preview" 
                    className="w-full h-48 object-cover rounded-md"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d";
                    }}
                  />
                </div>
              )}
              
              <div className="flex justify-end space-x-2 pt-4">
                <Button variant="outline" onClick={handleCancel}>Cancel</Button>
                <Button onClick={handleSaveArticle}>Save Article</Button>
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="space-y-6">
            {articles.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                No articles yet. Click "New Article" to create one.
              </div>
            ) : (
              articles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-card rounded-lg overflow-hidden shadow-card flex flex-col md:flex-row"
                >
                  <div className="w-full md:w-64 h-40 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d";
                      }}
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-2">
                          {article.category}
                        </span>
                        <h3 className="text-lg font-semibold mb-1">{article.title}</h3>
                        <p className="text-muted-foreground text-sm mb-2">{article.excerpt}</p>
                        <div className="text-xs text-muted-foreground">
                          {article.date} • {article.minuteRead} min read
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="icon" onClick={() => handleEditArticle(article)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleDeleteArticle(article.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;

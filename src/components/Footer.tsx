
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import { cn } from "@/lib/utils";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Tech", href: "/blog?category=tech" },
        { label: "Automotive", href: "/blog?category=automotive" },
        { label: "Cycling", href: "/blog?category=cycling" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
      ],
    },
  ];

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="text-xl md:text-2xl font-display font-bold tracking-tight mb-6 inline-block">
              <span className="relative">
                the<span className="text-primary">boolean</span>
                <span className="absolute -top-1.5 -right-1.5 w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 text-balance">
              For tomorrow Today we are working. Bringing you the latest in tech, automotive, and cycling news.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
          
          {footerLinks.map((group, index) => (
            <div key={index}>
              <h4 className="font-medium text-foreground mb-4">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between text-muted-foreground text-sm">
          <p>© {currentYear} theboolean. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            <span className={cn(
              "relative inline-block px-1",
              "after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary/30 after:-z-10"
            )}>
              For tomorrow Today we are working
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

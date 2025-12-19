import { Heart, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
  ];

  return (
    <footer className="py-8 border-t border-border/50 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-display font-bold text-gradient">TM</span>
            <span className="text-muted-foreground text-sm">|</span>
            <span className="text-muted-foreground text-sm">Tanushree Mhatre</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>© {currentYear} Tanushree Mhatre.</span>
          
            <span>All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

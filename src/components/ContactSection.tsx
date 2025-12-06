import { Mail, MapPin, Phone, Instagram, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: Github, label: "GitHub", href: "https://github.com" },
  ];

  const contactInfo = [
    { icon: Mail, label: "tanushree@example.com" },
    { icon: Phone, label: "+91 XXXXX XXXXX" },
    { icon: MapPin, label: "Mumbai, India" },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          Get in <span className="text-gradient">Touch</span>
        </h2>

        <div className="max-w-3xl mx-auto text-center space-y-8">
          <p className="text-muted-foreground text-lg">
            I'm always open to discussing new opportunities, projects, or just having a friendly chat about technology!
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-4 py-2 rounded-full bg-card card-shadow"
              >
                <item.icon className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 pt-4">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="outline"
                size="lg"
                className="rounded-full border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                onClick={() => window.open(social.href, "_blank")}
              >
                <social.icon className="w-5 h-5 mr-2" />
                {social.label}
              </Button>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-8">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary px-10"
            >
              <Mail className="w-5 h-5 mr-2" />
              Say Hello
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

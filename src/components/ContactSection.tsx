import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  MapPin,
  Phone,
  Instagram,
  Linkedin,
  Github,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/tanushree_mhatree?igsh=NndkeHJ4cm9rNDE=",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/tanushree-mhatre-15b4b4385/",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/mhatretanushree09-hub",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_62u6ofs",
        "template_h2md5qf",
        formData,
        "nKBMzQV8Nn-mUlpRC"
      )
      .then(
        () => {
          toast({
            title: "Message sent!",
            description: "Thank you for reaching out. I'll get back to you soon!",
          });
          setFormData({ from_name: "", from_email: "", message: "" });
          setIsSubmitting(false);
        },
        () => {
          toast({
            title: "Error",
            description: "Failed to send message. Please try again.",
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          Get in <span className="text-gradient">Touch</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Have a question or want to work together? Drop me a message!
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Your Name"
                  value={formData.from_name}
                  onChange={(e) =>
                    setFormData({ ...formData, from_name: e.target.value })
                  }
                  required
                />

                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.from_email}
                  onChange={(e) =>
                    setFormData({ ...formData, from_email: e.target.value })
                  }
                  required
                />

                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                />

                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info & Social */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-card">
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">
                      mhatretanushree09@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-card">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">
                      +91 93248 21277
                    </span>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-card">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Mumbai, India</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="lg"
                      className="rounded-full"
                      onClick={() => window.open(social.href, "_blank")}
                    >
                      <social.icon className="w-5 h-5 mr-2" />
                      {social.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

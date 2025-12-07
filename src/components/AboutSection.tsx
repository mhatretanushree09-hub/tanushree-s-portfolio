import { Code, Lightbulb, GraduationCap, Heart } from "lucide-react";
import profileImage from "@/assets/profile.jpeg";

const AboutSection = () => {
  const highlights = [
    { icon: GraduationCap, label: "B.E. Computer Engineering" },
    { icon: Code, label: "Web Development" },
    { icon: Lightbulb, label: "Problem Solving" },
    { icon: Heart, label: "Learning New Tech" },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          About <span className="text-gradient">Me</span>
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl scale-110" />
              
              {/* Profile ring */}
              <div className="profile-ring relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-card">
                  <img 
                    src={profileImage} 
                    alt="Tanushree Mhatre" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary/30 animate-pulse" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-primary/20 animate-pulse" style={{ animationDelay: "0.5s" }} />
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-semibold">
                Aspiring Software Developer
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Hello! I'm Tanushree Mhatre, a passionate Computer Engineering student 
                with a keen interest in technology and innovation. I love exploring 
                new technologies and finding creative solutions to complex problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently, I'm focused on building my skills in web development, 
                programming, and software engineering. I believe in continuous learning 
                and am always excited to take on new challenges that help me grow.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new tech trends, 
                working on personal projects, or learning about the latest 
                advancements in artificial intelligence and machine learning.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-card card-shadow"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Greeting */}
          <div className="flex items-center justify-center gap-2 opacity-0 animate-fade-in">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground text-sm md:text-base font-medium tracking-wider uppercase">
              Welcome to my portfolio
            </span>
            <Sparkles className="w-5 h-5 text-primary" />
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold opacity-0 animate-fade-in animation-delay-200">
            Hi, I'm{" "}
            <span className="text-gradient">Tanushree Mhatre</span>
          </h1>

          {/* Role */}
          <p className="text-xl md:text-2xl text-muted-foreground opacity-0 animate-fade-in animation-delay-400">
            Computer Engineering Student
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto opacity-0 animate-fade-in animation-delay-600">
            Passionate about technology and eager to create innovative solutions.
            Currently exploring the world of web development, AI, and software engineering.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 opacity-0 animate-fade-in animation-delay-600">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary px-8"
              onClick={() => {
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore More
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 hover:bg-primary/10"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get in Touch
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-600">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { Award, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const achievements = [
  {
    title: "MATLAB Onramp",
    issuer: "MathWorks",
    date: "2024",
    description: "Completed foundational course on MATLAB basics including commands, arrays, and scripts.",
  },
  {
    title: "MATLAB Fundamentals",
    issuer: "MathWorks",
    date: "2024",
    description: "Mastered core MATLAB programming concepts, data analysis, and visualization techniques.",
  },
  {
    title: "Simulink Onramp",
    issuer: "MathWorks",
    date: "2024",
    description: "Learned to build and simulate dynamic systems using Simulink block diagrams.",
  },
  {
    title: "MATLAB Programming Techniques",
    issuer: "MathWorks",
    date: "2024",
    description: "Advanced certification covering functions, debugging, and performance optimization in MATLAB.",
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 md:py-32 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          My <span className="text-gradient">Achievements</span>
        </h2>

        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Certifications and accomplishments that showcase my dedication to continuous learning and skill development.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="group bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 card-shadow"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-lg">{achievement.title}</h3>
                      <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="text-primary font-medium">{achievement.issuer}</span>
                      <span>•</span>
                      <span>{achievement.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;

import { Award, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const achievements = [
  {
    title: "MATLAB Onramp",
    issuer: "MathWorks Training Services",
    date: "November 2025",
    description: "Completed foundational self-paced course on MATLAB basics including commands, arrays, and scripts.",
    certificateUrl: "/certificates/matlab-onramp.pdf",
  },
  {
    title: "Deep Learning Onramp",
    issuer: "MathWorks Training Services",
    date: "November 2025",
    description: "Mastered deep learning fundamentals using MATLAB including neural networks and AI concepts.",
    certificateUrl: "/certificates/deep-learning-onramp.pdf",
  },
  {
    title: "Signal Processing Onramp",
    issuer: "MathWorks Training Services",
    date: "November 2025",
    description: "Learned signal processing techniques for analyzing, filtering, and transforming signals.",
    certificateUrl: "/certificates/signal-processing-onramp.pdf",
  },
  {
    title: "Machine Learning Onramp",
    issuer: "MathWorks Training Services",
    date: "November 2025",
    description: "Completed self-paced course on machine learning workflows including training and evaluation.",
    certificateUrl: "/certificates/machine-learning-onramp.pdf",
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 md:py-32 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          My <span className="text-gradient">Certifications</span>
        </h2>

        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          MathWorks certifications showcasing my expertise in MATLAB, machine learning, and signal processing.
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
                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="font-semibold text-lg">{achievement.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                        <span className="text-primary font-medium">{achievement.issuer}</span>
                        <span>•</span>
                        <span>{achievement.date}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all"
                      onClick={() => window.open(achievement.certificateUrl, "_blank")}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      View Certificate
                    </Button>
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

import { Lightbulb, Calculator, Gamepad2, Clock, CheckSquare, Cloud, Music } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projectIdeas = [
  {
    icon: Calculator,
    title: "Scientific Calculator",
    description: "Build a fully functional calculator with basic and scientific operations. Great for learning state management and event handling.",
    difficulty: "Beginner",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    icon: Gamepad2,
    title: "Tic Tac Toe Game",
    description: "Create an interactive game with AI opponent. Perfect for understanding game logic and algorithms.",
    difficulty: "Beginner",
    tech: ["React", "TypeScript"],
  },
  {
    icon: Clock,
    title: "Pomodoro Timer",
    description: "A productivity app with customizable work/break intervals. Learn about timers and notifications.",
    difficulty: "Beginner",
    tech: ["React", "CSS"],
  },
  {
    icon: CheckSquare,
    title: "Todo List App",
    description: "Task management app with categories, priorities, and local storage. Introduction to CRUD operations.",
    difficulty: "Intermediate",
    tech: ["React", "LocalStorage"],
  },
  {
    icon: Cloud,
    title: "Weather Dashboard",
    description: "Fetch and display weather data using APIs. Learn API integration and data visualization.",
    difficulty: "Intermediate",
    tech: ["React", "API", "Charts"],
  },
  {
    icon: Music,
    title: "Music Player",
    description: "Build a sleek audio player with playlist features. Great for working with media APIs.",
    difficulty: "Intermediate",
    tech: ["React", "Audio API"],
  },
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner":
      return "bg-green-500/10 text-green-500 border-green-500/20";
    case "Intermediate":
      return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
    default:
      return "bg-primary/10 text-primary border-primary/20";
  }
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          Project <span className="text-gradient">Ideas</span>
        </h2>

        <div className="flex items-center justify-center gap-2 mb-12">
          <Lightbulb className="w-5 h-5 text-primary" />
          <p className="text-center text-muted-foreground">
            Exciting projects I plan to build as I continue learning!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projectIdeas.map((project, index) => (
            <Card
              key={index}
              className="group bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 card-shadow overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge
                      variant="outline"
                      className={getDifficultyColor(project.difficulty)}
                    >
                      {project.difficulty}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-12">
          More projects coming soon as I build my skills! 🚀
        </p>
      </div>
    </section>
  );
};

export default ProjectsSection;

import { Gamepad2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const project = {
  title: "Tic Tac Toe Game",
  description:
    "A simple and interactive Tic Tac Toe game built using HTML, CSS, and JavaScript. The game supports two players, detects winning combinations, and includes a reset option.",
  tech: ["HTML", "CSS", "JavaScript"],
  liveLink: "/tic-tac-toe/index.html",
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          My <span className="text-gradient">Project</span>
        </h2>

        <div className="flex items-center justify-center gap-2 mb-12">
          <Gamepad2 className="w-5 h-5 text-primary" />
          <p className="text-center text-muted-foreground">
            A project I built while learning front-end development
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 card-shadow overflow-hidden">
            <CardContent className="p-6 space-y-4">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Gamepad2 className="w-6 h-6 text-primary" />
                </div>
                <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                  Completed
                </Badge>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">
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

              {/* Links */}
              <div className="flex gap-4 pt-4 text-sm">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

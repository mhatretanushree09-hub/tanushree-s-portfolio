import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Placeholder images - replace with actual photos
const photos = [
  { id: 1, color: "from-primary/40 to-accent/40", label: "Photo 1" },
  { id: 2, color: "from-accent/40 to-primary/40", label: "Photo 2" },
  { id: 3, color: "from-primary/30 to-primary/60", label: "Photo 3" },
  { id: 4, color: "from-accent/30 to-accent/60", label: "Photo 4" },
  { id: 5, color: "from-primary/50 to-accent/30", label: "Photo 5" },
  { id: 6, color: "from-accent/50 to-primary/30", label: "Photo 6" },
  { id: 7, color: "from-primary/20 to-accent/50", label: "Photo 7" },
  { id: 8, color: "from-accent/20 to-primary/50", label: "Photo 8" },
];

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const handlePrev = () => {
    setSelectedPhoto((prev) =>
      prev !== null ? (prev === 0 ? photos.length - 1 : prev - 1) : null
    );
  };

  const handleNext = () => {
    setSelectedPhoto((prev) =>
      prev !== null ? (prev === photos.length - 1 ? 0 : prev + 1) : null
    );
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhoto === null) return;
      if (e.key === "Escape") setSelectedPhoto(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhoto]);

  return (
    <section id="gallery" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          Photo <span className="text-gradient">Gallery</span>
        </h2>

        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
          A collection of memorable moments and experiences from my journey.
        </p>

        {/* Spiral Gallery Container */}
        <div
          className="relative w-full max-w-3xl mx-auto aspect-square"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Rotating container */}
          <div
            className={`absolute inset-0 ${isPaused ? "" : "animate-spiral"}`}
            style={{ animationPlayState: isPaused ? "paused" : "running" }}
          >
            {photos.map((photo, index) => {
              const angle = (index * 360) / photos.length;
              const radius = 35; // percentage from center
              const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
              const y = 50 + radius * Math.sin((angle * Math.PI) / 180);

              return (
                <div
                  key={photo.id}
                  className="absolute w-20 h-20 md:w-28 md:h-28 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 hover:scale-125 hover:z-10"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: `translate(-50%, -50%) rotate(${-angle}deg)`,
                  }}
                  onClick={() => setSelectedPhoto(index)}
                >
                  <div
                    className={`w-full h-full rounded-xl bg-gradient-to-br ${photo.color} shadow-lg flex items-center justify-center border-2 border-background/50`}
                    style={{
                      transform: isPaused ? "none" : `rotate(${angle}deg)`,
                    }}
                  >
                    <span className="text-foreground/70 text-xs font-medium">
                      {photo.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center card-shadow">
            <span className="text-gradient font-display font-bold text-lg md:text-xl">
              Memories
            </span>
          </div>
        </div>

        {/* Instructions */}
        <p className="text-center text-muted-foreground text-sm mt-8">
          Hover to pause • Click on a photo to view
        </p>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            onClick={() => setSelectedPhoto(null)}
          >
            <X className="w-6 h-6" />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div
            className={`w-full max-w-2xl aspect-video rounded-2xl bg-gradient-to-br ${photos[selectedPhoto].color} flex items-center justify-center card-shadow`}
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-foreground/70 text-xl font-medium">
              {photos[selectedPhoto].label}
            </span>
          </div>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;

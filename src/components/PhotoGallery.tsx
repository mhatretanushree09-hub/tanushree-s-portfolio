import CircularGallery from "./CircularGallery";

// Gallery items with placeholder images - replace with actual photos
const galleryItems = [
  { image: "https://picsum.photos/seed/photo1/800/600", text: "Memory 1" },
  { image: "https://picsum.photos/seed/photo2/800/600", text: "Memory 2" },
  { image: "https://picsum.photos/seed/photo3/800/600", text: "Memory 3" },
  { image: "https://picsum.photos/seed/photo4/800/600", text: "Memory 4" },
  { image: "https://picsum.photos/seed/photo5/800/600", text: "Memory 5" },
  { image: "https://picsum.photos/seed/photo6/800/600", text: "Memory 6" },
  { image: "https://picsum.photos/seed/photo7/800/600", text: "Memory 7" },
  { image: "https://picsum.photos/seed/photo8/800/600", text: "Memory 8" },
];

const PhotoGallery = () => {
  return (
    <section id="gallery" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          Photo <span className="text-gradient">Gallery</span>
        </h2>

        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
          A collection of memorable moments and experiences from my journey.
        </p>
      </div>

      {/* Circular Gallery Container */}
      <div className="h-[500px] md:h-[600px] w-full">
        <CircularGallery
          items={galleryItems}
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollSpeed={2}
          scrollEase={0.05}
        />
      </div>

      {/* Instructions */}
      <p className="text-center text-muted-foreground text-sm mt-4">
        Drag or scroll to navigate through photos
      </p>
    </section>
  );
};

export default PhotoGallery;

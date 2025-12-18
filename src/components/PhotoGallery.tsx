import CircularGallery from "./CircularGallery";
import photo1 from "../assets/galley/photo1.jpeg";
import photo2 from "../assets/galley/photo2.jpeg";
import photo3 from "../assets/galley/photo3.jpeg";
import photo4 from "../assets/galley/photo4.jpeg";
import photo5 from "../assets/galley/photo5.jpeg";
import photo6 from "../assets/galley/photo6.jpeg";
import photo7 from "../assets/galley/photo7.jpeg";
import photo8 from "../assets/galley/photo8.jpeg";
import photo9 from "../assets/galley/photo9.jpeg";



// Gallery items with placeholder images - replace with actual photos
const galleryItems = [
  { image: photo1, text: "Sky" },
  { image: photo2, text: "Malabar Walkway" },
  { image: photo3, text: "Churchgate" },
  { image: photo4, text: "Moon" },
  { image: photo5, text: "Lavender cafe" },
  { image: photo6, text: "Bliss" },
  { image: photo7, text: "Food" },
  { image: photo8, text: "Library" },
  { image: photo9, text: "National Park" },

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
          scrollSpeed={1}
          scrollEase={0.08}
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

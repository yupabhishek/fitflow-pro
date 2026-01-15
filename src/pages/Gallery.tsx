import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/common/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { X, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const categories = ["All", "Facilities", "Training", "Events", "Transformations"];

const galleryImages = [
  // Facilities
  { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80", category: "Facilities", title: "Main Training Floor" },
  { src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80", category: "Facilities", title: "Cardio Zone" },
  { src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80", category: "Facilities", title: "Free Weights Area" },
  { src: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=1200&q=80", category: "Facilities", title: "Group Fitness Studio" },
  
  // Training
  { src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80", category: "Training", title: "Personal Training Session" },
  { src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80", category: "Training", title: "Weight Training" },
  { src: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=1200&q=80", category: "Training", title: "CrossFit Class" },
  { src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80", category: "Training", title: "Yoga Session" },
  { src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80", category: "Training", title: "Stretching Class" },
  { src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80", category: "Training", title: "Strength Training" },
  
  // Events
  { src: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=80", category: "Events", title: "Fitness Competition" },
  { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80", category: "Events", title: "Community Workout" },
  
  // Transformations
  { src: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=1200&q=80", category: "Transformations", title: "Member Transformation" },
  { src: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=1200&q=80", category: "Transformations", title: "Success Story" },
  { src: "https://images.unsplash.com/photo-1583468982228-19f19164aee2?auto=format&fit=crop&w=1200&q=80", category: "Transformations", title: "Before & After" },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages = selectedCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display text-5xl md:text-7xl mb-6">
            OUR <span className="gradient-text">GALLERY</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take a virtual tour of our facilities and see our community in action.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex justify-center gap-2 mb-12 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "gradient-bg text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="break-inside-avoid group cursor-pointer overflow-hidden rounded-2xl"
                onClick={() => openLightbox(index)}
              >
                <div className="relative">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      <p className="font-display text-2xl">{image.title}</p>
                      <p className="text-sm text-primary">{image.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-6 w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-6 w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-5xl max-h-[80vh] px-20">
            <img
              src={filteredImages[currentImageIndex].src}
              alt={filteredImages[currentImageIndex].title}
              className="w-full h-full object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <p className="font-display text-2xl">{filteredImages[currentImageIndex].title}</p>
              <p className="text-sm text-muted-foreground">
                {currentImageIndex + 1} / {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            SEE IT FOR YOURSELF
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
            Pictures only tell half the story. Book a free tour and experience Forge Fitness in person.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gradient-bg hover:opacity-90">
              <Link to="/contact">
                Book a Tour
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
              <Link to="/membership">View Membership Plans</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;

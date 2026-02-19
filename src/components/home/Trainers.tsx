import { Link } from "react-router-dom";
import { Instagram, Twitter, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/common/SectionHeader";

const trainers = [
  {
    name: "Marcus Johnson",
    role: "Head Strength Coach",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=600&q=80",
    specialties: ["Powerlifting", "Strength Training", "Competition Prep"],
  },
  {
    name: "Sarah Chen",
    role: "Fitness Director",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=600&q=80",
    specialties: ["HIIT", "Weight Loss", "Nutrition"],
  },
  {
    name: "David Rodriguez",
    role: "CrossFit Coach",
    image: "https://images.unsplash.com/photo-1583468982228-19f19164aee2?auto=format&fit=crop&w=600&q=80",
    specialties: ["CrossFit", "Olympic Lifting", "Mobility"],
  },
  {
    name: "Emily Parker",
    role: "Yoga & Wellness",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80",
    specialties: ["Yoga", "Meditation", "Flexibility"],
  },
];

const Trainers = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="Expert Team"
          title="MEET YOUR TRAINERS"
          description="Our certified professionals are here to guide, motivate, and help you achieve results you never thought possible."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-background hover-lift"
            >
              {/* Image Container */}
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-2xl mb-1">{trainer.name}</h3>
                <p className="text-primary font-medium text-sm mb-3">{trainer.role}</p>
                
                {/* Specialties */}
                <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {trainer.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href="#" className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
            <Link to="/trainers">
              View All Trainers
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Trainers;

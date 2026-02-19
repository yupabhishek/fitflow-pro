import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/common/SectionHeader";

const programs = [
  {
    title: "Personal Training",
    description: "One-on-one coaching tailored to your specific goals and fitness level.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80",
    sessions: "1-on-1 Sessions",
  },
  {
    title: "Weight Loss",
    description: "Science-backed programs designed to help you shed fat and keep it off.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
    sessions: "Group & Personal",
  },
  {
    title: "Muscle Building",
    description: "Build lean muscle mass with progressive overload and nutrition guidance.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80",
    sessions: "Structured Plans",
  },
  {
    title: "CrossFit / HIIT",
    description: "High-intensity functional training for maximum calorie burn and endurance.",
    image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=800&q=80",
    sessions: "Group Classes",
  },
  {
    title: "Yoga & Wellness",
    description: "Find balance with our yoga, meditation, and flexibility programs.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    sessions: "Mind & Body",
  },
  {
    title: "Online Coaching",
    description: "Get expert guidance anywhere with our virtual training programs.",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=80",
    sessions: "Remote Training",
  },
];

const Programs = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="Our Programs"
          title="TRAIN YOUR WAY"
          description="From beginners to elite athletes, we have programs designed to help you reach your goals."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <Link
              key={index}
              to="/programs"
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] hover-lift w-full"
            >
              {/* Image */}
              <img
                src={program.image}
                alt={program.title}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-center sm:text-left">
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary mb-2 break-words">
                  {program.sessions}
                </span>
                <h3 className="font-display text-xl sm:text-2xl mb-2 group-hover:text-primary transition-colors break-words">
                  {program.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base mb-4 line-clamp-2">
                  {program.description}
                </p>
                <div className="flex items-center text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 w-full sm:w-auto">
            <Link to="/programs">
              View All Programs
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;

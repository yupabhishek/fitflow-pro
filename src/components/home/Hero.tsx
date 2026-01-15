import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">New Year, New You — 50% Off First Month</span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-none mb-6 animate-fade-up stagger-1">
            FORGE YOUR
            <span className="block gradient-text">STRONGEST SELF</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-xl animate-fade-up stagger-2">
            Premium equipment. Expert trainers. Unmatched community. Transform your body and unleash your potential.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up stagger-3">
            <Button asChild size="lg" className="gradient-bg hover:opacity-90 text-lg px-8">
              <Link to="/membership">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 border-primary/50 hover:bg-primary/10">
              <Link to="/programs">
                <Play className="mr-2 w-5 h-5" />
                Watch Our Story
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 md:gap-12 mt-16 animate-fade-up stagger-4">
            {[
              { value: "10K+", label: "Active Members" },
              { value: "50+", label: "Expert Trainers" },
              { value: "15", label: "Years Experience" },
              { value: "98%", label: "Success Rate" },
            ].map((stat, index) => (
              <div key={index} className="text-center sm:text-left">
                <div className="font-display text-4xl md:text-5xl gradient-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

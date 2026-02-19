import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/common/SectionHeader";

const testimonials = [
  {
    name: "Michael Torres",
    role: "Lost 50 lbs in 6 months",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "Forge Fitness completely transformed my life. The trainers created a personalized plan that worked with my schedule, and the community kept me accountable. I've never felt stronger or more confident.",
  },
  {
    name: "Jennifer Walsh",
    role: "Marathon Runner",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "After joining Forge, I completed my first marathon. The trainers understood my goals and pushed me beyond what I thought was possible. The facility is world-class and the atmosphere is incredibly motivating.",
  },
  {
    name: "David Kim",
    role: "Business Executive",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "As a busy executive, I needed a gym that could accommodate my unpredictable schedule. The 24/7 access and online coaching options at Forge are perfect. I've gained muscle and energy levels I didn't know were possible at 45.",
  },
  {
    name: "Amanda Foster",
    role: "New Mom, Strength Athlete",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "After having my baby, I was determined to get back in shape. The team at Forge designed a postpartum program that was safe and effective. Now I'm stronger than I was before pregnancy!",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          subtitle="Success Stories"
          title="REAL PEOPLE, REAL RESULTS"
          description="Don't just take our word for it — hear from members who transformed their lives at Forge Fitness."
        />

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative bg-card rounded-3xl p-8 md:p-12 border border-border">
            <Quote className="absolute top-8 right-8 w-16 h-16 text-primary/20" />

            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Avatar */}
              <div className="shrink-0">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg md:text-xl lg:text-2xl text-foreground leading-relaxed mb-6">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Author */}
                <div>
                  <p className="font-display text-xl">{testimonials[currentIndex].name}</p>
                  <p className="text-primary text-sm">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-muted hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="border-border hover:bg-primary hover:border-primary"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="border-border hover:bg-primary hover:border-primary"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

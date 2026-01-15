import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/common/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, Quote, ArrowRight, Play } from "lucide-react";

const testimonials = [
  {
    name: "Michael Torres",
    role: "Lost 50 lbs in 6 months",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    text: "Forge Fitness completely transformed my life. The trainers created a personalized plan that worked with my schedule, and the community kept me accountable. I've never felt stronger or more confident. The investment in myself has paid off in ways I never imagined.",
    featured: true,
  },
  {
    name: "Jennifer Walsh",
    role: "Marathon Runner",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    text: "After joining Forge, I completed my first marathon. The trainers understood my goals and pushed me beyond what I thought was possible. The facility is world-class and the atmosphere is incredibly motivating.",
    featured: true,
  },
  {
    name: "David Kim",
    role: "Business Executive",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    text: "As a busy executive, I needed a gym that could accommodate my unpredictable schedule. The 24/7 access and online coaching options at Forge are perfect. I've gained muscle and energy levels I didn't know were possible at 45.",
    featured: false,
  },
  {
    name: "Amanda Foster",
    role: "New Mom, Strength Athlete",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    text: "After having my baby, I was determined to get back in shape. The team at Forge designed a postpartum program that was safe and effective. Now I'm stronger than I was before pregnancy!",
    featured: true,
  },
  {
    name: "Robert Chen",
    role: "Senior Member, Age 62",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    text: "I was hesitant to join a gym at my age, but Forge made me feel welcome from day one. The senior fitness program is exactly what I needed. My doctor is amazed at my improvement.",
    featured: false,
  },
  {
    name: "Sarah Martinez",
    role: "CrossFit Competitor",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    text: "The CrossFit program at Forge took me from beginner to regional competitor in just 2 years. Coach David knows exactly how to push you while keeping you safe. Best decision I ever made.",
    featured: false,
  },
  {
    name: "James Thompson",
    role: "Lost 80 lbs",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    text: "I tried every diet and gym before Forge. The difference? The holistic approach. They addressed my nutrition, stress, sleep, and training all together. It finally clicked.",
    featured: false,
  },
  {
    name: "Emily Rodriguez",
    role: "Yoga Enthusiast",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    text: "Emily Parker's yoga classes have transformed not just my body but my mental health. The yoga studio is a sanctuary. I've found a peace I didn't know existed.",
    featured: false,
  },
];

const transformations = [
  {
    name: "Jason Miller",
    duration: "8 months",
    stats: "Lost 65 lbs • Gained muscle • Reversed pre-diabetes",
    before: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    after: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Maria Garcia",
    duration: "6 months",
    stats: "Lost 40 lbs • Completed first 5K",
    before: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    after: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Chris Anderson",
    duration: "12 months",
    stats: "Built 25 lbs muscle • Competition ready",
    before: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    after: "https://images.unsplash.com/photo-1583468982228-19f19164aee2?auto=format&fit=crop&w=400&q=80",
  },
];

const Testimonials = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display text-5xl md:text-7xl mb-6">
            SUCCESS <span className="gradient-text">STORIES</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real members. Real transformations. Real results.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-12 md:gap-24">
            {[
              { value: "10K+", label: "Transformations" },
              { value: "4.9", label: "Average Rating" },
              { value: "98%", label: "Would Recommend" },
              { value: "85%", label: "Goal Achievement" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-4xl md:text-5xl gradient-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="What Our Members Say"
            title="VOICES OF SUCCESS"
            description="Hear from members who transformed their lives at Forge Fitness."
          />

          {/* Featured Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {testimonials.filter(t => t.featured).map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-3xl p-8 border border-border relative"
              >
                <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/20" />
                
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <h3 className="font-display text-xl">{testimonial.name}</h3>
                    <p className="text-primary text-sm">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                <blockquote className="text-lg text-muted-foreground leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
              </div>
            ))}
          </div>

          {/* All Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.filter(t => !t.featured).map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground text-sm mb-4 line-clamp-4">
                  "{testimonial.text}"
                </blockquote>

                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-sm">{testimonial.name}</p>
                    <p className="text-primary text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformations Section */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Before & After"
            title="INCREDIBLE TRANSFORMATIONS"
            description="See the amazing results our members have achieved."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {transformations.map((transformation, index) => (
              <div key={index} className="bg-background rounded-2xl overflow-hidden border border-border">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img
                      src={transformation.before}
                      alt={`${transformation.name} before`}
                      className="w-full aspect-square object-cover"
                    />
                    <span className="absolute bottom-2 left-2 text-xs font-semibold px-2 py-1 bg-background/80 rounded">
                      BEFORE
                    </span>
                  </div>
                  <div className="relative">
                    <img
                      src={transformation.after}
                      alt={`${transformation.name} after`}
                      className="w-full aspect-square object-cover"
                    />
                    <span className="absolute bottom-2 right-2 text-xs font-semibold px-2 py-1 gradient-bg rounded">
                      AFTER
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl mb-1">{transformation.name}</h3>
                  <p className="text-primary text-sm mb-2">{transformation.duration}</p>
                  <p className="text-muted-foreground text-sm">{transformation.stats}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                Video Testimonials
              </span>
              <h2 className="font-display text-4xl md:text-5xl mb-6">
                HEAR THEIR STORIES
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Watch our members share their personal journeys, challenges they overcame, and the incredible transformations they achieved at Forge Fitness.
              </p>
              <Button asChild className="gradient-bg hover:opacity-90">
                <Link to="/contact">
                  Start Your Story
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-secondary">
              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80"
                alt="Video testimonial thumbnail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-background/40 flex items-center justify-center">
                <button className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary/20 to-accent/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            READY TO WRITE YOUR SUCCESS STORY?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
            Join thousands of members who have transformed their lives. Your journey starts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gradient-bg hover:opacity-90">
              <Link to="/membership">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
              <Link to="/contact">Book a Tour</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;

import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/common/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Users, Trophy, Heart, Shield, Zap } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every program, every session, every decision is focused on delivering measurable results for our members.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "We build more than bodies — we build connections. Our community supports and motivates each other.",
  },
  {
    icon: Trophy,
    title: "Excellence",
    description: "From our equipment to our trainers, we maintain the highest standards in everything we do.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Fitness isn't just our business — it's our calling. We're genuinely invested in your success.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "No gimmicks, no shortcuts. We believe in honest, sustainable approaches to fitness.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We stay ahead of the curve with the latest training methods, technology, and equipment.",
  },
];

const milestones = [
  { year: "2009", title: "The Beginning", description: "Forge Fitness opens its first 5,000 sq ft facility with 3 trainers." },
  { year: "2012", title: "First Expansion", description: "Expanded to 15,000 sq ft and introduced group fitness classes." },
  { year: "2015", title: "Award Winning", description: "Named 'Best Gym in the City' by Fitness Magazine." },
  { year: "2018", title: "Tech Integration", description: "Launched our mobile app and smart gym technology." },
  { year: "2021", title: "Online Platform", description: "Introduced virtual training and online coaching programs." },
  { year: "2024", title: "Today", description: "10,000+ active members, 50+ trainers, and counting." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-background/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display text-5xl md:text-7xl mb-6">
            OUR <span className="gradient-text">STORY</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            More than a gym — we're a movement dedicated to helping people unlock their full potential.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                Est. 2009
              </span>
              <h2 className="font-display text-4xl md:text-5xl mb-6">
                BUILT ON PASSION,<br />DRIVEN BY RESULTS
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Forge Fitness started with a simple vision: create a space where everyone — from first-time gym-goers to elite athletes — could transform their lives through fitness.
                </p>
                <p>
                  Founded by former professional athletes and certified trainers, we understood that real transformation requires more than just equipment. It requires guidance, community, and an environment that inspires you to push beyond your limits.
                </p>
                <p>
                  Today, we've grown from a small neighborhood gym to a premier fitness destination, but our core mission remains the same: helping you forge your strongest self.
                </p>
              </div>
              <Button asChild className="mt-8 gradient-bg hover:opacity-90">
                <Link to="/membership">
                  Join Our Community
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=600&q=80"
                alt="Gym interior"
                className="rounded-2xl aspect-[3/4] object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=600&q=80"
                alt="Training session"
                className="rounded-2xl aspect-[3/4] object-cover mt-12"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Our Core Values"
            title="WHAT WE STAND FOR"
            description="These principles guide everything we do at Forge Fitness."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Our Journey"
            title="15 YEARS OF EXCELLENCE"
            description="From a small gym to a fitness empire — here's how we've grown."
          />

          <div className="relative max-w-4xl mx-auto">
            {/* Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full gradient-bg -translate-x-1/2 mt-2 z-10" />

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <span className="font-display text-4xl gradient-text">{milestone.year}</span>
                  <h3 className="font-display text-xl mt-2 mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="World-Class Facilities"
            title="DESIGNED FOR PERFORMANCE"
            description="50,000 sq ft of premium training space equipped with the best."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
                title: "Strength Training Floor",
                description: "Hammer Strength, Rogue, and premium free weights",
              },
              {
                image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80",
                title: "Cardio Zone",
                description: "Latest treadmills, bikes, and rowing machines",
              },
              {
                image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
                title: "Group Fitness Studios",
                description: "3 dedicated studios for classes and training",
              },
              {
                image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
                title: "Yoga & Wellness",
                description: "Tranquil space for yoga and meditation",
              },
              {
                image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80",
                title: "Personal Training",
                description: "Private training areas with full amenities",
              },
              {
                image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80",
                title: "Recovery Center",
                description: "Sauna, steam room, and massage therapy",
              },
            ].map((facility, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-2xl mb-1">{facility.title}</h3>
                  <p className="text-muted-foreground text-sm">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            READY TO START YOUR JOURNEY?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
            Join the Forge family and experience the difference that 15 years of excellence makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gradient-bg hover:opacity-90">
              <Link to="/membership">
                View Membership Plans
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

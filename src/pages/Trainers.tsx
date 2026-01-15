import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/common/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Instagram, Twitter, Linkedin, ArrowRight, Award, Users, Calendar } from "lucide-react";

const trainers = [
  {
    name: "Marcus Johnson",
    role: "Head Strength Coach",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=80",
    bio: "Former powerlifting champion with 15+ years of coaching experience. Marcus specializes in strength training and competition preparation.",
    specialties: ["Powerlifting", "Strength Training", "Competition Prep", "Sports Performance"],
    certifications: ["CSCS", "USAW Level 2", "CPT"],
    experience: "15 years",
    clients: "500+",
  },
  {
    name: "Sarah Chen",
    role: "Fitness Director",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=80",
    bio: "With a background in exercise physiology, Sarah leads our training programs and specializes in transformational weight loss journeys.",
    specialties: ["HIIT", "Weight Loss", "Nutrition Coaching", "Group Fitness"],
    certifications: ["ACE-CPT", "Precision Nutrition L2", "TRX"],
    experience: "12 years",
    clients: "800+",
  },
  {
    name: "David Rodriguez",
    role: "CrossFit Head Coach",
    image: "https://images.unsplash.com/photo-1583468982228-19f19164aee2?auto=format&fit=crop&w=800&q=80",
    bio: "CrossFit Games competitor and Level 3 coach. David brings intensity and expertise to every session.",
    specialties: ["CrossFit", "Olympic Lifting", "Mobility", "Functional Fitness"],
    certifications: ["CF-L3", "USAW", "Gymnastics Cert"],
    experience: "10 years",
    clients: "400+",
  },
  {
    name: "Emily Parker",
    role: "Yoga & Wellness Director",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    bio: "Certified yoga therapist with expertise in stress reduction and flexibility. Emily brings a holistic approach to fitness.",
    specialties: ["Yoga", "Meditation", "Flexibility", "Stress Management"],
    certifications: ["RYT-500", "Yoga Therapy", "Mindfulness"],
    experience: "8 years",
    clients: "600+",
  },
  {
    name: "James Mitchell",
    role: "Boxing & Combat Coach",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=80",
    bio: "Former professional boxer turned coach. James brings discipline and intensity to cardio and combat training.",
    specialties: ["Boxing", "Kickboxing", "Cardio Conditioning", "Self-Defense"],
    certifications: ["USA Boxing", "NASM-CPT", "First Aid"],
    experience: "12 years",
    clients: "350+",
  },
  {
    name: "Lisa Thompson",
    role: "Senior Personal Trainer",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80",
    bio: "Specializing in post-rehabilitation and senior fitness, Lisa helps clients of all ages achieve their goals safely.",
    specialties: ["Senior Fitness", "Post-Rehab", "Corrective Exercise", "Balance Training"],
    certifications: ["NASM-CES", "ACE-CPT", "Silver Sneakers"],
    experience: "14 years",
    clients: "450+",
  },
  {
    name: "Chris Anderson",
    role: "Bodybuilding Coach",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=80",
    bio: "IFBB Pro and nutrition expert. Chris specializes in physique development and competition preparation.",
    specialties: ["Bodybuilding", "Physique Development", "Contest Prep", "Nutrition"],
    certifications: ["IFBB Pro", "ISSN", "NASM-CPT"],
    experience: "11 years",
    clients: "300+",
  },
  {
    name: "Nicole Williams",
    role: "Dance Fitness Instructor",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    bio: "Professional dancer and certified instructor bringing energy and fun to every class.",
    specialties: ["Zumba", "Dance Cardio", "Barre", "Stretching"],
    certifications: ["Zumba ZIN", "Barre Certified", "Group Fitness"],
    experience: "7 years",
    clients: "1000+",
  },
];

const Trainers = () => {
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
            MEET YOUR <span className="gradient-text">TRAINERS</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            World-class coaches dedicated to helping you achieve extraordinary results.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-12 md:gap-24">
            {[
              { value: "50+", label: "Certified Trainers" },
              { value: "200+", label: "Years Combined Experience" },
              { value: "10K+", label: "Transformations" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-4xl md:text-5xl gradient-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {trainers.map((trainer, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  
                  {/* Social Links */}
                  <div className="absolute bottom-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="#" className="w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary transition-colors">
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary transition-colors">
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-2xl mb-1">{trainer.name}</h3>
                  <p className="text-primary font-medium text-sm mb-3">{trainer.role}</p>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{trainer.bio}</p>

                  {/* Stats */}
                  <div className="flex gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      {trainer.experience}
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Users className="w-4 h-4 text-primary" />
                      {trainer.clients} clients
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {trainer.specialties.slice(0, 3).map((specialty, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                      >
                        {specialty}
                      </span>
                    ))}
                    {trainer.specialties.length > 3 && (
                      <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                        +{trainer.specialties.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Certifications */}
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Award className="w-4 h-4 text-primary shrink-0" />
                    <span>{trainer.certifications.join(" • ")}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            TRAIN WITH THE BEST
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
            Book a session with one of our expert trainers and start your transformation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gradient-bg hover:opacity-90">
              <Link to="/contact">
                Book a Session
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

export default Trainers;

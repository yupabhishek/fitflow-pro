import { Dumbbell, Users, Trophy, Clock, Wifi, ShowerHead } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";

const features = [
  {
    icon: Dumbbell,
    title: "Premium Equipment",
    description: "State-of-the-art machines and free weights from top brands like Rogue, Hammer Strength, and Life Fitness.",
  },
  {
    icon: Users,
    title: "Expert Trainers",
    description: "Certified professionals with years of experience in personal training, nutrition, and sports science.",
  },
  {
    icon: Trophy,
    title: "Proven Results",
    description: "Over 10,000 transformations completed. Our methods are backed by science and real-world success.",
  },
  {
    icon: Clock,
    title: "24/7 Access",
    description: "Train on your schedule. Our facility is open round the clock with full security and amenities.",
  },
  {
    icon: Wifi,
    title: "Smart Gym Tech",
    description: "Track your workouts with our mobile app, smart equipment, and real-time progress monitoring.",
  },
  {
    icon: ShowerHead,
    title: "Luxury Amenities",
    description: "Premium locker rooms, sauna, steam room, towel service, and complimentary toiletries.",
  },
];

const Features = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="Why Choose Us"
          title="THE FORGE DIFFERENCE"
          description="We're not just a gym — we're a community dedicated to helping you achieve extraordinary results."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover-lift"
            >
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

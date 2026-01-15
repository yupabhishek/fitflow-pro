import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/common/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Clock, Users, Dumbbell, Target } from "lucide-react";

const programs = [
  {
    id: "personal-training",
    title: "Personal Training",
    tagline: "One-on-One Excellence",
    description: "Get personalized attention with our certified personal trainers who create custom programs tailored to your unique goals, fitness level, and schedule.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Customized workout plans",
      "Nutrition guidance",
      "Progress tracking & assessments",
      "Flexible scheduling",
      "Accountability partner",
      "Goal-specific training",
    ],
    duration: "30-60 min sessions",
    format: "1-on-1",
    level: "All Levels",
  },
  {
    id: "weight-loss",
    title: "Weight Loss",
    tagline: "Transform Your Body",
    description: "Science-backed weight loss programs combining cardio, strength training, and nutrition coaching to help you shed fat and keep it off permanently.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Metabolic testing",
      "Customized meal plans",
      "HIIT & cardio workouts",
      "Weekly weigh-ins",
      "Body composition analysis",
      "Support community",
    ],
    duration: "12-week program",
    format: "Group & Personal",
    level: "All Levels",
  },
  {
    id: "muscle-building",
    title: "Muscle Building",
    tagline: "Build Strength & Size",
    description: "Structured hypertrophy programs designed to build lean muscle mass through progressive overload, proper nutrition, and recovery protocols.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Progressive overload training",
      "Macro-based nutrition",
      "Supplement guidance",
      "Strength assessments",
      "Periodized programs",
      "Recovery protocols",
    ],
    duration: "8-16 week cycles",
    format: "Personal & Group",
    level: "Beginner to Advanced",
  },
  {
    id: "crossfit-hiit",
    title: "CrossFit / HIIT",
    tagline: "High-Intensity Results",
    description: "Functional fitness training combining cardio, strength, and gymnastics movements for maximum calorie burn and athletic performance.",
    image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Daily varied workouts",
      "Olympic lifting",
      "Gymnastics skills",
      "Competition prep",
      "Community challenges",
      "Benchmark tracking",
    ],
    duration: "60 min classes",
    format: "Group Classes",
    level: "All Levels (Scaled)",
  },
  {
    id: "yoga-wellness",
    title: "Yoga & Wellness",
    tagline: "Mind, Body, Balance",
    description: "Find balance and flexibility with our comprehensive yoga programs, from power yoga to restorative sessions and meditation.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Multiple yoga styles",
      "Meditation classes",
      "Breathing workshops",
      "Flexibility training",
      "Stress reduction",
      "Mind-body connection",
    ],
    duration: "45-75 min sessions",
    format: "Group Classes",
    level: "All Levels",
  },
  {
    id: "online-coaching",
    title: "Online Coaching",
    tagline: "Train Anywhere",
    description: "Get expert guidance from our certified trainers wherever you are with personalized online training programs, video calls, and app-based tracking.",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Custom workout programs",
      "Weekly video check-ins",
      "Mobile app access",
      "Nutrition coaching",
      "24/7 messaging support",
      "Video exercise library",
    ],
    duration: "Flexible",
    format: "Remote",
    level: "All Levels",
  },
];

const Programs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-background/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display text-5xl md:text-7xl mb-6">
            OUR <span className="gradient-text">PROGRAMS</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From personal training to group fitness, find the program that matches your goals and lifestyle.
          </p>
        </div>
      </section>

      {/* Programs List */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {programs.map((program, index) => (
              <div
                key={program.id}
                id={program.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Stats Overlay */}
                  <div className="absolute -bottom-6 left-6 right-6 flex gap-4">
                    <div className="flex-1 bg-card/95 backdrop-blur-sm rounded-xl p-4 border border-border">
                      <div className="flex items-center gap-2 text-primary mb-1">
                        <Clock className="w-4 h-4" />
                        <span className="text-xs font-semibold uppercase">Duration</span>
                      </div>
                      <p className="font-medium text-sm">{program.duration}</p>
                    </div>
                    <div className="flex-1 bg-card/95 backdrop-blur-sm rounded-xl p-4 border border-border">
                      <div className="flex items-center gap-2 text-primary mb-1">
                        <Users className="w-4 h-4" />
                        <span className="text-xs font-semibold uppercase">Format</span>
                      </div>
                      <p className="font-medium text-sm">{program.format}</p>
                    </div>
                    <div className="flex-1 bg-card/95 backdrop-blur-sm rounded-xl p-4 border border-border hidden sm:block">
                      <div className="flex items-center gap-2 text-primary mb-1">
                        <Target className="w-4 h-4" />
                        <span className="text-xs font-semibold uppercase">Level</span>
                      </div>
                      <p className="font-medium text-sm">{program.level}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`pt-8 lg:pt-0 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-2 block">
                    {program.tagline}
                  </span>
                  <h2 className="font-display text-4xl md:text-5xl mb-4">{program.title}</h2>
                  <p className="text-muted-foreground text-lg mb-8">{program.description}</p>

                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-primary-foreground" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="gradient-bg hover:opacity-90">
                      <Link to="/membership">
                        Get Started
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="border-primary/50 hover:bg-primary/10">
                      <Link to="/contact">Learn More</Link>
                    </Button>
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
            NOT SURE WHICH PROGRAM IS RIGHT?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
            Book a free consultation with one of our fitness experts and we'll help you find the perfect fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gradient-bg hover:opacity-90">
              <Link to="/contact">
                Book Free Consultation
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

export default Programs;

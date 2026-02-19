import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/common/SectionHeader";

const plans = [
  {
    name: "Basic",
    description: "Perfect for beginners starting their fitness journey",
    monthlyPrice: 29,
    yearlyPrice: 290,
    features: [
      "Full gym access",
      "Locker room & showers",
      "Basic fitness assessment",
      "Access to mobile app",
      "2 guest passes per month",
    ],
    highlighted: false,
  },
  {
    name: "Premium",
    description: "Most popular choice for serious fitness enthusiasts",
    monthlyPrice: 59,
    yearlyPrice: 590,
    features: [
      "Everything in Basic",
      "Unlimited group classes",
      "Sauna & steam room",
      "1 personal training session/month",
      "Nutrition consultation",
      "Priority equipment booking",
      "Unlimited guest passes",
    ],
    highlighted: true,
  },
  {
    name: "Elite",
    description: "The ultimate fitness experience with premium perks",
    monthlyPrice: 99,
    yearlyPrice: 990,
    features: [
      "Everything in Premium",
      "4 personal training sessions/month",
      "Custom meal planning",
      "Recovery room access",
      "Towel service",
      "Supplement discounts",
      "VIP locker",
      "24/7 trainer support",
    ],
    highlighted: false,
  },
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="Membership Plans"
          title="INVEST IN YOURSELF"
          description="Choose the plan that fits your goals. All plans include a 7-day free trial."
        />

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`font-medium ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative w-16 h-8 rounded-full bg-secondary transition-colors"
          >
            <div
              className={`absolute top-1 w-6 h-6 rounded-full gradient-bg transition-all ${
                isYearly ? "left-9" : "left-1"
              }`}
            />
          </button>
          <span className={`font-medium ${isYearly ? "text-foreground" : "text-muted-foreground"}`}>
            Yearly
            <span className="ml-2 text-xs text-primary font-semibold">Save 20%</span>
          </span>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-6 sm:p-8 transition-all duration-300 hover-lift ${
                plan.highlighted
                  ? "bg-gradient-to-b from-primary/20 to-background border-2 border-primary"
                  : "bg-background border border-border"
              }`}
            >
              {/* Popular Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full gradient-bg text-sm font-semibold">
                    <Zap className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="font-display text-2xl sm:text-3xl mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm sm:text-base">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-xl sm:text-2xl text-muted-foreground">$</span>
                  <span className="font-display text-4xl sm:text-6xl">
                    {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                </div>
                <span className="text-muted-foreground text-sm">
                  /{isYearly ? "year" : "month"}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 sm:space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 sm:gap-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full gradient-bg flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary-foreground" />
                    </div>
                    <span className="text-muted-foreground text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                asChild
                className={`w-full ${
                  plan.highlighted
                    ? "gradient-bg hover:opacity-90"
                    : "bg-secondary hover:bg-secondary/80 text-foreground"
                }`}
                size="lg"
              >
                <Link to="/membership">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <p className="text-center text-muted-foreground mt-12">
          Not sure which plan is right for you?{" "}
          <Link to="/contact" className="text-primary hover:underline">
            Contact us
          </Link>{" "}
          for a free consultation.
        </p>
      </div>
    </section>
  );
};

export default Pricing;

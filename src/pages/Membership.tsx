import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/common/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, X, ArrowRight, Zap, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const plans = [
  {
    name: "Basic",
    description: "Perfect for beginners starting their fitness journey",
    monthlyPrice: 29,
    yearlyPrice: 290,
    features: {
      "Gym Access": true,
      "Locker Room & Showers": true,
      "Basic Fitness Assessment": true,
      "Mobile App Access": true,
      "Guest Passes": "2/month",
      "Group Classes": false,
      "Personal Training": false,
      "Sauna & Steam Room": false,
      "Nutrition Consultation": false,
      "24/7 Trainer Support": false,
    },
    highlighted: false,
  },
  {
    name: "Premium",
    description: "Most popular choice for serious fitness enthusiasts",
    monthlyPrice: 59,
    yearlyPrice: 590,
    features: {
      "Gym Access": true,
      "Locker Room & Showers": true,
      "Basic Fitness Assessment": true,
      "Mobile App Access": true,
      "Guest Passes": "Unlimited",
      "Group Classes": true,
      "Personal Training": "1 session/month",
      "Sauna & Steam Room": true,
      "Nutrition Consultation": true,
      "24/7 Trainer Support": false,
    },
    highlighted: true,
  },
  {
    name: "Elite",
    description: "The ultimate fitness experience with premium perks",
    monthlyPrice: 99,
    yearlyPrice: 990,
    features: {
      "Gym Access": true,
      "Locker Room & Showers": true,
      "Basic Fitness Assessment": true,
      "Mobile App Access": true,
      "Guest Passes": "Unlimited",
      "Group Classes": true,
      "Personal Training": "4 sessions/month",
      "Sauna & Steam Room": true,
      "Nutrition Consultation": true,
      "24/7 Trainer Support": true,
    },
    highlighted: false,
  },
];

const faqs = [
  {
    question: "Is there a contract or commitment?",
    answer: "No long-term contracts required! Our memberships are month-to-month, and you can cancel anytime with 30 days notice. For yearly plans, you commit to 12 months but save 20% on the monthly rate.",
  },
  {
    question: "What does the 7-day free trial include?",
    answer: "Your free trial gives you full access to all gym facilities, group classes, and one complimentary personal training session. It's the perfect way to experience everything Forge has to offer.",
  },
  {
    question: "Can I upgrade or downgrade my membership?",
    answer: "Absolutely! You can change your membership tier at any time. Upgrades take effect immediately, and downgrades take effect at the start of your next billing cycle.",
  },
  {
    question: "Are there any additional fees?",
    answer: "We believe in transparent pricing. Your membership fee covers everything included in your plan. The only additional costs are for optional add-ons like extra personal training sessions or premium workshops.",
  },
  {
    question: "Can I freeze my membership?",
    answer: "Yes! Premium and Elite members can freeze their membership for up to 2 months per year for a small holding fee. Basic members can freeze for up to 1 month. This is perfect for vacations or temporary relocations.",
  },
  {
    question: "Do you offer corporate or family discounts?",
    answer: "Yes! We offer 15% off for groups of 3+ from the same household or company. Contact us for custom corporate wellness packages for larger organizations.",
  },
];

const featureList = [
  "Gym Access",
  "Locker Room & Showers",
  "Basic Fitness Assessment",
  "Mobile App Access",
  "Guest Passes",
  "Group Classes",
  "Personal Training",
  "Sauna & Steam Room",
  "Nutrition Consultation",
  "24/7 Trainer Support",
];

const Membership = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display text-5xl md:text-7xl mb-6">
            MEMBERSHIP <span className="gradient-text">PLANS</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Invest in yourself. Choose the plan that fits your goals and start your transformation today.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-16">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-3xl p-8 transition-all duration-300 hover-lift ${
                  plan.highlighted
                    ? "bg-gradient-to-b from-primary/20 to-background border-2 border-primary"
                    : "bg-card border border-border"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full gradient-bg text-sm font-semibold">
                      <Zap className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="font-display text-3xl mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>

                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-2xl text-muted-foreground">$</span>
                    <span className="font-display text-6xl">
                      {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                  </div>
                  <span className="text-muted-foreground text-sm">
                    /{isYearly ? "year" : "month"}
                  </span>
                </div>

                <Button
                  asChild
                  className={`w-full mb-8 ${
                    plan.highlighted
                      ? "gradient-bg hover:opacity-90"
                      : "bg-secondary hover:bg-secondary/80 text-foreground"
                  }`}
                  size="lg"
                >
                  <Link to="/contact">
                    Start Free Trial
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>

                <ul className="space-y-4">
                  {Object.entries(plan.features).map(([feature, value], idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      {value ? (
                        <div className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-primary-foreground" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center shrink-0">
                          <X className="w-3 h-3 text-muted-foreground" />
                        </div>
                      )}
                      <span className={value ? "text-foreground" : "text-muted-foreground"}>
                        {feature}
                        {typeof value === "string" && (
                          <span className="text-primary ml-1">({value})</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Comparison Table (Desktop) */}
          <div className="hidden lg:block max-w-5xl mx-auto">
            <h3 className="font-display text-3xl text-center mb-8">COMPARE ALL PLANS</h3>
            <div className="bg-card rounded-2xl border border-border overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="p-4 text-left font-display text-lg">Features</th>
                    {plans.map((plan) => (
                      <th key={plan.name} className="p-4 text-center font-display text-lg">
                        {plan.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {featureList.map((feature, index) => (
                    <tr key={index} className="border-b border-border last:border-0">
                      <td className="p-4 text-muted-foreground">{feature}</td>
                      {plans.map((plan) => {
                        const value = plan.features[feature as keyof typeof plan.features];
                        return (
                          <td key={plan.name} className="p-4 text-center">
                            {value === true ? (
                              <Check className="w-5 h-5 text-primary mx-auto" />
                            ) : value === false ? (
                              <X className="w-5 h-5 text-muted-foreground mx-auto" />
                            ) : (
                              <span className="text-primary">{value}</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Free Trial Banner */}
      <section className="py-16 bg-gradient-to-r from-primary/20 to-accent/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-display text-3xl md:text-4xl mb-2">START YOUR 7-DAY FREE TRIAL</h2>
              <p className="text-muted-foreground">No credit card required. Full access to all facilities and classes.</p>
            </div>
            <Button asChild size="lg" className="gradient-bg hover:opacity-90 whitespace-nowrap">
              <Link to="/contact">
                Claim Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Questions?"
            title="FREQUENTLY ASKED"
            description="Everything you need to know about our membership plans."
          />

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6"
                >
                  <AccordionTrigger className="hover:no-underline py-6">
                    <span className="text-left font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">Still have questions?</p>
              <Button asChild variant="outline" className="border-primary/50 hover:bg-primary/10">
                <Link to="/contact">
                  <HelpCircle className="mr-2 w-5 h-5" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Membership;

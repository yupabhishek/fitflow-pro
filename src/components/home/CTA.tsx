import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center lg:bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-background/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-6">
            READY TO
            <span className="block gradient-text">TRANSFORM?</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
            Join thousands who have already started their fitness journey. Your first week is completely free — no commitment required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gradient-bg hover:opacity-90 text-lg px-8 w-full sm:w-auto">
              <Link to="/membership">
                Start Your Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 w-full sm:w-auto border-primary/50 hover:bg-primary/10">
              <a href="tel:+1234567890">
                <Phone className="mr-2 w-5 h-5" />
                (123) 456-7890
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

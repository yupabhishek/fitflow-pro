import { MapPin, Clock, Phone, Mail } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";

const Location = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="Visit Us"
          title="FIND YOUR FORGE"
          description="Located in the heart of the city with easy access and ample parking."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map */}
          <div className="relative aspect-video lg:aspect-auto lg:h-full min-h-[400px] rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095919364!2d-74.00425878459418!3d40.74076794379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1635186714456!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Forge Fitness Location"
              className="absolute inset-0"
            />
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl mb-2">ADDRESS</h3>
              <p className="text-muted-foreground">
                123 Fitness Street<br />
                Gym District<br />
                New York, NY 10001
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl mb-2">HOURS</h3>
              <div className="text-muted-foreground space-y-1">
                <p>Mon - Fri: 5:00 AM - 11:00 PM</p>
                <p>Saturday: 6:00 AM - 10:00 PM</p>
                <p>Sunday: 6:00 AM - 10:00 PM</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl mb-2">PHONE</h3>
              <a
                href="tel:+1234567890"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                (123) 456-7890
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl mb-2">EMAIL</h3>
              <a
                href="mailto:info@forgefitness.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                info@forgefitness.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

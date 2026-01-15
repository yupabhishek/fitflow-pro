import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Programs from "@/components/home/Programs";
import Trainers from "@/components/home/Trainers";
import Testimonials from "@/components/home/Testimonials";
import Pricing from "@/components/home/Pricing";
import CTA from "@/components/home/CTA";
import Location from "@/components/home/Location";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <Programs />
      <Trainers />
      <Testimonials />
      <Pricing />
      <CTA />
      <Location />
    </Layout>
  );
};

export default Index;

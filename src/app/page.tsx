import { Hero } from "@/components/home/hero";
import { ServicesGrid } from "@/components/home/services-grid";
import { MeetOwner } from "@/components/home/meet-owner";
import { HowItWorks } from "@/components/home/how-it-works";
import { Testimonials } from "@/components/home/testimonials";
import { FinalCta } from "@/components/home/final-cta";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AnimateOnScroll>
        <ServicesGrid />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <MeetOwner />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <HowItWorks />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Testimonials />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <FinalCta />
      </AnimateOnScroll>
    </>
  );
}

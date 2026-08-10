import { createFileRoute } from "@tanstack/react-router";

import { AboutPreview } from "@/components/AboutPreview";
import { ContactSection } from "@/components/ContactSection";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { ServiceAreas } from "@/components/ServiceAreas";
import { ServicesSection } from "@/components/ServicesSection";
import { Testimonials } from "@/components/Testimonials";
import { TrustBar } from "@/components/TrustBar";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { business, faqs } from "@/data/businessData";

const title = `${business.companyName} — Reliable Plumbing in ${business.city}`;
const description = `Licensed residential plumbers serving the ${business.region}. Emergency plumbing, drain cleaning, leak repair, water heaters and more. Call ${business.phone}.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesSection />
      <WhyChooseUs />
      <AboutPreview />
      <ServiceAreas />
      <Testimonials />
      <FAQ />
      <ContactSection />
    </>
  );
}

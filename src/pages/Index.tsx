import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HighlightsSection from "@/components/HighlightsSection";
import AgendaSection from "@/components/AgendaSection";
import SpecialGuestSection from "@/components/SpecialGuestSection";
import VideoSection from "@/components/VideoSection";
import TeaserVideoSection from "@/components/TeaserVideoSection";
import VenueSection from "@/components/VenueSection";
import ParticipationSection from "@/components/ParticipationSection";
import PartnersSection from "@/components/PartnersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "ISF Junicorn Global Summit 2026 - Dubai Edition",
            "description": "Where Rural Innovation meets Global Impact! An electrifying experience bringing together 70+ top Junicorns from India and UAE.",
            "startDate": "2026-01-10T09:00:00+04:00",
            "endDate": "2026-01-11T18:00:00+04:00",
            "location": {
              "@type": "Place",
              "name": "Manipal Academy of Higher Education",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Dubai Campus, Academic City",
                "addressLocality": "Dubai",
                "addressCountry": "UAE"
              }
            },
            "organizer": {
              "@type": "Organization",
              "name": "ISF Network"
            },
            "offers": {
              "@type": "Offer",
              "url": "#participation",
              "availability": "https://schema.org/InStock"
            }
          })
        }}
      />

      <HeroSection />
      <AboutSection />
      <TeaserVideoSection />
      <HighlightsSection />
      <AgendaSection />
      <SpecialGuestSection />
      <VideoSection />
      <VenueSection />
      <ParticipationSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
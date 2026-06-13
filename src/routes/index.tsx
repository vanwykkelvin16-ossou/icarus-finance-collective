import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Approach } from "@/components/site/Approach";
import { Leadership } from "@/components/site/Leadership";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Icarus Advisory — Corporate Finance & Treasury" },
      {
        name: "description",
        content:
          "Corporate finance and treasury advisory for business owners, executives, investors, and funders — clearer decisions and measurable value.",
      },
      { property: "og:title", content: "Icarus Advisory — Corporate Finance & Treasury" },
      {
        property: "og:description",
        content:
          "A corporate finance and treasury advisory firm helping businesses rise to their full financial potential.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Icarus Advisory",
          description:
            "Corporate finance and treasury advisory firm helping businesses unlock value and access the right capital solutions.",
          email: "Dirk@icarusadvisory.co.za",
          telephone: "+27832742247",
          url: "https://icarusadvisory.co.za",
          slogan: "Elevating Potential. Delivering Value.",
          founder: {
            "@type": "Person",
            name: "Dirk Fourie",
            jobTitle: "Chief Executive Officer",
          },
          areaServed: "ZA",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-paper">
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Approach />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

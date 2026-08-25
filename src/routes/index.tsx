import { createFileRoute } from "@tanstack/react-router";

import { SiteNav } from "@/components/site/SiteNav";
import { Hero } from "@/components/site/Hero";
import { CompletedProjects } from "@/components/site/CompletedProjects";
import { OngoingProjects } from "@/components/site/OngoingProjects";
import { CustomBuild } from "@/components/site/CustomBuild";
import { MarketDesk } from "@/components/site/MarketDesk";
import { About } from "@/components/site/About";
import { ContactFooter } from "@/components/site/ContactFooter";

const title = "Arya Developers — Luxury Homes in Hyderabad";
const description =
  "Completed and ongoing residential projects, custom home construction, and sale or rental listings from Arya Developers, Hyderabad.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Arya Developers",
          description,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Hyderabad",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <Hero />
        <CompletedProjects />
        <OngoingProjects />
        <CustomBuild />
        <MarketDesk />
        <About />
      </main>
      <ContactFooter />
    </div>
  );
}

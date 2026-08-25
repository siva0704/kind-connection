import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import ongoing1 from "@/assets/ongoing1.jpg";
import hero from "@/assets/hero-home.jpg";

export type PropertyStatus = "completed" | "ongoing";
export type Listing = "sale" | "rent" | "sold";

export interface Review {
  name: string;
  rating: number;
  date: string;
  note: string;
}

export interface Property {
  id: string;
  name: string;
  tagline: string;
  location: string;
  status: PropertyStatus;
  listing: Listing;
  price: string;
  priceNote: string;
  configuration: string;
  area: string;
  handover: string;
  progress: number;
  rating: number;
  reviewCount: number;
  cover: string;
  gallery: string[];
  description: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  amenities: string[];
  reviews: Review[];
}

export const properties: Property[] = [
  {
    id: "aurum-3bhk-homes",
    name: "Aurum 3 BHK Homes",
    tagline: "Independent 3 BHK homes with private courtyards",
    location: "Banjara Hills, Hyderabad",
    status: "completed",
    listing: "sale",
    price: "₹ 1.85 Cr",
    priceNote: "onwards · 4 homes left",
    configuration: "3 BHK home",
    area: "1,850 – 2,150 sq.ft",
    handover: "Delivered Mar 2024",
    progress: 100,
    rating: 4.8,
    reviewCount: 126,
    cover: hero,
    gallery: [hero, p2, p3, p4, p1],
    description:
      "A gated cluster of G+1 independent 3 BHK homes in low-iron glass, warm stone and brushed platinum. Every home is a corner plot with triple aspect light, a private courtyard and a utility zone kept away from the living areas.",
    highlights: [
      "Corner plots, zero shared walls",
      "Private courtyard and terrace garden",
      "IGBC Gold pre-certified envelope",
    ],
    specs: [
      { label: "Land parcel", value: "3.2 acres" },
      { label: "Configuration", value: "3 BHK · G+1 homes" },
      { label: "Homes", value: "48 homes" },
      { label: "Ceiling height", value: "11 ft 6 in" },
      { label: "Car parking", value: "2 covered per home" },
      { label: "RERA", value: "P02400004821" },
    ],
    amenities: [
      "Community pool",
      "Concierge desk",
      "Private theatre room",
      "Wellness spa",
      "EV charging bays",
      "Landscape court",
    ],
    reviews: [
      {
        name: "Meera Raghunathan",
        rating: 5,
        date: "Feb 2026",
        note: "Finishing quality is genuinely on par with what we saw in Singapore. Handover was two weeks early.",
      },
      {
        name: "Karthik V.",
        rating: 5,
        date: "Dec 2025",
        note: "The corner planning means every room gets morning light. Site team was transparent throughout.",
      },
      {
        name: "Anushka Jain",
        rating: 4,
        date: "Oct 2025",
        note: "Beautiful home. Entrance snagging took a while but the team stayed on it.",
      },
    ],
  },
  {
    id: "platina-2bhk-homes",
    name: "Platina 2 BHK Homes",
    tagline: "Nine courtyard homes around a still-water spine",
    location: "Kokapet, Hyderabad",
    status: "completed",
    listing: "sold",
    price: "₹ 1.15 Cr",
    priceNote: "all homes sold",
    configuration: "2 BHK home",
    area: "1,320 sq.ft",
    handover: "Delivered Nov 2023",
    progress: 100,
    rating: 4.9,
    reviewCount: 41,
    cover: p1,
    gallery: [p1, p2, p4, p3, hero],
    description:
      "Nine compact 2 BHK homes planned around a 90-metre reflecting channel. Interiors run travertine, oak and antique brass, with a fully glazed rear façade that folds away to a private deck.",
    highlights: [
      "Private deck to every home",
      "Skylit stair and storage loft",
      "Home automation across all zones",
    ],
    specs: [
      { label: "Land parcel", value: "1.6 acres" },
      { label: "Configuration", value: "2 BHK · G+1 homes" },
      { label: "Plot size", value: "180 – 220 sq.yd" },
      { label: "Ceiling height", value: "11 ft" },
      { label: "Car parking", value: "2 per home" },
      { label: "RERA", value: "P02400003117" },
    ],
    amenities: [
      "Reflecting water spine",
      "Clubhouse & gym",
      "Utility yard",
      "Kitchen garden",
      "Solar hot water",
      "Perimeter security",
    ],
    reviews: [
      {
        name: "Rohit & Sneha",
        rating: 5,
        date: "Jan 2026",
        note: "Materials were exactly what was promised in the sample home. No substitutions anywhere.",
      },
      {
        name: "Dr. Prasad N.",
        rating: 5,
        date: "Aug 2025",
        note: "The courtyard planning keeps the house cool through May. Thoughtful architecture.",
      },
    ],
  },
  {
    id: "meridian-1bhk-homes",
    name: "Meridian 1 BHK Homes",
    tagline: "Compact single-bedroom homes with deep verandas",
    location: "Jubilee Hills, Hyderabad",
    status: "completed",
    listing: "rent",
    price: "₹ 42,000",
    priceNote: "per month · furnished",
    configuration: "1 BHK home",
    area: "720 sq.ft",
    handover: "Delivered Jun 2022",
    progress: 100,
    rating: 4.6,
    reviewCount: 88,
    cover: p3,
    gallery: [p3, p2, hero, p1, p4],
    description:
      "Twenty-four single-storey 1 BHK homes, each with a nine-foot deep planted veranda. Handed over furnished in a warm platinum and oak palette, ideal for singles and young couples.",
    highlights: [
      "Deep planted veranda to every home",
      "Fully furnished rental inventory",
      "Managed housekeeping available",
    ],
    specs: [
      { label: "Land parcel", value: "1.4 acres" },
      { label: "Configuration", value: "1 BHK · single storey" },
      { label: "Homes", value: "24 homes" },
      { label: "Ceiling height", value: "10 ft 6 in" },
      { label: "Car parking", value: "1 covered" },
      { label: "RERA", value: "P02400002204" },
    ],
    amenities: [
      "Shared garden deck",
      "Co-work lounge",
      "Gym",
      "Visitor parking",
      "Power backup",
      "Pet friendly",
    ],
    reviews: [
      {
        name: "Ishaan Kapoor",
        rating: 5,
        date: "Mar 2026",
        note: "Renting here was frictionless — the property team handled everything digitally.",
      },
      {
        name: "Laila F.",
        rating: 4,
        date: "Nov 2025",
        note: "Lovely veranda. Street parking during peak hours is the only niggle.",
      },
    ],
  },
  {
    id: "solaire-3bhk-homes",
    name: "Solaire 3 BHK Homes",
    tagline: "Duplex 3 BHK homes above the lake road",
    location: "Gachibowli, Hyderabad",
    status: "ongoing",
    listing: "sale",
    price: "₹ 1.6 Cr",
    priceNote: "pre-launch pricing",
    configuration: "3 BHK duplex home",
    area: "1,900 – 2,300 sq.ft",
    handover: "Handover Dec 2027",
    progress: 46,
    rating: 4.7,
    reviewCount: 19,
    cover: ongoing1,
    gallery: [ongoing1, p4, hero, p3, p2],
    description:
      "Currently at roof slab for the first row. Solaire places thirty-two cross-ventilated 3 BHK duplex homes along the lake edge on the western boundary.",
    highlights: [
      "Four homes with private plunge pools",
      "Structure on schedule for first row",
      "Construction-linked payment plan",
    ],
    specs: [
      { label: "Land parcel", value: "2.8 acres" },
      { label: "Configuration", value: "3 BHK · G+1 duplex" },
      { label: "Homes", value: "32 homes" },
      { label: "Ceiling height", value: "11 ft" },
      { label: "Car parking", value: "2 covered" },
      { label: "RERA", value: "P02400006903" },
    ],
    amenities: [
      "Community pool",
      "Cricket net & turf",
      "Business centre",
      "Kids' atelier",
      "Amphitheatre",
      "EV charging",
    ],
    reviews: [
      {
        name: "Vikram S.",
        rating: 5,
        date: "Apr 2026",
        note: "Monthly progress reports with photos. Rare to see this level of reporting pre-handover.",
      },
    ],
  },
  {
    id: "arya-grove-2bhk",
    name: "Arya Grove 2 BHK Homes",
    tagline: "Garden homes in a retained mango orchard",
    location: "Shamirpet, Hyderabad",
    status: "ongoing",
    listing: "sale",
    price: "₹ 92 L",
    priceNote: "onwards",
    configuration: "2 BHK home",
    area: "1,180 sq.ft",
    handover: "Handover Aug 2027",
    progress: 28,
    rating: 4.5,
    reviewCount: 11,
    cover: p2,
    gallery: [p2, p1, ongoing1, p3, p4],
    description:
      "Sixty 2 BHK garden homes threaded through a retained mango orchard, with foundations complete and the first row of superstructure underway.",
    highlights: [
      "142 existing trees retained on site",
      "Every home opens to a private garden",
      "Rainwater harvesting across the parcel",
    ],
    specs: [
      { label: "Land parcel", value: "6.5 acres" },
      { label: "Configuration", value: "2 BHK · G+1 homes" },
      { label: "Homes", value: "60 homes" },
      { label: "Ceiling height", value: "10 ft" },
      { label: "Car parking", value: "2 per home" },
      { label: "RERA", value: "P02400007412" },
    ],
    amenities: [
      "Orchard walk",
      "Clubhouse",
      "Outdoor gym",
      "Organic plots",
      "Cycle loop",
      "Gated security",
    ],
    reviews: [
      {
        name: "Nandita B.",
        rating: 4,
        date: "May 2026",
        note: "Love that they kept the trees. Site visits are well organised every weekend.",
      },
    ],
  },
  {
    id: "vantage-1bhk-homes",
    name: "Vantage 1 BHK Homes",
    tagline: "Serviced single-bedroom homes for long stays",
    location: "Financial District, Hyderabad",
    status: "ongoing",
    listing: "rent",
    price: "₹ 55,000",
    priceNote: "per month · pre-leasing",
    configuration: "1 BHK serviced home",
    area: "760 – 840 sq.ft",
    handover: "Handover Mar 2028",
    progress: 12,
    rating: 4.4,
    reviewCount: 7,
    cover: p4,
    gallery: [p4, hero, p2, ongoing1, p1],
    description:
      "Excavation and raft complete. Vantage is a row of serviced 1 BHK homes around a landscaped court, aimed squarely at long-stay corporate tenancies.",
    highlights: [
      "Serviced homes with hotel-grade operations",
      "Landscaped central court",
      "Pre-leasing open to corporates",
    ],
    specs: [
      { label: "Land parcel", value: "1.9 acres" },
      { label: "Configuration", value: "1 BHK · single storey" },
      { label: "Homes", value: "36 serviced homes" },
      { label: "Ceiling height", value: "10 ft 6 in" },
      { label: "Car parking", value: "1 per home" },
      { label: "RERA", value: "P02400008055" },
    ],
    amenities: [
      "Housekeeping",
      "Garden lounge",
      "Meeting suites",
      "Gym & sauna",
      "Café court",
      "24×7 concierge",
    ],
    reviews: [
      {
        name: "Aravind R.",
        rating: 4,
        date: "Jun 2026",
        note: "Early days, but the leasing team has been precise with documentation.",
      },
    ],
  },
];

export const getProperty = (id: string) => properties.find((p) => p.id === id);

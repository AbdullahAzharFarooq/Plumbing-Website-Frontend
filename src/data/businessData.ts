import svcEmergency from "@/assets/svc-emergency.jpg";
import svcDrain from "@/assets/svc-drain.jpg";
import svcLeak from "@/assets/svc-leak.jpg";
import svcWaterHeater from "@/assets/svc-waterheater.jpg";
import svcPipe from "@/assets/svc-pipe.jpg";
import svcToilet from "@/assets/svc-toilet.jpg";
import svcFaucet from "@/assets/svc-faucet.jpg";
import svcSewer from "@/assets/svc-sewer.jpg";

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  benefits: string[];
  image: string;
  imageAlt: string;
  featured?: boolean;
};

export type Testimonial = {
  /** NOTE: placeholder content for development — replace with real, verified reviews before launch. */
  name: string;
  location: string;
  service: string;
  rating: number;
  quote: string;
  featured?: boolean;
};

export const business = {
  companyName: "Northbridge Plumbing",
  legalName: "Northbridge Plumbing Co.",
  tagline: "Reliable Plumbing. Done Right the First Time.",
  foundedYear: 2004,
  city: "Toronto",
  region: "Greater Toronto Area",
  phone: "(416) 555-1234",
  phoneHref: "tel:+14165551234",
  email: "service@northbridgeplumbing.ca",
  emailHref: "mailto:service@northbridgeplumbing.ca",
  address: {
    street: "142 Bridgeview Road, Unit 6",
    city: "Toronto",
    province: "ON",
    postalCode: "M6N 1L4",
    country: "CA",
  },
  businessHours: [
    { days: "Monday – Friday", hours: "7:00 AM – 7:00 PM" },
    { days: "Saturday", hours: "8:00 AM – 5:00 PM" },
    { days: "Sunday", hours: "Emergency service only" },
  ],
  emergencyNote: "Emergency plumbing available outside regular hours.",
  socialLinks: [
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Google", href: "https://google.com" },
  ],
} as const;

export const stats = [
  { value: "20+", label: "Years serving local homeowners" },
  { value: "9,400+", label: "Residential jobs completed" },
  { value: "4.9", label: "Average customer rating" },
  { value: "Same day", label: "Response on urgent calls" },
];

export const trustPoints = [
  "Licensed Professionals",
  "Experienced Team",
  "Quality Workmanship",
  "Reliable Service",
  "Local Experts",
];

export const serviceAreas = [
  "Toronto",
  "North York",
  "Scarborough",
  "Etobicoke",
  "Mississauga",
  "Vaughan",
  "Markham",
  "Richmond Hill",
];

export const services: Service[] = [
  {
    slug: "emergency-plumbing",
    name: "Emergency Plumbing",
    short: "Urgent help when water is where it shouldn't be.",
    description:
      "Burst pipes, major leaks and overflowing fixtures don't wait for business hours. We prioritise urgent calls, arrive prepared, and stabilise the situation before damage spreads through your home.",
    benefits: [
      "Priority response on urgent calls",
      "Shut-off, containment and repair in one visit",
      "Clear explanation before any work begins",
    ],
    image: svcEmergency,
    imageAlt: "Plumber inspecting a leaking pipe in a residential basement",
    featured: true,
  },
  {
    slug: "drain-cleaning",
    name: "Drain Cleaning",
    short: "Slow and blocked drains cleared properly.",
    description:
      "We locate the real cause of a blockage instead of pushing it further down the line, then clear it with the right equipment for your plumbing and leave the area clean.",
    benefits: [
      "Camera inspection where needed",
      "Full clearing, not a temporary flush",
      "Advice on preventing repeat blockages",
    ],
    image: svcDrain,
    imageAlt: "Plumber clearing a blocked household floor drain with an auger",
    featured: true,
  },
  {
    slug: "leak-repair",
    name: "Leak Repair",
    short: "Hidden and visible leaks traced and sealed.",
    description:
      "Small leaks quietly cause the most expensive damage. We trace the source, repair it correctly, and check the surrounding plumbing so the problem doesn't return in a month.",
    benefits: ["Accurate leak detection", "Lasting repair, not a patch", "Damage assessment included"],
    image: svcLeak,
    imageAlt: "Close-up of a plumber sealing a dripping pipe joint under a sink",
  },
  {
    slug: "water-heater-services",
    name: "Water Heater Services",
    short: "Repair, maintenance and replacement.",
    description:
      "From no hot water to end-of-life replacement, we service tank and tankless systems and recommend the option that genuinely fits your household — not the most expensive one.",
    benefits: ["Tank and tankless experience", "Honest repair-or-replace advice", "Tidy, code-conscious installs"],
    image: svcWaterHeater,
    imageAlt: "Technician servicing a residential water heater in a utility room",
  },
  {
    slug: "pipe-repair",
    name: "Pipe Repair",
    short: "Corroded, damaged and noisy pipework.",
    description:
      "We repair and replace supply and drain lines with clean routing and proper support, keeping disruption to your walls and floors as low as the job allows.",
    benefits: ["Copper and PEX work", "Neat, accessible routing", "Repairs documented for you"],
    image: svcPipe,
    imageAlt: "Neatly installed copper and PEX water pipes along a basement ceiling",
  },
  {
    slug: "toilet-repair",
    name: "Toilet Repair",
    short: "Running, leaking or weak-flushing toilets.",
    description:
      "Constant running, rocking bases and weak flushes are usually straightforward once diagnosed correctly. We repair or replace with parts that hold up.",
    benefits: ["Same-visit repair on common faults", "Quality replacement parts", "Water-use improvements"],
    image: svcToilet,
    imageAlt: "Plumber repairing a modern white toilet in a bright bathroom",
  },
  {
    slug: "faucet-fixture-repair",
    name: "Faucet & Fixture Repair",
    short: "Kitchen and bathroom fixtures, fitted right.",
    description:
      "Dripping faucets, low pressure and new fixture installations, completed with careful sealing and a finish that looks like it belongs in your home.",
    benefits: ["Precise, watertight installs", "Pressure and flow checks", "Surfaces protected while we work"],
    image: svcFaucet,
    imageAlt: "Hands installing a brushed nickel kitchen faucet on a stone countertop",
  },
  {
    slug: "sewer-services",
    name: "Sewer Services",
    short: "Main line inspection and repair.",
    description:
      "Recurring backups usually point to the main line. We inspect with a camera, explain exactly what we find, and set out the practical options before any digging.",
    benefits: ["Camera inspection and reporting", "Root and blockage clearing", "Straight talk on bigger repairs"],
    image: svcSewer,
    imageAlt: "Plumber reviewing a sewer camera inspection monitor beside an outdoor cleanout",
  },
];

export const whyChooseUs = [
  {
    title: "Experienced Professionals",
    body: "Skilled workmanship backed by two decades of practical experience in local homes.",
  },
  {
    title: "Clear Communication",
    body: "Straightforward communication from first contact to completion — no surprises mid-job.",
  },
  {
    title: "Reliable Service",
    body: "Professional service with respect for your time, your home and your floors.",
  },
  {
    title: "Quality Workmanship",
    body: "We focus on solving the problem properly rather than applying temporary fixes.",
  },
];

export const values = [
  {
    title: "Do it once, properly",
    body: "A repair is finished when it will still be holding in five years. That standard decides how we work.",
  },
  {
    title: "Respect the home",
    body: "Boots off, drop sheets down, workspace left cleaner than we found it. Every visit.",
  },
  {
    title: "Explain before acting",
    body: "You hear what's wrong, what it takes to fix, and what it costs — before a tool comes out.",
  },
];

export const team = [
  { name: "Daniel Marchetti", role: "Founder & Licensed Plumber", years: "20 years experience" },
  { name: "Ray Okonkwo", role: "Senior Service Technician", years: "14 years experience" },
  { name: "Priya Raman", role: "Service Coordinator", years: "9 years experience" },
];

export const faqs = [
  {
    q: "What plumbing services do you provide?",
    a: "We handle residential plumbing across emergency repairs, drain cleaning, leak repair, water heaters, pipe repair, toilets, faucets and fixtures, and sewer line inspection and repair.",
  },
  {
    q: "Do you offer emergency plumbing?",
    a: "Yes. Urgent calls such as burst pipes, major leaks and sewage backups are prioritised, including outside regular business hours.",
  },
  {
    q: "What areas do you serve?",
    a: `We serve homeowners across ${serviceAreas.slice(0, 5).join(", ")} and surrounding areas in the ${business.region}.`,
  },
  {
    q: "What are your business hours?",
    a: "Monday to Friday 7:00 AM to 7:00 PM, Saturday 8:00 AM to 5:00 PM, with emergency service available on Sundays and after hours.",
  },
  {
    q: "How can I contact you?",
    a: `Call ${business.phone} for the fastest response, or send a message through our contact form and we'll get back to you shortly.`,
  },
  {
    q: "Do you provide estimates?",
    a: "Yes. We assess the work first and explain the scope and pricing before starting, so you can make the decision with full information.",
  },
  {
    q: "How quickly can you respond?",
    a: "Most urgent calls receive same-day attention. Scheduled work is usually booked within a few business days, depending on the season.",
  },
];

/** NOTE: placeholder testimonials for development. Replace with verified customer reviews before launch. */
export const testimonials: Testimonial[] = [
  {
    name: "Megan Doyle",
    location: "North York",
    service: "Emergency Plumbing",
    rating: 5,
    quote:
      "A pipe let go in our basement on a Saturday evening. They talked me through shutting the water off on the phone, arrived within the hour, and had it repaired and cleaned up before midnight. Calm, professional, and completely fair about the cost.",
    featured: true,
  },
  {
    name: "Andrew Chen",
    location: "Etobicoke",
    service: "Water Heater Replacement",
    rating: 5,
    quote:
      "They could easily have sold me the largest unit available. Instead I got a clear explanation of what my house actually needed. Install was spotless.",
  },
  {
    name: "Sofia Ramos",
    location: "Scarborough",
    service: "Drain Cleaning",
    rating: 5,
    quote:
      "Third plumber we've used for a recurring kitchen blockage and the first to actually find the cause. Haven't had an issue since.",
  },
  {
    name: "Peter Vasilenko",
    location: "Toronto",
    service: "Leak Repair",
    rating: 5,
    quote:
      "Traced a leak behind a bathroom wall with minimal cutting, repaired it, and patched up neatly. Very respectful of the house.",
  },
  {
    name: "Hannah Whitfield",
    location: "Mississauga",
    service: "Faucet & Fixture Repair",
    rating: 5,
    quote:
      "Booked easily, arrived in the window given, and replaced two fixtures in under an hour. Straightforward and pleasant to deal with.",
  },
  {
    name: "Jerome Baptiste",
    location: "Vaughan",
    service: "Sewer Services",
    rating: 5,
    quote:
      "Camera inspection came with a plain-English explanation and photos. No pressure, just options. That's rare in this trade.",
  },
  {
    name: "Linda Kowalski",
    location: "North York",
    service: "Toilet Repair",
    rating: 4,
    quote:
      "Quick, tidy repair on a toilet that had been running for months. Slightly later than scheduled but they called ahead to let me know.",
  },
];

export const ratingSummary = {
  average: 4.9,
  count: 312,
  breakdown: [
    { stars: 5, percent: 92 },
    { stars: 4, percent: 6 },
    { stars: 3, percent: 1 },
    { stars: 2, percent: 1 },
    { stars: 1, percent: 0 },
  ],
};

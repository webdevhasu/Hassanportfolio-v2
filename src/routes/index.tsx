import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowUpRight,
  Building2,
  Code2,
  Layers,
  Layout,
  MessageCircle,
  ShoppingCart,
  Smartphone,
  Star,
  CheckCircle2,
  Sparkles,
  UserRound,
  Menu,
  X,
} from "lucide-react";

import hassanHero from "@/assets/hassanhero.png";
import projectKamran from "@/assets/project-kamran-cloth-house.jpg";
import projectBannu from "@/assets/project-bannu-masala.jpg";
import projectNorthlinks from "@/assets/project-northlinks-broadband.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Hassan Wali — Full Stack Web Developer & App Builder",
      },
      {
        name: "description",
        content:
          "Freelance web developer in Pakistan building fast, modern websites, e-commerce stores, web apps and mobile apps that grow your business.",
      },
      {
        property: "og:title",
        content: "Hassan Wali — Full Stack Web Developer & App Builder",
      },
      {
        property: "og:description",
        content:
          "I build fast, modern websites that grow your business. Landing pages, business websites, e-commerce, web apps and mobile apps.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Hassan Wali — Full Stack Web Developer" },
      {
        name: "twitter:description",
        content:
          "I build fast, modern websites that grow your business. Based in Pakistan, working worldwide.",
      },
    ],
  }),
  component: Index,
});

const WHATSAPP_URL =
  "https://wa.me/923474054450?text=" +
  encodeURIComponent(
    "Hi Hassan! I saw your portfolio and I'd like to discuss a project."
  );

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Reviews", href: "#reviews" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: Layout,
    title: "Landing Pages",
    description: "High-converting landing pages that turn visitors into customers.",
  },
  {
    icon: UserRound,
    title: "Portfolio Websites",
    description: "Elegant personal portfolios that make your work impossible to ignore.",
  },
  {
    icon: Building2,
    title: "Business Websites",
    description: "Professional websites that build trust and bring in local clients.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Websites",
    description: "Complete online stores with payments, orders and inventory built in.",
  },
  {
    icon: Code2,
    title: "Full Stack Web Apps",
    description: "Custom web applications with dashboards, logins and real-time data.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Cross-platform mobile apps for Android and iOS, built to perform.",
  },
];

const PROJECTS = [
  {
    name: "Kamran Cloth House",
    type: "E-commerce website",
    url: "https://kamranclothhouse.pk",
    domain: "kamranclothhouse.pk",
    price: "Rs 30,000",
    image: projectKamran,
  },
  {
    name: "Bannu Masala",
    type: "Business website",
    url: "https://bannumasala.com",
    domain: "bannumasala.com",
    price: "Rs 30,000",
    image: projectBannu,
  },
  {
    name: "Northlinks Broadband",
    type: "Static business website",
    url: "https://northlinksbroadband.vercel.app",
    domain: "northlinksbroadband.vercel.app",
    price: "Rs 8,000",
    image: projectNorthlinks,
  },
];

const REVIEWS = [
  {
    name: "Kamran Khan",
    business: "Kamran Cloth House",
    quote:
      "Hassan ne hamari online store zabardast bana di. Ab orders online aate hain aur site bohat fast chalti hai. Pura kaam waqt par deliver kiya. Highly recommended!",
  },
  {
    name: "Hassan Irfan",
    business: "Bannu Masala",
    quote:
      "Bohat professional kaam kiya bhai ne. Website hamare business ke liye bilkul sahi design hui, aur mobile pe bhi perfect chalti hai. Shukriya Hassan!",
  },
  {
    name: "Abdul Qadir Jan",
    business: "Northlinks Broadband",
    quote:
      "Kaam ki quality lajawab hai. Website saaf, fast aur har device par achhi lagti hai. Hassan ke sath kaam karne ka maza hi kuch aur hai.",
  },
];

const PRICING = [
  { service: "Static / Landing Page", price: "Rs 5,000 – 8,000", note: "1–3 pages, fast delivery" },
  { service: "Business Website", price: "Rs 15,000 – 25,000", note: "Multi-page, contact forms" },
  { service: "Ecommerce / Full Stack", price: "Rs 30,000+", note: "Store, payments, dashboards" },
  { service: "Mobile App", price: "Custom quote", note: "Android & iOS" },
];

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className ?? ""}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-4 text-base text-muted-foreground">{subtitle}</p> : null}
    </Reveal>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto grid h-16 max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center px-4 sm:px-6">
        <a href="/" className="flex min-w-0 items-center gap-2">
          <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
            <Code2 className="size-4" />
          </span>
          <span className="truncate font-display text-lg font-bold tracking-tight text-foreground">
            Hassan Wali
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="ml-3 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-colors hover:bg-primary/90"
          >
            <MessageCircle className="size-4" />
            Hire Me
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid size-10 shrink-0 place-items-center rounded-lg border border-border text-foreground md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-border bg-background px-4 pb-4 pt-2 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
          >
            <MessageCircle className="size-4" />
            Let's Work Together
          </a>
        </nav>
      ) : null}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-accent-glow blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="size-2 rounded-full bg-primary shadow-glow" />
            Available for new projects
          </p>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Hassan Wali
          </h1>
          <p className="mt-3 font-display text-xl font-semibold text-primary sm:text-2xl">
            Full Stack Web Developer &amp; App Builder
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I build fast, modern websites that grow your business. From landing pages to full
            e-commerce stores and mobile apps — designed, built and delivered with care.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03] active:scale-95"
            >
              <MessageCircle className="size-5" />
              Let's Work Together
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              View My Work
              <ArrowUpRight className="size-4" />
            </a>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Based in Pakistan — working with clients worldwide
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative mx-auto w-full max-w-sm sm:max-w-md">
            {/* Ambient background glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-gradient-to-b from-primary/25 via-primary/10 to-transparent blur-3xl opacity-80"
            />

            {/* Architectural backdrop card / pedestal container */}
            <div
              aria-hidden
              className="absolute inset-x-2 sm:inset-x-4 bottom-0 top-12 rounded-[2.5rem] border border-border/80 bg-gradient-to-b from-primary/10 via-surface/60 to-surface/90 shadow-xl backdrop-blur-sm -z-0"
            />

            {/* Glowing spotlight behind head & shoulders */}
            <div
              aria-hidden
              className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 size-48 rounded-full bg-primary/20 blur-2xl"
            />

            {/* Floating Badge 1: Top-Right (5.0 Rating & Trust) */}
            <div className="animate-float-slow absolute -top-3 right-0 sm:-right-4 z-20 flex items-center gap-2.5 rounded-2xl border border-border/80 bg-background/95 px-3.5 py-2.5 shadow-card backdrop-blur-md transition-transform hover:scale-105">
              <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-amber-500/15 text-amber-500">
                <Star className="size-4.5 fill-amber-500 text-amber-500" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-foreground">5.0 Rating</span>
                  <span className="flex text-amber-500 text-[10px] leading-none">★★★★★</span>
                </div>
                <p className="text-[11px] font-medium text-muted-foreground">100% Client Satisfaction</p>
              </div>
            </div>

            {/* Floating Badge 2: Bottom-Left (50+ Projects Delivered) */}
            <div className="animate-float-delayed absolute bottom-8 -left-2 sm:-left-6 z-20 flex items-center gap-3 rounded-2xl border border-border/80 bg-background/95 px-3.5 py-2.5 shadow-card backdrop-blur-md transition-transform hover:scale-105">
              <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                <CheckCircle2 className="size-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold tracking-tight text-foreground">50+ Projects</p>
                <p className="text-[11px] font-medium text-muted-foreground">Successfully Delivered</p>
              </div>
            </div>

            {/* Floating Badge 3: Bottom-Right (Stack & Expertise) */}
            <div className="animate-float-slow absolute -bottom-3 right-2 sm:-right-2 z-20 flex items-center gap-2 rounded-xl border border-border/80 bg-background/95 px-3 py-1.5 shadow-card backdrop-blur-md">
              <span className="relative flex size-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              <div className="flex items-center gap-1 text-[11px] font-semibold text-foreground">
                <Sparkles className="size-3 text-primary" />
                <span>Full Stack &amp; Mobile</span>
              </div>
            </div>

            {/* Portrait Image with soft bottom dissolve mask */}
            <div className="relative z-10 overflow-hidden pt-4 pb-1">
              <img
                src={hassanHero}
                alt="Hassan Wali, full stack web developer"
                className="relative z-10 mx-auto block max-h-[460px] w-full object-contain drop-shadow-2xl [mask-image:linear-gradient(to_bottom,black_75%,transparent_98%)]"
                loading="eager"
              />

              {/* Seamless gradient overlay to smoothly blend the bottom cut */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background via-background/70 to-transparent z-10"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Services"
          title="What I Can Build For You"
          subtitle="Everything you need to take your business online — designed, developed and delivered end to end."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 100}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <div className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="size-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCover({ image, name }: { image: string; name: string }) {
  return (
    <div className="relative h-44 overflow-hidden rounded-t-2xl border-b border-border bg-surface">
      <img
        src={image}
        alt={`${name} website preview`}
        width={1088}
        height={608}
        loading="lazy"
        className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.04]"
      />
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="border-t border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Recent Work"
          subtitle="Real projects for real businesses — each one live and working today."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.name} delay={i * 100}>
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <ProjectCover image={project.image} name={project.name} />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
                    <span className="shrink-0 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {project.price}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{project.type}</p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
                  >
                    Visit Live Site
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Reviews"
          title="What Clients Say"
          subtitle="Feedback straight from the people I've built for."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <Reveal key={review.name} delay={i * 100}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <div className="flex gap-1 text-primary" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4 fill-primary" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                  "{review.quote}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary/10 font-display text-sm font-bold text-primary">
                    {review.name.charAt(0)}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold text-foreground">
                      {review.name}
                    </span>
                    <span className="block truncate text-xs text-muted-foreground">
                      {review.business}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="border-t border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, Honest Pricing"
          subtitle="Clear rates with no hidden costs. Every project gets a fixed quote before work starts."
        />
        <Reveal className="mt-14">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
            {PRICING.map((row, i) => (
              <div
                key={row.service}
                className={`grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-5 sm:grid-cols-[minmax(0,1fr)_auto_auto] sm:px-8 ${
                  i > 0 ? "border-t border-border" : ""
                }`}
              >
                <div className="min-w-0">
                  <p className="truncate font-display text-base font-semibold text-foreground sm:text-lg">
                    {row.service}
                  </p>
                  <p className="text-xs text-muted-foreground sm:hidden">{row.note}</p>
                </div>
                <p className="hidden text-sm text-muted-foreground sm:block">{row.note}</p>
                <p className="whitespace-nowrap text-right font-display text-base font-bold text-primary sm:text-lg">
                  {row.price}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Need something different?{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-primary underline-offset-4 hover:underline"
            >
              Message me on WhatsApp
            </a>{" "}
            for a custom quote.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-glow blur-[110px]"
      />
      <Reveal className="relative mx-auto max-w-2xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Ready to start your project?
        </h2>
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          Tell me about your idea and I'll reply within a few hours with a plan and a quote.
          Based in Pakistan — no project too big or too small.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-3 rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03] active:scale-95"
        >
          <MessageCircle className="size-6" />
          Chat on WhatsApp
        </a>
        <p className="mt-4 text-sm text-muted-foreground">Fast replies — usually within hours</p>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-6 sm:grid-cols-[minmax(0,1fr)_auto]">
          <div className="flex items-center gap-2">
            <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
              <Code2 className="size-4" />
            </span>
            <span className="font-display text-base font-bold text-foreground">Hassan Wali</span>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2026 Hassan Wali — All rights reserved
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-foreground"
          >
            <MessageCircle className="size-4" />
            wa.me/923474054450
          </a>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Reviews />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

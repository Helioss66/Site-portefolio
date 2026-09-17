import {
  ArrowUpRight,
  CodeBlock,
  Devices,
  GitBranch,
  PenNib,
  Terminal,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";

const NAV_LINKS = [
  { label: "Projets", href: "#projets" },
  { label: "Parcours", href: "#parcours" },
  { label: "Contact", href: "#contact" },
];

const SKILLS = [
  {
    title: "Direction de projet",
    body: "Cadrer un besoin réel, fixer un scope tenable, arbitrer les choix techniques et de design avec l'IA plutôt que de tout accepter.",
    icon: Terminal,
    span: "md:col-span-2",
    tint: true,
  },
  {
    title: "Esprit critique",
    body: "Tester les cas limites, remettre en cause une méthode qui ne tient pas, refuser un raccourci quand il pose un problème (droit d'auteur, biais).",
    icon: PenNib,
    span: "",
    tint: false,
  },
  {
    title: "Rigueur des données",
    body: "Croiser plusieurs sources, documenter leurs limites, viser la reproductibilité plutôt que l'effet visuel seul.",
    icon: CodeBlock,
    span: "",
    tint: false,
  },
  {
    title: "Mise en production",
    body: "Versionner, déployer, documenter les décisions pour qu'un projet reste compréhensible longtemps après l'avoir fait.",
    icon: GitBranch,
    span: "md:col-span-2",
    tint: true,
  },
];

const PROJECTS = [
  {
    title: "Atlas géopolitique des forêts",
    body: "Carte interactive sur la déforestation en Amazonie, dans le bassin du Congo, en Asie du Sud-Est et en forêt boréale : causes, évolution depuis 2001, sources croisées et vérifiables. Projet personnel HGGSP, données et méthodologie sourcées.",
    tags: ["HTML/CSS/JS", "Leaflet", "Data viz"],
    href: "https://atlas-geopolitique-forets.netlify.app/",
    featured: true,
  },
  {
    title: "Vérificateur d'articles",
    body: "Outil personnel d'aide à la lecture critique d'articles politiques/géopolitiques : détection de procédés rhétoriques, vérification d'affirmations chiffrées (Wikidata, Banque mondiale) et mise en contexte. Choix assumé de n'utiliser aucun LLM ni API payante, pour rester gratuit et transparent. Projet HGGSP.",
    tags: ["Node.js/Express", "APIs ouvertes", "Esprit critique"],
    href: "https://verificateur-article.onrender.com/",
    featured: false,
  },
  {
    title: "Refonte e-commerce Beauvelli",
    body: "Boutique en ligne pour une marque de vêtements franco-italienne : sélection de coloris et tailles, panier, avis clients. Maquette complète, pas encore publiée.",
    tags: ["HTML/CSS/JS", "Design system", "E-commerce"],
    href: "https://claude.ai/artifact/KjCnNKupsHoVKhuw94vDeJ?org=358432dd-c7b4-4a48-b5f3-1514002d8068",
    featured: false,
  },
  {
    title: "Site du film collectif Hoche Film",
    body: "Refonte du site vitrine d'un projet de film collectif porté par un élève de Hoche : présentation du projet, postes à pourvoir et timeline de l'année.",
    tags: ["HTML/CSS/JS", "SEO", "Design éditorial"],
    href: "https://claude.ai/artifact/3N1cPRvzAC7sLmHPgTyqKY",
    featured: false,
  },
  {
    title: "Discipline, suivi sportif",
    body: "Progressive Web App de suivi sportif : planning personnalisé, comparaison de progrès sur plusieurs semaines, journal de ressenti et suivi d'hydratation. Fonctionne hors-ligne.",
    tags: ["PWA", "JavaScript", "Offline-first"],
    href: "https://discipline-app-8e8010.netlify.app/",
    featured: false,
  },
];

const TIMELINE = [
  { year: "2024", label: "Premiers sites persos, autodidacte" },
  { year: "2025", label: "Projets pour des tiers (clubs, association)" },
  { year: "2026", label: "Terminale, projets dirigés avec l'IA, préparation CPGE" },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="font-mono text-sm font-medium tracking-tight">
          hugo<span className="text-accent">.</span>dev
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform active:scale-[0.98]"
        >
          Me contacter
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-6 pt-16 pb-24 md:grid-cols-2 md:items-center md:pt-24">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
          Direction de projet &amp; littératie IA
        </p>
        <h1 className="mt-4 text-4xl font-medium tracking-tight text-balance md:text-5xl lg:text-6xl">
          Des interfaces claires, pensées pour être utilisées.
        </h1>
        <p className="mt-6 max-w-[42ch] text-base leading-relaxed text-muted">
          Terminale au lycée Hoche, je dirige la construction de sites et
          applications pour des besoins réels, en m&rsquo;appuyant sur l&rsquo;IA
          et en gardant un regard critique sur chaque choix.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projets"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-transform active:scale-[0.98]"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-foreground/40"
          >
            Me contacter
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <HeroVisual />
      </Reveal>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-sm">
      <div
        className="absolute inset-0 rounded-[2rem]"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, var(--accent-soft), transparent 60%)",
        }}
      />
      <div
        className="absolute inset-6 rounded-[1.5rem] border border-border"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute inset-x-10 top-1/2 -translate-y-1/2 rounded-2xl border border-border bg-surface p-5 shadow-2xl shadow-black/40">
        <div className="flex items-center gap-2 text-muted">
          <Devices size={18} weight="regular" />
          <span className="font-mono text-xs">responsive-first</span>
        </div>
        <div className="mt-4 space-y-2">
          <div className="h-2 w-full rounded-full bg-surface-2" />
          <div className="h-2 w-4/5 rounded-full bg-surface-2" />
          <div className="h-2 w-3/5 rounded-full bg-accent-soft" />
        </div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
          Ce que j&rsquo;utilise au quotidien
        </h2>
      </Reveal>
      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
        {SKILLS.map((skill, i) => (
          <Reveal key={skill.title} delay={i * 0.05} className={skill.span}>
            <div
              className={`h-full rounded-2xl border border-border p-6 ${
                skill.tint ? "bg-gradient-to-br from-surface to-surface-2" : "bg-surface"
              }`}
            >
              <skill.icon size={22} weight="regular" className="text-accent" />
              <h3 className="mt-4 text-base font-medium">{skill.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {skill.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const featured = PROJECTS.find((p) => p.featured)!;
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projets" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
          Projets
        </h2>
      </Reveal>

      <Reveal delay={0.05} className="mt-10">
        <ProjectCard project={featured} large />
      </Reveal>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        {rest.map((project, i) => (
          <Reveal key={project.title} delay={0.1 + i * 0.05}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  large = false,
}: {
  project: (typeof PROJECTS)[number];
  large?: boolean;
}) {
  const isExternal = project.href.startsWith("http");
  return (
    <a
      href={project.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`group flex h-full flex-col justify-between rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-foreground/30 ${
        large ? "md:p-10" : ""
      }`}
    >
      <div>
        <h3
          className={`font-medium tracking-tight ${large ? "text-xl md:text-2xl" : "text-lg"}`}
        >
          {project.title}
        </h3>
        <p className="mt-3 max-w-[60ch] text-sm leading-relaxed text-muted">
          {project.body}
        </p>
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-surface-2 px-3 py-1 font-mono text-xs text-muted"
          >
            {tag}
          </span>
        ))}
        <ArrowUpRight
          size={16}
          className="ml-auto text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
        />
      </div>
    </a>
  );
}

function About() {
  return (
    <section id="parcours" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
          Parcours
        </h2>
        <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-muted">
          En terminale au lycée Hoche à Versailles, je mène en parallèle des
          cours plusieurs projets numériques, dirigés avec l&rsquo;IA et
          construits avec rigueur : sources vérifiées, cas limites testés,
          choix documentés plutôt que laissés au hasard.
        </p>
        <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-muted">
          Avant ça, une préparation militaire faite en autodidacte via un
          CIRFA — recherchée seul, menée à terme malgré les réticences
          initiales de mes parents, terminée major de section — m&rsquo;a
          donné une discipline que je retrouve dans la façon dont je mène mes
          projets aujourd&rsquo;hui. Objectif : intégrer une CPGE à la rentrée
          prochaine.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10 max-w-md space-y-4">
        {TIMELINE.map((item) => (
          <div
            key={item.year}
            className="flex items-baseline gap-4 border-t border-border pt-4"
          >
            <span className="font-mono text-sm text-accent">
              {item.year}
            </span>
            <span className="text-sm text-muted">{item.label}</span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal className="rounded-3xl border border-border bg-surface px-8 py-16 text-center md:px-16">
        <h2 className="text-2xl font-medium tracking-tight md:text-4xl">
          Un projet en tête ?
        </h2>
        <p className="mx-auto mt-4 max-w-[45ch] text-base leading-relaxed text-muted">
          Que ce soit pour un site, une application ou juste discuter d&rsquo;une
          idée, n&rsquo;hésite pas à m&rsquo;écrire.
        </p>
        <a
          href="mailto:hugo.dev@example.com"
          className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-transform active:scale-[0.98]"
        >
          Me contacter
        </a>
        <p className="mt-3 font-mono text-xs text-muted">
          * adresse à remplacer par ton vrai contact.
        </p>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted md:flex-row">
        <span>© 2026 Hugo T.</span>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Helioss66"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            GitHub
          </a>
          <a href="#" className="hover:text-foreground">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

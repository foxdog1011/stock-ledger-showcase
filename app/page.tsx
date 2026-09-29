import {
  ArrowDown,
  ArrowUpRight,
  CheckCircle2,
  CircleDot,
  ExternalLink,
  Github,
  LockKeyhole,
  Play,
  Radar,
  ShieldCheck,
  TestTube2,
  Youtube,
} from "lucide-react";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) => `${BASE_PATH}${path}`;

const links = {
  production: "https://covenest.systems",
  github: "https://github.com/foxdog1011",
  youtube: "https://www.youtube.com/channel/UC-TJSNbjSGP4c447hPjYLow",
};

const metrics = [
  { value: "12+", label: "Market data sources", source: "Production integrations" },
  { value: "924", label: "Public videos", source: "YouTube Data API" },
  { value: "263K+", label: "Channel views", source: "YouTube Data API" },
  { value: "2026", label: "Production since", source: "Current system" },
];

const cases = [
  {
    index: "01",
    title: "A signal failed its own test.",
    summary:
      "A flagship buy-candidate signal produced a 46% hit rate across 325 verified calls.",
    evidence:
      "Realized outcomes did not support the confidence implied by the signal.",
    decision:
      "Retired the signal and separated reported confidence from observed performance.",
    prevention:
      "Calibration checks now warn when confidence and realized outcomes drift apart.",
    icon: Radar,
  },
  {
    index: "02",
    title: "Keeping historical analysis point-in-time correct.",
    summary:
      "Using today's price inside a historical portfolio view creates a result that never existed at the time.",
    evidence:
      "Consumers need data coverage by symbol and date, not only a table-level latest timestamp.",
    decision:
      "Built a canonical resolver that enforces date ≤ as_of and carries source, effective date, freshness, and degradation.",
    prevention:
      "Missing values stay unavailable rather than becoming zero, with focused tests protecting point-in-time behavior.",
    icon: TestTube2,
  },
  {
    index: "03",
    title: "Keeping AI inside explicit operational boundaries.",
    summary:
      "AI tools can read research and record completed activity, but they do not have order-execution capability.",
    evidence:
      "Public and private tools are split by permission scope, with read/write boundaries enforced by profile.",
    decision:
      "Kept execution outside the agent surface and added compliance checks around generated research.",
    prevention:
      "Prompt regression tests, logged fallbacks, and fail-closed publishing protect critical outputs.",
    icon: ShieldCheck,
  },
];

function ExternalButton({ href, children, variant = "secondary", label }: { href: string; children: React.ReactNode; variant?: "primary" | "secondary" | "quiet"; label?: string }) {
  return (
    <a className={`button button-${variant}`} href={href} target="_blank" rel="noreferrer" aria-label={label}>
      {children}<ArrowUpRight size={15} aria-hidden="true" />
    </a>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="Stock Ledger showcase home">
            <span className="brand-mark"><svg viewBox="0 0 28 28" aria-hidden="true"><path d="M5 20V8m0 12h18M8 17l4-5 4 3 6-8" /></svg></span>
            <span><b>Stock Ledger</b><small>Production case study</small></span>
          </a>
          <nav aria-label="Showcase navigation">
            <a href="#architecture">Architecture</a>
            <a href="#cases">Case studies</a>
            <a href="#evidence">Evidence</a>
          </nav>
          <div className="header-links">
            <a href={links.github} target="_blank" rel="noreferrer" aria-label="Eason Lin on GitHub"><Github size={18} aria-hidden="true" /></a>
            <a href={links.youtube} target="_blank" rel="noreferrer" aria-label="JARVIS stock research YouTube channel"><Youtube size={19} aria-hidden="true" /></a>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-grid" aria-hidden="true" />
          <div className="container hero-content">
            <div className="hero-copy">
              <div className="status-line"><CircleDot size={14} aria-hidden="true" /><span>Independently built &amp; operated</span><span className="status-separator">•</span><span>Production since 2026</span></div>
              <p className="eyebrow">TAIWAN EQUITY RESEARCH & PORTFOLIO MONITORING</p>
              <h1>A production research and portfolio monitoring system for Taiwan equities.</h1>
              <p className="hero-lede">
                Stock Ledger combines market data, portfolio records, sourced research, scheduled analysis, and automated publishing in one system. I built it for my own workflow and have operated it in production since 2026.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#cases">Read the engineering cases<ArrowDown size={15} aria-hidden="true" /></a>
                <ExternalButton href={links.production} label="Open the authenticated Stock Ledger production application">Production app <span className="button-note">login required</span></ExternalButton>
              </div>
              <div className="trust-note"><LockKeyhole size={15} aria-hidden="true" /><span>The product stays private. This case study uses dated, sanitized evidence and never loads portfolio data.</span></div>
            </div>
            <aside className="hero-proof" aria-label="System proof points">
              <div className="proof-head"><span>VERIFIED SYSTEM SNAPSHOT</span><time dateTime="2026-08-31">31 AUG 2026</time></div>
              <div className="metric-grid">
                {metrics.map((metric) => <div className="metric" key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span><small>{metric.source}</small></div>)}
              </div>
              <div className="proof-foot"><CheckCircle2 size={15} aria-hidden="true" /><span>Numbers are supporting evidence—not the product claim.</span></div>
            </aside>
          </div>
        </section>

        <section className="section" id="architecture">
          <div className="container">
            <div className="section-heading">
              <div><p className="eyebrow">SYSTEM ARCHITECTURE</p><h2>A private workspace with a deliberately smaller public surface.</h2></div>
              <p>Shared prices and research can inform personal calculations. Personal trades, cash, and decisions never flow back into public research or content.</p>
            </div>
            <ArchitectureDiagram />
            <div className="boundary-notes">
              <div><span className="boundary-dot shared" /><p><b>Shared truth</b>Canonical market history, research, signals, and job evidence.</p></div>
              <div><span className="boundary-dot private" /><p><b>Private scope</b>Supabase JWT and RLS own trades, cash, theses, and decisions.</p></div>
              <div><span className="boundary-dot internal" /><p><b>Trusted operations</b>Schedulers and MCP profiles stay partitioned by capability.</p></div>
            </div>
          </div>
        </section>

        <section className="section section-muted" id="cases">
          <div className="container">
            <div className="section-heading case-heading">
              <div><p className="eyebrow">ENGINEERING CASE STUDIES</p><h2>Three decisions that changed the system.</h2></div>
              <p>Each case starts with a result or failure, shows the decision that followed, and records the safeguard added afterward.</p>
            </div>
            <div className="case-list">
              {cases.map((item) => {
                const Icon = item.icon;
                return (
                  <article className="case-card" key={item.index}>
                    <div className="case-index"><span>{item.index}</span><Icon size={22} aria-hidden="true" /></div>
                    <div className="case-body"><h3>{item.title}</h3><p className="case-summary">{item.summary}</p><dl><div><dt>Evidence</dt><dd>{item.evidence}</dd></div><div><dt>Decision</dt><dd>{item.decision}</dd></div><div><dt>Guardrail</dt><dd>{item.prevention}</dd></div></dl></div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section" id="evidence">
          <div className="container">
            <div className="section-heading">
              <div><p className="eyebrow">PRODUCT EVIDENCE</p><h2>Public examples of how the product handles uncertainty.</h2></div>
              <p>One view keeps unverified social evidence clearly labeled. Another shows no data rather than turning missing records into zero.</p>
            </div>
            <div className="screenshots">
              <figure className="screenshot screenshot-wide">
                <a href={asset("/screenshots/research-evidence.png")} target="_blank" rel="noreferrer" aria-label="Open the research evidence screenshot at full size"><img src={asset("/screenshots/research-evidence.png")} width="1280" height="800" loading="lazy" decoding="async" alt="Stock Ledger research evidence card showing an unverified Threads event, freshness warning, technical context, institutional flow, and candidate primary source" /></a>
                <figcaption><span>01 · Evidence card</span><p>Social evidence stays unverified; context is dated and candidate sources are not presented as corroboration.</p></figcaption>
              </figure>
              <figure className="screenshot">
                <a href={asset("/screenshots/honest-empty-state.png")} target="_blank" rel="noreferrer" aria-label="Open the honest empty state screenshot at full size"><img src={asset("/screenshots/honest-empty-state.png")} width="1280" height="720" loading="lazy" decoding="async" alt="Stock Ledger theme intelligence page showing a clear empty state instead of a zero-valued heatmap" /></a>
                <figcaption><span>02 · Honest empty state</span><p>No records means unavailable—not zero. The UI preserves the reason and next action.</p></figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section public-output">
          <div className="container output-grid">
            <div>
              <p className="eyebrow">PUBLIC OUTPUT</p>
              <h2>The research pipeline also produces public output.</h2>
              <p>The research-to-media pipeline has published 924 public videos and accumulated 263,079 channel views, exercising ingestion, generation, QA, rendering, and publishing outside a notebook.</p>
              <p className="source-line">YouTube Data API · channel statistics verified 31 Aug 2026. Public count may change after publication.</p>
            </div>
            <div className="output-card">
              <div className="youtube-mark"><Youtube size={28} aria-hidden="true" /></div>
              <div><span>JARVIS 選股</span><strong>See the pipeline’s public output</strong><small>Market evidence videos in Traditional Chinese</small></div>
              <ExternalButton href={links.youtube} variant="primary" label="Open the JARVIS stock research YouTube channel">Open channel<Play size={14} fill="currentColor" aria-hidden="true" /></ExternalButton>
            </div>
          </div>
        </section>

        <section className="section stack-section">
          <div className="container stack-grid">
            <div><p className="eyebrow">IMPLEMENTATION</p><h2>Built across the whole production path.</h2></div>
            <div className="stack-list">
              <div><span>Application</span><p>Python · FastAPI · Next.js · TypeScript · React</p></div>
              <div><span>Data &amp; identity</span><p>SQLite · PostgreSQL · Supabase · Row-Level Security</p></div>
              <div><span>AI &amp; automation</span><p>Claude · OpenAI · MCP · APScheduler · Remotion</p></div>
              <div><span>Operations</span><p>Docker Compose · Linux · Caddy · GitHub Actions · OpenTelemetry</p></div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container cta-card">
            <div><p className="eyebrow">EXPLORE</p><h2>Production source stays private; selected engineering decisions are public.</h2><p>See the production application, the public output, or the rest of my GitHub work.</p></div>
            <div className="cta-actions"><ExternalButton href={links.github}><Github size={16} aria-hidden="true" />GitHub profile</ExternalButton><ExternalButton href={links.youtube}><Youtube size={17} aria-hidden="true" />YouTube channel</ExternalButton><ExternalButton href={links.production} variant="primary">Production app</ExternalButton></div>
          </div>
        </section>
      </main>

      <footer><div className="container footer-inner"><div><b>Stock Ledger</b><span>Independent production project by Eason Lin</span></div><p>Engineering case study · Not investment advice</p></div></footer>
    </>
  );
}

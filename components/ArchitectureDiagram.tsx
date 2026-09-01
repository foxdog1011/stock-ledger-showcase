const nodes = [
  { x: 48, y: 118, w: 174, h: 72, eyebrow: "PUBLIC EDGE", title: "Browser", detail: "Authenticated visitor" },
  { x: 272, y: 118, w: 174, h: 72, eyebrow: "HTTPS", title: "Caddy", detail: "Only public web ingress" },
  { x: 496, y: 118, w: 190, h: 72, eyebrow: "APP :3001", title: "Next.js", detail: "Session + API proxy" },
  { x: 742, y: 118, w: 190, h: 72, eyebrow: "DOMAIN :8000", title: "FastAPI", detail: "Policy + orchestration" },
  { x: 988, y: 82, w: 176, h: 72, eyebrow: "SHARED", title: "SQLite", detail: "Market + research" },
  { x: 988, y: 178, w: 176, h: 72, eyebrow: "PRIVATE", title: "Supabase", detail: "JWT + RLS records" },
];

function Connector({ x1, y1, x2, y2, dashed = false }: { x1: number; y1: number; x2: number; y2: number; dashed?: boolean }) {
  return (
    <path
      d={`M ${x1} ${y1} C ${x1 + (x2 - x1) / 2} ${y1}, ${x1 + (x2 - x1) / 2} ${y2}, ${x2} ${y2}`}
      className={dashed ? "arch-line arch-line-dashed" : "arch-line"}
      markerEnd="url(#arrow)"
    />
  );
}

export function ArchitectureDiagram() {
  return (
    <div className="architecture-frame">
      <svg className="architecture-svg" viewBox="0 0 1212 520" role="img" aria-labelledby="architecture-title architecture-description">
        <title id="architecture-title">Stock Ledger production architecture</title>
        <desc id="architecture-description">
          Public traffic passes through Caddy and the authenticated Next.js proxy before FastAPI. Shared market data stays in SQLite, private records stay under Supabase row-level security, and internal automation and MCP surfaces use separate trust boundaries.
        </desc>
        <defs>
          <linearGradient id="panel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#171b22" />
            <stop offset="1" stopColor="#0e1117" />
          </linearGradient>
          <linearGradient id="privatePanel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#191a1d" />
            <stop offset="1" stopColor="#101116" />
          </linearGradient>
          <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L8,4 L0,8 z" fill="#8a6a25" />
          </marker>
        </defs>

        <text x="48" y="42" className="arch-kicker">REQUEST &amp; DATA PATH</text>
        <text x="48" y="68" className="arch-heading">One public door. Explicit trust boundaries.</text>
        <line x1="48" y1="91" x2="1164" y2="91" className="arch-rule" />

        <Connector x1={222} y1={154} x2={272} y2={154} />
        <Connector x1={446} y1={154} x2={496} y2={154} />
        <Connector x1={686} y1={154} x2={742} y2={154} />
        <Connector x1={932} y1={142} x2={988} y2={118} />
        <Connector x1={932} y1={166} x2={988} y2={214} />

        {nodes.map((node) => (
          <g key={node.title}>
            <rect x={node.x} y={node.y} width={node.w} height={node.h} rx="12" fill={node.title === "Supabase" ? "url(#privatePanel)" : "url(#panel)"} className="arch-node" />
            <rect x={node.x} y={node.y} width="3" height={node.h} rx="1.5" className={node.title === "Supabase" ? "arch-accent-private" : "arch-accent"} />
            <text x={node.x + 18} y={node.y + 22} className="arch-eyebrow">{node.eyebrow}</text>
            <text x={node.x + 18} y={node.y + 43} className="arch-title">{node.title}</text>
            <text x={node.x + 18} y={node.y + 61} className="arch-detail">{node.detail}</text>
          </g>
        ))}

        <rect x="48" y="298" width="1116" height="172" rx="16" className="arch-internal" />
        <text x="72" y="329" className="arch-eyebrow">TRUSTED INTERNAL PLANE · NOT INTERNET-FACING</text>

        <g>
          <rect x="72" y="351" width="244" height="88" rx="12" fill="url(#panel)" className="arch-node" />
          <text x="92" y="376" className="arch-eyebrow">SCHEDULED DATA JOBS</text>
          <text x="92" y="399" className="arch-title">APScheduler</text>
          <text x="92" y="420" className="arch-detail">Ingestion · health · decisions</text>
        </g>
        <g>
          <rect x="354" y="351" width="244" height="88" rx="12" fill="url(#panel)" className="arch-node" />
          <text x="374" y="376" className="arch-eyebrow">HOST CAPABILITIES</text>
          <text x="374" y="399" className="arch-title">Host services</text>
          <text x="374" y="420" className="arch-detail">:8003 API · :8010 render · :8011 bridge</text>
        </g>
        <g>
          <rect x="636" y="351" width="244" height="88" rx="12" fill="url(#panel)" className="arch-node" />
          <text x="656" y="376" className="arch-eyebrow">PARTITIONED AI ACCESS</text>
          <text x="656" y="399" className="arch-title">MCP profiles</text>
          <text x="656" y="420" className="arch-detail">Trusted · slim ops · research-only</text>
        </g>
        <g>
          <rect x="918" y="351" width="222" height="88" rx="12" fill="url(#panel)" className="arch-node" />
          <text x="938" y="376" className="arch-eyebrow">PUBLIC OUTPUT</text>
          <text x="938" y="399" className="arch-title">YouTube</text>
          <text x="938" y="420" className="arch-detail">Reviewed, policy-gated media</text>
        </g>

        <Connector x1={194} y1={351} x2={820} y2={190} dashed />
        <Connector x1={476} y1={351} x2={840} y2={190} dashed />
        <Connector x1={758} y1={351} x2={866} y2={190} dashed />
        <Connector x1={932} y1={190} x2={1029} y2={351} dashed />
      </svg>

      <div className="architecture-mobile" aria-label="Stock Ledger production architecture, mobile summary">
        <div className="mobile-path"><span>Public request</span><b>Browser</b><i aria-hidden="true">↓</i><b>Caddy HTTPS</b><i aria-hidden="true">↓</i><b>Next.js auth proxy</b><i aria-hidden="true">↓</i><b>FastAPI domain layer</b></div>
        <div className="mobile-split">
          <div><span>Shared</span><b>Market &amp; research SQLite</b><small>Canonical, dated sources</small></div>
          <div><span>Private</span><b>Supabase JWT + RLS</b><small>Trades, cash, decisions</small></div>
        </div>
        <div className="mobile-internal"><span>Trusted internal plane</span><p>Schedulers · host bridge · partitioned MCP · YouTube publishing</p></div>
      </div>
    </div>
  );
}

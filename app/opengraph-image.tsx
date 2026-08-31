import { ImageResponse } from "next/og";

export const alt = "Stock Ledger — Production Engineering Case Study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "70px 78px", color: "#f2f3f5", background: "#07090d", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <div style={{ width: 56, height: 56, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(240,165,20,.45)", borderRadius: 12, color: "#f0a514", fontSize: 30 }}>↗</div>
        <div style={{ display: "flex", flexDirection: "column" }}><span style={{ fontSize: 24, fontWeight: 700 }}>Stock Ledger</span><span style={{ marginTop: 4, color: "#7d8694", fontSize: 13, letterSpacing: 4 }}>PRODUCTION CASE STUDY</span></div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 990 }}>
        <span style={{ color: "#f0a514", fontSize: 15, fontWeight: 700, letterSpacing: 4 }}>TAIWAN-EQUITY DECISION INTELLIGENCE</span>
        <div style={{ display: "flex", marginTop: 18, fontSize: 62, fontWeight: 750, lineHeight: 1.05, letterSpacing: -2.5 }}>A private decision workspace. A public engineering story.</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #252b35", paddingTop: 24, color: "#9ba3af", fontSize: 18 }}><span>Architecture · Incidents · Data trust · Automation</span><span style={{ color: "#f0a514" }}>Eason Lin</span></div>
    </div>,
    size,
  );
}

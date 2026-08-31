import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const page = readFileSync(new URL("../app/page.tsx", import.meta.url), "utf8");
const architecture = readFileSync(new URL("../components/ArchitectureDiagram.tsx", import.meta.url), "utf8");

test("retired and unsafe links cannot return", () => {
  assert.doesNotMatch(page, /stock-ledger-web\.vercel\.app/i);
  assert.doesNotMatch(page, /trycloudflare/i);
  assert.match(page, /https:\/\/covenest\.systems/);
});

test("public proof links and access expectations are explicit", () => {
  assert.match(page, /youtube\.com\/channel\/UC-TJSNbjSGP4c447hPjYLow/);
  assert.match(page, /login required/);
  assert.match(page, /never loads portfolio data/);
});

test("dated metrics match the verified 2026-08-31 snapshot", () => {
  for (const value of ["551", "924", "263,079", "238"]) assert.match(page, new RegExp(value.replace(",", ",")));
  assert.match(page, /31 AUG 2026/);
  assert.doesNotMatch(page, /937|257,617|274\.8|Subscribers attributed/);
});

test("architecture names the production trust boundaries", () => {
  for (const boundary of ["Caddy", "Next.js", "FastAPI", "SQLite", "Supabase", "MCP profiles"]) assert.match(architecture, new RegExp(boundary.replace(".", "\\.")));
  assert.match(architecture, /JWT \+ RLS/);
  assert.match(architecture, /role="img"/);
});

test("only reviewed public-safe screenshots are shipped", () => {
  assert.ok(existsSync(new URL("../public/screenshots/research-evidence.png", import.meta.url)));
  assert.ok(existsSync(new URL("../public/screenshots/honest-empty-state.png", import.meta.url)));
});


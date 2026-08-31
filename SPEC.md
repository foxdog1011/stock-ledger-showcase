# Feature: recruiter understands production ownership in 90 seconds

## Problem

Stock Ledger is a private, authenticated production system. A recruiter cannot
inspect it without an account, while a long Markdown inventory makes scale
visible but hides the engineering decisions that make the project credible.

## Hypothesis

If the public showcase leads with three evidence-backed engineering cases,
an accurate trust-boundary diagram, and a small set of dated proof metrics,
then a reviewer can distinguish the project from a prototype without receiving
credentials or access to private portfolio data.

## Vertical slice

One public static page: recruiter opens the resume link, understands the system,
reads the Docker exposure case, and can continue to the public YouTube output or
the authenticated production application.

## Acceptance

- [x] Public page requires no account and never fetches private data
- [x] Every scale claim has a source label and verification date
- [x] Architecture separates shared SQLite, Supabase RLS, automation, and MCP
- [x] Production link is labelled as login-required
- [x] Mobile and desktop layouts preserve the same evidence path
- [x] Keyboard focus, landmarks, alt text, and reduced motion are covered
- [x] Screenshots contain no personal holdings, trades, cash, or notes

## UI contract

- Page's single decision job: Is this candidate able to own a production system?
- Primary action: Read the engineering case studies.
- Existing components/tokens reused: Stock Ledger dark-and-gold tokens, panel
  grammar, restrained amber actions, tabular evidence metrics.
- Screenshots required: 1280×800 and 390×844, plus both public-safe product images.
- Intentional visual differences: editorial case-study layout instead of the
  authenticated trading-workspace navigation.

## Metric

Primary: case-study section reached from the resume link. Guardrail: no private
data or unsupported claim enters the public build. No analytics is added in this
slice; access logs may be used later without attaching identity or portfolio data.

## Risk

Yellow. Public claims, production topology, and screenshots require review.
No financial calculation, recommendation, RLS mutation, or private API access.

## Non-goals

- Public demo credentials
- Live portfolio data or live production health
- Reproducing every product page
- Publishing the private source repository or operational secrets

## Verification

- `npm run test:ui-quality`
- `npm run type-check`
- `npm run build`
- `npm run test:e2e:ui`
- Review desktop/mobile screenshots and both full-size product images
- Re-check external links and all dated metrics before publication


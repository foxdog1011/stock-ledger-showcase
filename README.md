# Stock Ledger — Production Engineering Case Study

Public, sanitized case study for the private Stock Ledger production system.
It explains the architecture, trust boundaries, incident response, financial
data correctness, and autonomous publishing pipeline without exposing personal
portfolio data or production credentials.

## Links

- [Published showcase](https://foxdog1011.github.io/stock-ledger-showcase/)
- [Authenticated production application](https://covenest.systems)
- [JARVIS 選股 on YouTube](https://www.youtube.com/channel/UC-TJSNbjSGP4c447hPjYLow)
- [Eason Lin on GitHub](https://github.com/foxdog1011)

## Local verification

```bash
npm ci
npm run test:ui-quality
npm run type-check
npm run build
npm run test:e2e:ui
```

The production source remains private. Public screenshots are reviewed to
exclude holdings, trades, cash, notes, credentials, and user identity.


# Stock Ledger — Engineering Case Study

Stock Ledger is a private Taiwan-equity research and portfolio monitoring system. This public repository documents selected engineering decisions without exposing portfolio data, credentials, or production source.

## Links

- [Published case study](https://foxdog1011.github.io/stock-ledger-showcase/)
- [Production application](https://covenest.systems) *(login required)*
- [Public YouTube output](https://www.youtube.com/channel/UC-TJSNbjSGP4c447hPjYLow)
- [GitHub profile](https://github.com/foxdog1011)

## What the case study covers

- validating an investment signal against realized outcomes
- keeping historical portfolio analysis point-in-time correct
- separating public, private, and operational data boundaries
- constraining AI tools so they can assist workflows without executing orders
- selected production incidents and the safeguards added afterward

## Local verification

```bash
npm ci
npm run test:ui-quality
npm run type-check
npm run build
npm run test:e2e:ui
```

Public screenshots and metrics are reviewed before publication and contain no personal holdings, trades, cash balances, credentials, or user identity.

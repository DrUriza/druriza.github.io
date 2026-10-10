# Fase 1: normalizacion bilingue de assets existentes

34 archivos movidos; hashes SHA-256 antes/despues identicos.
16 paginas con referencias actualizadas. Sin cambios visuales, traducciones, commit ni push.

## Validacion

- 20 paginas EN/ES; 586 referencias locales comprobadas.
- 0 enlaces locales rotos, 0 assets faltantes, 0 rutas obsoletas.
- 42 referencias data-full verificadas; picture/source, src, favicon, CSS y JS revisados.
- 33 archivos PNG/WebP movidos decodificados/verificados; SVG conservado byte a byte.
- git diff --check: correcto. git diff --stat y git status --short ejecutados.
- Interaccion real del lightbox y ejecucion de JS en navegador: no verificados en esta fase; entorno de navegador/Node no disponible.

## TEMPORARY_LANGUAGE_FALLBACK

### EN page -> ES visual

| Asset existente | Paginas consumidoras | Estado |
| --- | --- | --- |
| `assets/images/architecture/es/tradelatin-vr1-vr5-evolution.png` | `architecture.html`, `index.html` | TEMPORARY_LANGUAGE_FALLBACK |
| `assets/images/architecture/es/tradelatin-vr1-vr5-evolution.webp` | `architecture.html`, `index.html` | TEMPORARY_LANGUAGE_FALLBACK |
| `vr1/es/c1-prices-screen-a.png` | `vr1-hmi.html`, `vr1.html` | TEMPORARY_LANGUAGE_FALLBACK |
| `vr1/es/c1-prices-screen-b-01.png` | `vr1-hmi.html` | TEMPORARY_LANGUAGE_FALLBACK |
| `vr1/es/c2-cvd-order-flow-screen-a.png` | `vr1-hmi.html`, `vr1.html` | TEMPORARY_LANGUAGE_FALLBACK |
| `vr1/es/c2-cvd-order-flow-screen-b-01.png` | `vr1-hmi.html` | TEMPORARY_LANGUAGE_FALLBACK |
| `vr1/es/contextual-intelligence-grok-radar.png` | `vr1-hmi.html` | TEMPORARY_LANGUAGE_FALLBACK |
| `vr1/es/vr1-observe-poster.png` | `index.html`, `vr1.html` | TEMPORARY_LANGUAGE_FALLBACK |
| `vr1/es/vr1-observe-poster.webp` | `index.html`, `vr1.html` | TEMPORARY_LANGUAGE_FALLBACK |
| `vr2/es/vr2-structure-poster.png` | `index.html`, `vr2.html` | TEMPORARY_LANGUAGE_FALLBACK |
| `vr2/es/vr2-structure-poster.webp` | `index.html`, `vr2.html` | TEMPORARY_LANGUAGE_FALLBACK |
| `vr3/es/vr3-predict-poster.png` | `index.html`, `vr3.html` | TEMPORARY_LANGUAGE_FALLBACK |
| `vr3/es/vr3-predict-poster.webp` | `index.html`, `vr3.html` | TEMPORARY_LANGUAGE_FALLBACK |
| `vr4/es/vr4-decide-execute-poster.png` | `index.html`, `vr4.html` | TEMPORARY_LANGUAGE_FALLBACK |
| `vr4/es/vr4-decide-execute-poster.webp` | `index.html`, `vr4.html` | TEMPORARY_LANGUAGE_FALLBACK |
| `vr5/es/vr5-intelligence-orchestration-poster.png` | `index.html`, `vr5.html` | TEMPORARY_LANGUAGE_FALLBACK |
| `vr5/es/vr5-intelligence-orchestration-poster.webp` | `index.html`, `vr5.html` | TEMPORARY_LANGUAGE_FALLBACK |

### ES page -> EN visual

| Asset existente | Paginas consumidoras | Estado |
| --- | --- | --- |
| `vr1/en/c3-open-interest-funding-screen-a.png` | `es/vr1-hmi.html`, `es/vr1.html` | TEMPORARY_LANGUAGE_FALLBACK |
| `vr1/en/c3-open-interest-funding-screen-b.png` | `es/vr1-hmi.html` | TEMPORARY_LANGUAGE_FALLBACK |
| `vr1/en/c4-etf-exchange-flows-screen-a.png` | `es/vr1-hmi.html`, `es/vr1.html` | TEMPORARY_LANGUAGE_FALLBACK |
| `vr1/en/c5-on-chain-miners-screen-a.png` | `es/vr1-hmi.html`, `es/vr1.html` | TEMPORARY_LANGUAGE_FALLBACK |
| `vr1/en/c6-volatility-market-regimes-screen-a.png` | `es/vr1-hmi.html`, `es/vr1.html` | TEMPORARY_LANGUAGE_FALLBACK |
| `vr1/en/c8-liquidity-microstructure-screen-a.png` | `es/vr1-hmi.html`, `es/vr1.html` | TEMPORARY_LANGUAGE_FALLBACK |
| `vr2/en/vr2-experimental-representation-ladder-d0-d3.png` | `es/vr2.html` | TEMPORARY_LANGUAGE_FALLBACK |
| `vr2/en/vr2-scientific-architecture-evidence-knowledge.png` | `es/vr2.html` | TEMPORARY_LANGUAGE_FALLBACK |

19 piezas conceptuales pendientes: 11 EN y 8 ES. PNG/WebP cuentan como una pieza.

## Arbol final

```text
vr1/
  en/
    c3-open-interest-funding-screen-a.png
    c3-open-interest-funding-screen-b.png
    c4-etf-exchange-flows-screen-a.png
    c5-on-chain-miners-screen-a.png
    c6-volatility-market-regimes-screen-a.png
    c8-liquidity-microstructure-screen-a.png
  es/
    c1-prices-screen-a.png
    c1-prices-screen-b-01.png
    c2-cvd-order-flow-screen-a.png
    c2-cvd-order-flow-screen-b-01.png
    contextual-intelligence-grok-radar.png
    vr1-observe-poster.png
    vr1-observe-poster.webp
  shared/
    blockchain-preview.svg
    c1-prices-screen-b-02.png
    c2-cvd-order-flow-screen-b-02.png
    c4-etf-exchange-flows-screen-b.png
    c5-on-chain-miners-screen-b.png
    c6-volatility-market-regimes-screen-b.png
    c7-liquidations-positioning-screen-a.png
    c7-liquidations-positioning-screen-b.png
    c8-liquidity-microstructure-screen-b.png
vr2/
  en/
    vr2-experimental-representation-ladder-d0-d3.png
    vr2-scientific-architecture-evidence-knowledge.png
  es/
    vr2-structure-poster.png
    vr2-structure-poster.webp
  shared/ (vacio)
vr3/
  en/ (vacio)
  es/
    vr3-predict-poster.png
    vr3-predict-poster.webp
  shared/ (vacio)
vr4/
  en/ (vacio)
  es/
    vr4-decide-execute-poster.png
    vr4-decide-execute-poster.webp
  shared/ (vacio)
vr5/
  en/ (vacio)
  es/
    vr5-intelligence-orchestration-poster.png
    vr5-intelligence-orchestration-poster.webp
  shared/ (vacio)
assets/images/architecture/
  en/ (vacio)
  es/
    tradelatin-vr1-vr5-evolution.png
    tradelatin-vr1-vr5-evolution.webp
```

Carpetas vacias creadas sin .gitkeep; Git no registra directorios vacios.
Los assets shared existen una sola vez y se consumen desde ambos idiomas.
Logo y favicon permanecen en assets/logo/.

# Cierre de paridad bilingüe HMI — VR1

**BILINGUAL HMI VISUAL PARITY = PASS**

11/11 imágenes nuevas provienen de capturas directas de Chrome sobre Screen real, con viewport igual a la resolución de su contraparte, escala de dispositivo 1 y zoom 100 %. Se incorporaron los PNG del navegador sin edición ni resize. Las 52 imágenes/visuales existentes conservaron su SHA-256, incluidos originales HMI, shared, posters y Architecture Evolution.

La paridad cerrada es de idioma y evidencia auténtica. Los datos históricos, la selección inicial de algunos controles y la densidad de las tarjetas no son idénticos a las imágenes antiguas. Las diferencias se enumeran abajo. Cada nueva vista se ejecutó también en el otro idioma sobre el mismo fixture: las series de gráficos coinciden por SHA-256 entre EN y ES.

**Origen y runtime**

Diez vistas C1–C8 se capturaron mediante el runtime de replay de Screen exportado desde la revisión real `a806c8302c5fdca52942e638a806e55ba039b5db`, dentro de `.tmp/hmi-reference-replay`. Conserva la implementación original de app/screens y usa los ocho fixtures `_VR1_FINAL.json` que ya existían en el estado actual de Screen, copiados sin cambiar bytes. Se incorporó el módulo i18n real actualizado de Screen y callbacks de idioma para la etiqueta y el estado de fuente. No se modificaron contratos, observables, identificadores ni cálculos. La revisión archivada tenía una divergencia CVD vacía; se reutilizó el fixture actual existente y sus 44 pruebas pasan.

Las diez vistas C1–C8 muestran el modo SYNTHETIC de los fixtures preexistentes. No se generaron datos nuevos para las capturas.

Se eligió ese replay porque el presentador canónico del working tree actual mostraba series enteras como texto en algunos resúmenes. No se hicieron cambios de estilos para imitar capturas históricas. La disposición compacta del replay explica diferencias de tamaño de tarjetas, controles laterales y contenido visible en el viewport.

Grok se capturó desde el working tree actual de `TradElatin-VR1-Screens/app.py`, en estado `NO_AUTHORIZED_UPSTREAM`, sin adquisición externa. Su botón permanece deshabilitado.

Runtime replay: `http://127.0.0.1:18768/`. Grok actual: `http://127.0.0.1:18766/grok-radar?lang=en`. Los runtimes se detuvieron después de validar. Orígenes, hashes de fixtures, cuerpos EN/ES, trazas y URLs están en [capture-manifest.json](hmi-final-validation/capture-manifest.json) y [fixture-origins.json](hmi-final-validation/fixture-origins.json).

**Matriz de las once capturas**

| Par original ↔ nueva | Idioma | Resolución | PNG nuevo | Fixture / estado |
|---|---|---|---|---|
| C1 A ES ↔ EN | EN comprobado | 1887×909 | [vr1/en/c1-prices-screen-a.png](../vr1/en/c1-prices-screen-a.png) | `prices_VR1_FINAL.json` |
| C1 B ES ↔ EN | EN comprobado | 1887×909 | [vr1/en/c1-prices-screen-b-01.png](../vr1/en/c1-prices-screen-b-01.png) | `prices_VR1_FINAL.json` |
| C2 A ES ↔ EN | EN comprobado | 1876×908 | [vr1/en/c2-cvd-order-flow-screen-a.png](../vr1/en/c2-cvd-order-flow-screen-a.png) | `cvd_volume_orderflow_VR1_FINAL.json` |
| C2 B ES ↔ EN | EN comprobado | 1877×908 | [vr1/en/c2-cvd-order-flow-screen-b-01.png](../vr1/en/c2-cvd-order-flow-screen-b-01.png) | `cvd_volume_orderflow_VR1_FINAL.json` |
| C3 A EN ↔ ES | ES comprobado | 1881×911 | [vr1/es/c3-open-interest-funding-screen-a.png](../vr1/es/c3-open-interest-funding-screen-a.png) | `open_interest_and_funding_VR1_FINAL.json` |
| C3 B EN ↔ ES | ES comprobado | 1881×911 | [vr1/es/c3-open-interest-funding-screen-b.png](../vr1/es/c3-open-interest-funding-screen-b.png) | `open_interest_and_funding_VR1_FINAL.json` |
| C4 A EN ↔ ES | ES comprobado | 1879×902 | [vr1/es/c4-etf-exchange-flows-screen-a.png](../vr1/es/c4-etf-exchange-flows-screen-a.png) | `etf_exchange_flows_VR1_FINAL.json` |
| C5 A EN ↔ ES | ES comprobado | 1880×908 | [vr1/es/c5-on-chain-miners-screen-a.png](../vr1/es/c5-on-chain-miners-screen-a.png) | `on_chain_miners_VR1_FINAL.json` |
| C6 A EN ↔ ES | ES comprobado | 1880×908 | [vr1/es/c6-volatility-market-regimes-screen-a.png](../vr1/es/c6-volatility-market-regimes-screen-a.png) | `volatility_market_regimes_VR1_FINAL.json` |
| C8 A EN ↔ ES | ES comprobado | 1878×906 | [vr1/es/c8-liquidity-microstructure-screen-a.png](../vr1/es/c8-liquidity-microstructure-screen-a.png) | `liquidity_microstructure_VR1_FINAL.json` |
| Grok A ES ↔ EN | EN comprobado | 1898×906 | [vr1/en/contextual-intelligence-grok-radar.png](../vr1/en/contextual-intelligence-grok-radar.png) | `NO_AUTHORIZED_UPSTREAM; sin contrato` |

**Comparación visual y diferencias de estado/datos**

- **C1:** Fixture actual distinto del histórico de agosto; 15m en lugar de 1h. OHLCV, EMA/SMA/WMA, Bollinger, niveles y análisis nativos conservados. La vista B usa la densidad compacta y selección inicial del runtime de replay.
- **C2:** Fixture actual distinto del histórico; 15m en lugar de 1h. CVD spot/futuros, flujo y análisis nativos conservados. B muestra las familias spot y futuros en la rejilla nativa compacta; cambian magnitudes, señales y disponibilidad de resúmenes.
- **C3:** Fixture actual distinto del histórico de agosto; 15m en lugar de 1h. OI/funding y los seis paneles analíticos mantienen su semántica. Cambian proveedores disponibles, valores, régimen, overlays por defecto y densidad de tarjetas.
- **C4:** Se mantiene la ventana 30d y la estructura de flujo ETF/proveedores y flujo/reserva de exchanges. Fixture y valores distintos. La captura empieza en scroll 0 y usa la disposición compacta del replay.
- **C5:** Se mantiene 30d y la estructura reserva minera, SOPR/ASOPR, hashrate, dificultad y cambio de posición. Fixture, valores y régimen distintos; la captura incluye el flujo inferior por la densidad del runtime.
- **C6:** Se mantiene 30d y los cuatro paneles RV, IV, VRP y estructura temporal IV. Fixture distinto: régimen NORMAL, no el HIGH de la original. Disposición 2×2 compacta del runtime.
- **C8:** Se mantiene BTC/perpetual y la estructura libro de órdenes, órdenes ballena y liquidez ejecutada con tablas. Fixture/snapshot, valores y cantidad de filas distintos. No se recalculó la liquidez para imitar la imagen antigua.
- **Grok:** La original ofrecía actualizar briefing. El runtime actual no tiene upstream autorizado: botón deshabilitado y mensaje UNAVAILABLE. Estado soportado y reproducible; no se contactó xAI ni se inventó una respuesta.

Se revisaron controles, títulos, descripciones, estados y textos de las capturas. Se preservó nomenclatura técnica como Open Interest, Funding, CVD, ETF, OHLCV, On-Chain, ATR, CCI, MFI, Wasserstein, BID/ASK, SPOT/PERPETUAL, identificadores de proveedor y unidades. Los tooltips no se dejaron abiertos durante las capturas. La validación automática detecta textos narrativos/control del idioma contrario y consta en el manifiesto.

**HTML y rutas**

Se modificaron únicamente las referencias de las once imágenes en `vr1-hmi.html`, `vr1.html`, `es/vr1-hmi.html` y `es/vr1.html`, tanto `src` como `data-full` cuando corresponde. Se conservaron `alt` y `data-alt` localizados y los parámetros `?v=2` existentes. No se cambiaron imágenes shared ni la navegación GitHub al perfil principal.

- EN HMI: evidencia únicamente desde `vr1/en/` y `vr1/shared/`.
- ES HMI: evidencia únicamente desde `../vr1/es/` y `../vr1/shared/`.
- Referencias EN → ES restantes: **0**.
- Referencias ES → EN restantes: **0**.
- `TEMPORARY_LANGUAGE_FALLBACK`: **0**.

**Pruebas y web**

- Screen actual: **81 passed, 1 skipped**; la omitida requiere una salida externa de Processing 0.5.4 no suministrada. Las comprobaciones físicas Crypto/Equities locales sí pasaron. [Resultado XML](hmi-final-validation/current-screen-tests.xml).
- Runtime de replay: **44 passed**, incluidas regresiones de vistas, gráficos, controles y selección. [Resultado XML](hmi-final-validation/replay-tests.xml).
- Localización: **16 pares Crypto + 16 pares Equities** en EN/ES, vistas main/analysis, conservan identificadores y datos de gráficos. Sin fuga de contexto de idioma. Comprobaciones adicionales de Grok, metadatos de tablas y etiquetas de ejes mantienen filas, valores y posiciones.
- Web: **20 páginas**, **586 referencias locales** incluyendo `srcset`, **0 enlaces rotos**, **0 assets faltantes**, **0 rutas antiguas**, **0 originales modificados**. [Auditoría estática](hmi-final-validation/static-qa.json).
- Navegador: **60 visitas**, anchos 1440/768/390, sin errores JS ni overflow. Las 11 capturas se verificaron en lightbox mediante **66 comprobaciones**: thumbnail, imagen full y dimensiones, `src/data-full`, `alt/data-alt`, Escape y X. [QA de navegador](hmi-final-validation/browser-qa.json).

**Git**

`git diff --check`: **PASS**, salida 0. No se hizo commit, staging ni push. Los cambios previos de la web y Screen se conservaron. El diff completo incluye trabajo de fases anteriores; los PNG nuevos son untracked y por ello no aparecen como adiciones en `git diff --stat`.

`git diff --check`

```text
(sin salida; exit 0)
```

`git diff --stat`

```text
 docs/phase1-bilingual-assets-audit.md  |  2 ++
 docs/phase2-bilingual-visual-parity.md |  2 ++
 docs/screen-i18n-followup.md           |  2 ++
 es/vr1-hmi.html                        | 12 ++++++------
 es/vr1.html                            | 10 +++++-----
 vr1-hmi.html                           | 10 +++++-----
 vr1.html                               |  4 ++--
 7 files changed, 24 insertions(+), 18 deletions(-)
```

`git status --short`

```text
 M docs/phase1-bilingual-assets-audit.md
 M docs/phase2-bilingual-visual-parity.md
 M docs/screen-i18n-followup.md
 M es/vr1-hmi.html
 M es/vr1.html
 M vr1-hmi.html
 M vr1.html
?? docs/hmi-bilingual-final-closure.md
?? docs/hmi-final-validation/
?? vr1/en/c1-prices-screen-a.png
?? vr1/en/c1-prices-screen-b-01.png
?? vr1/en/c2-cvd-order-flow-screen-a.png
?? vr1/en/c2-cvd-order-flow-screen-b-01.png
?? vr1/en/contextual-intelligence-grok-radar.png
?? vr1/es/c3-open-interest-funding-screen-a.png
?? vr1/es/c3-open-interest-funding-screen-b.png
?? vr1/es/c4-etf-exchange-flows-screen-a.png
?? vr1/es/c5-on-chain-miners-screen-a.png
?? vr1/es/c6-volatility-market-regimes-screen-a.png
?? vr1/es/c8-liquidity-microstructure-screen-a.png
```

Las advertencias de normalización LF/CRLF, si aparecen en stderr, están conservadas en [git-results.json](hmi-final-validation/git-results.json). No representan errores de whitespace.

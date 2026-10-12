> Estado hist?rico: el cierre HMI y sus validaciones actuales est?n en [hmi-bilingual-final-closure.md](hmi-bilingual-final-closure.md). Las referencias cruzadas y los fallbacks de idioma descritos en esta auditor?a ya se resolvieron.

# Seguimiento de localización de Screen

Se corrigió la ruta de presentación de contratos canónicos de Crypto y Equities en `TradElatin-VR1-Screens/app.py`: ahora renderiza dentro del contexto del idioma solicitado y localiza el árbol de componentes. Antes ambas funciones descartaban `locale`. La localización existente mantiene intactos los identificadores de componentes y los datos numéricos de los gráficos.

Se añadieron traducciones de estados vacíos, mensajes de Grok Radar y etiquetas visibles del presentador canónico en `screen_core/i18n.py`. Grok conserva su estado de upstream no configurado y su botón deshabilitado.

Validación inicial: 16 combinaciones de las ocho familias Crypto y sus vistas main/analysis, con igualdad de datos de las trazas e identificadores entre EN/ES y sin fuga del contexto de idioma. Verificación real en Chrome de ocho rutas en ambos idiomas; mostró que la conexión i18n funciona y permitió identificar etiquetas adicionales.

Las contrapartes HMI de fase 2B siguen pendientes: la ejecución actual utiliza contratos congelados cuya ventana temporal difiere de las capturas originales. Las capturas de verificación no se incorporaron como contrapartes visuales de esas imágenes. Antes de publicarlas hay que reproducir el estado original o establecer un nuevo par auténtico de capturas del mismo estado, preservando la evidencia previa.

La modificación de Screen se realizó fuera del repositorio web mediante autorización del entorno. Se preservaron sus cambios previos; no se hizo commit ni push. Las copias de revisión, las pruebas y los respaldos se encuentran en `.tmp` del workspace web, fuera de su repositorio Git.

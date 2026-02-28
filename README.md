# SI Soluciones Industriales — Web Corporativa

Página web corporativa y portafolio de **SI Soluciones Industriales**, empresa de ingeniería industrial con sede en Presidente Derqui, Buenos Aires, Argentina. Diseñada para proyectar una imagen profesional de alto impacto, con estética premium acorde a los estándares de la industria.

🔗 **Sitio en producción:** Desplegado en Netlify con dominio personalizado.

---

## 🚀 Stack Tecnológico

| Tecnología | Versión | Rol |
|---|---|---|
| **React** | 19 | Framework UI — componentes, hooks, estado |
| **Vite** | 7 | Build tool — dev server ultrarrápido, bundle optimizado |
| **Tailwind CSS** | v4 | Utility-first CSS — diseño responsivo completo |
| **Netlify** | — | Hosting + formulario de contacto (Netlify Forms) |
| **Google Fonts** | — | Oswald (títulos) + Barlow (cuerpo) |

> **Tailwind v4**: Configuración vía `@theme {}` en `src/index.css`. No usa `tailwind.config.js`. Los colores, fuentes y animaciones personalizadas se definen como variables CSS dentro de `@theme`.

---

## 🎨 Sistema de Diseño

### Paleta de Colores (brandcolors del logo)
| Token | Valor | Uso |
|---|---|---|
| `si-red` | `#C00000` | Acento principal, CTAs, hover states |
| `si-bg` | `#f7f7f7` | Fondo de secciones claras |
| `si-text` | `#333333` | Texto general |

### Tipografía
- **Oswald** — Títulos (`font-black`, uppercase, tracking-tight)
- **Barlow** — Cuerpo (`font-light` / `font-normal`, `leading-relaxed`)
- Escala base: body desde `text-base` (16px), descripciones `text-xl`, títulos de sección `text-5xl–7xl`

### Animaciones personalizadas (definidas en `src/index.css`)
| Animación | Uso |
|---|---|
| `scroll-line` | Indicador de scroll animado en el Hero |
| `pulse-ring` | Anillos concéntricos del botón WhatsApp flotante |
| `shimmer` | Gradiente animado sobre el headline del Hero |
| `fade-in` / `scale-up` | Apertura del lightbox de la galería |
| `fade-in-up` | Entrada de elementos con RevealOnScroll |
| `scale-x-left` | Barra de escala lateral izquierda |
| `skeleton-pulse` | Placeholder pulsante mientras cargan imágenes en la galería |
| `swipe-hint` / `swipe-hint-reverse` | Indicador de deslizamiento en lightbox mobile |

### Estilos globales
- **Smooth scroll** en todo el sitio
- **Scrollbar personalizado** — thumb rojo con track oscuro
- **Selection** — fondo rojo con texto claro

---

## 📁 Estructura del Proyecto

```text
si-web/
├── public/
│   ├── FOTOS/                    # Fotos de proyectos (galería)
│   │   ├── aislacion/            #   └── Fotos de aislación térmica
│   │   ├── caldera/              #   └── Fotos de calderas
│   │   ├── conexioninox/         #   └── Fotos de conexiones inoxidables
│   │   ├── inox/                 #   └── Fotos de acero inoxidable
│   │   └── *.webp                #   └── Fotos sueltas (naves, electricidad, red incendio, tubos)
│   ├── logosi.webp               # Isotipo (marca de agua, footer)
│   ├── logosi.png                # Isotipo PNG (favicon)
│   ├── si_soluciones.webp        # Logo principal (navbar)
│   ├── titu.webp                 # Imagen de fondo del Hero
│   └── piecarpeta.webp           # Imagen de fondo del Footer
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Barra de navegación fija
│   │   ├── HeroSection.jsx       # Sección hero con animaciones
│   │   ├── AboutSection.jsx      # Nosotros + stats animadas
│   │   ├── ServicesSection.jsx   # 6 tarjetas de servicios
│   │   ├── ProcessSection.jsx    # 5 pasos del proceso de trabajo
│   │   ├── ProjectsGallery.jsx   # Galería filtrable + lightbox
│   │   ├── ContactFooter.jsx     # Formulario + contacto + footer
│   │   ├── FloatingWhatsApp.jsx  # Botón WhatsApp flotante
│   │   ├── ScrollControls.jsx    # Botones scroll arriba/abajo
│   │   └── RevealOnScroll.jsx    # Wrapper de animación al scroll
│   ├── App.jsx                   # Composición principal de secciones
│   ├── main.jsx                  # Entry point (React StrictMode)
│   └── index.css                 # Tema Tailwind v4 + animaciones globales
├── index.html                    # HTML base con SEO + form oculto Netlify
├── vite.config.js                # Config Vite (React + Tailwind plugins)
└── package.json
```

---

## 🏗️ Componentes (10)

El flujo de secciones en `App.jsx` es:
**Navbar → Hero → About → Services → Process → Projects → Contact/Footer**
+ componentes flotantes: **FloatingWhatsApp** y **ScrollControls**

---

### `Navbar.jsx`
Barra de navegación fija con comportamiento dinámico según scroll.

- **Fondo dinámico**: transparente → `bg-white/95 backdrop-blur-md` al pasar 50px de scroll
- **Logo adaptativo**: `h-16` en posición inicial (hero), se reduce a `h-9` al hacer scroll
- **Barra de progreso de lectura**: línea roja de 3px en el top que crece con el scroll del documento
- **Detección de sección activa**: `IntersectionObserver` monitorea 5 secciones (`nosotros`, `servicios`, `proceso`, `casos-exito`, `contacto`) y subraya el link correspondiente con borde rojo animado
- **Menú hamburguesa mobile**: 3 barras con transform CSS (X animada), menú desplegable con stagger
- **CTA "Cotizar"**: botón rojo con efecto shadow-press que abre WhatsApp
- **Links de contacto en mobile**: teléfono y email visibles en el menú hamburguesa

---

### `HeroSection.jsx`
Sección de impacto inicial a viewport completo con animaciones de entrada.

- **Imagen de fondo** (`titu.webp`) con 3 capas de overlay: gradiente oscuro + tinte rojo + grid industrial semitransparente
- **Animaciones de entrada escalonadas** (stagger 400ms–920ms) vía `opacity` + `translateY` inline controladas con `useEffect`
- **Badge de certificación OPDS** con punto pulsante verde
- **Headline con efecto shimmer**: gradiente rojo animado sobre "de Precisión"
- **Subtítulo** `text-xl sm:text-2xl` con borde izquierdo rojo
- **Dual CTAs**: "Iniciar Proyecto" (rojo, link a WhatsApp) + "Ver Proyectos" (outlined, scroll a galería)
- **Strip de estadísticas** inferior: `15+ años` / `200+ proyectos` / `100% certificados` / `0% margen de error`
- **Indicador "Descubrir"** centrado con línea animada (`scroll-line`)

---

### `AboutSection.jsx`
Presentación corporativa con valores y estadísticas animadas.

- **Layout 2 columnas** (mobile: stack vertical)
- **Columna izquierda**: título + 3 tarjetas de valores con iconos SVG:
  - Seguridad Certificada
  - Ingeniería de Precisión
  - Servicio Integral
- **Columna derecha**: grilla 2×2 de estadísticas con **conteo animado**
  - Componente interno `AnimatedStat` usa `requestAnimationFrame` + ease-out cúbico
  - Se activa con `IntersectionObserver` al entrar en viewport
  - Duración: 1800ms
  - Stats: `15+ años`, `200+ proyectos`, `100%`, `0 errores`
  - Números grandes `text-6xl sm:text-7xl` en rojo, etiquetas `text-base font-black`
- **Marca de agua** del logo en esquina inferior derecha (10% opacity)

---

### `ServicesSection.jsx`
Catálogo de 6 especialidades técnicas con tarjetas interactivas.

- **Imagen de fondo** (`redincendio1.webp`) con overlay `bg-si-bg/45` para nitidez
- **Header** con fondo translúcido `bg-white/50 backdrop-blur-sm` y borde rojo izquierdo
- **6 tarjetas** en grid responsive (1 col → 2 col → 3 col):

| # | Servicio | Items principales |
|---|---|---|
| 01 | Calderas y Presión | Reparación, Instalación, Habilitación OPDS |
| 02 | Piping | Acero al Carbono, Acero Inoxidable, PRFV |
| 03 | Sistemas de Seguridad | Red Contra Incendios, Detección, Rociadores |
| 04 | Fabricación e Infraestructura | Naves Industriales, Tanques, Estructuras |
| 05 | Electricidad y Automatización | Tableros, Cableado, Sistemas de Control |
| 06 | Aislación Térmica | Cañerías/Equipos, Chapa de Aluminio, Protección Industrial |

- **Hover por tarjeta**: `translateY(-8px)`, sombra intensificada, barra superior gris → roja, ícono cambia color
- **Número fantasma** de fondo por tarjeta (01–06)
- **CTA inferior**: fondo `bg-white/60 backdrop-blur-sm`, texto "¿Necesita una solución que no aparece?" + botón rojo

---

### `ProcessSection.jsx`
Visualización del flujo de trabajo en 5 pasos.

- **Fondo oscuro** (`#111`) con grid industrial overlay
- **5 pasos secuenciales**:

| Paso | Título | Descripción |
|---|---|---|
| 01 | Consulta Inicial | Recepción de requerimientos técnicos |
| 02 | Visita en Planta | Relevamiento y mediciones in situ |
| 03 | Propuesta Técnica | Presupuesto detallado con especificaciones |
| 04 | Ejecución | Implementación con supervisión permanente |
| 05 | Entrega Certificada | Documentación y habilitaciones |

- **Desktop**: layout horizontal con líneas conectoras entre pasos
- **Mobile**: layout vertical con conectores verticales
- **Badges numerados** (01–05) en esquina superior derecha
- **Garantía de respuesta** < 24 horas destacada

---

### `ProjectsGallery.jsx`
Galería de portafolio filtrable con lightbox personalizado.

**Grid:**
- **8 proyectos** con categorías: Infraestructura, Seguridad, Tuberías, Ingeniería, Automatización, Mantenimiento, Calderas, Fabricación
- **Filtros por categoría** con conteo visible `(N)` en cada botón
- **Animación de transición**: fade suave (opacity 0→1, 150ms) al cambiar filtro
- **Grid uniforme** `1→2→3 columnas` con `aspect-square`
- **Hover**: grayscale → color, scale 1.05×, borde rojo, lupa centrada con fondo rojo
- **Badge de conteo de fotos** ("3 fotos") en cada tarjeta
- **`loading="lazy"`** en todas las imágenes
- **Skeleton placeholder** (`skeleton-pulse`) mientras cargan

**Lightbox (sin librerías externas):**
- **Layout split**: panel de imagen (62%) + panel de info lateral (38%)
- **Contador de imagen** "2 / 4" en esquina superior izquierda
- **Navegación triple**: click en flechas, teclado (← → Esc), swipe táctil
- **Indicador de swipe** "← Deslizá →" en mobile (desaparece tras primer gesto)
- **Bloqueo de scroll** del body cuando está abierto
- **Thumbnails interactivos** en grid 5 columnas con borde activo rojo
- **Ficha técnica del proyecto**: grid 2×2 con iconos SVG (cliente, ubicación, materiales, duración)

**CTA inferior**: banner oscuro (#111) con grid overlay, etiqueta "Consulta Gratuita" y botón rojo shadow-press

**Datos por proyecto:**
```js
{ title, category, description, images[], client, location, materials, duration }
```

---

### `ContactFooter.jsx`
Formulario de contacto funcional + datos de contacto + footer.

**Header CTA**: título impactante `text-5xl–7xl` "¿Listo para su Proyecto?"

**Layout 2 columnas:**
- **Izquierda**: 3 items de contacto con iconos y hover:
  - 📞 `11 6867-4207` (Lunes a Viernes, 8–18hs)
  - 📧 `solucionesindustrialesns@gmail.com`
  - 📍 Presidente Derqui, Buenos Aires
- **Derecha**: Formulario con **Netlify Forms**

**Formulario (Netlify Forms):**
- **Campos**: Nombre (required), Empresa, Email (required), Consulta Técnica (required)
- **Anti-spam**: campo honeypot oculto (`bot-field`) — invisible para humanos, atrapa bots
- **Atributos**: `data-netlify="true"`, `data-netlify-honeypot="bot-field"`, `name="contact"`
- **Form oculto en `index.html`**: replica los campos para que Netlify detecte el formulario en el build (necesario para SPAs React)
- **Estados del formulario**:
  - `idle` → formulario normal
  - `submitting` → botón deshabilitado con spinner "Enviando..."
  - `success` → check verde + "Consulta Enviada" + "Nos pondremos en contacto en menos de 24hs" + link "Enviar otra consulta"
  - `error` → banner rojo con mensaje de fallback al teléfono
- **Submit via `fetch`** a `/` con `Content-Type: application/x-www-form-urlencoded`

**Footer bar**: logo + separador + nombre empresa + créditos de desarrollo (Ariel Nogueroles)

**Configuración Netlify (dashboard, sin código):**
- Los envíos se guardan en **Netlify → Forms → contact**
- Notificaciones por email: **Form notifications → Email notification** → `solucionesindustrialesns@gmail.com`

---

### `FloatingWhatsApp.jsx`
Botón flotante de WhatsApp fijo en esquina inferior derecha.

- **Botón circular verde** (`#25D366`) con icono SVG de WhatsApp
- **Doble anillo pulse**: 2 anillos con `animation-delay` escalonado (efecto radar)
- **Tooltip en hover**: "Escribir por WhatsApp" con nombre de la empresa
- **Link directo** con mensaje prellenado: `"Hola, me comunico desde su sitio web..."`
- **Número**: `+54 9 11 6867-4207`
- **z-index**: 30 para estar sobre todo el contenido

---

### `ScrollControls.jsx`
Botones de navegación vertical (arriba/abajo).

- **Aparecen** después de 300px de scroll
- **Posición**: lado derecho, arriba del botón de WhatsApp
- **Botón arriba**: fondo claro (`si-bg`) con borde
- **Botón abajo**: fondo rojo (`si-red`)
- **Smooth scroll** al top / bottom del documento
- **Hover**: iconos se desplazan sutilmente en su dirección

---

### `RevealOnScroll.jsx`
Componente wrapper reutilizable para animaciones de entrada al scroll.

- **`IntersectionObserver`** con threshold 0 y rootMargin `-50px` en bottom
- **Props configurables**:
  - `direction`: `up` | `down` | `left` | `right` | `none`
  - `delay`: milisegundos de retraso (para stagger entre elementos)
  - `className`: clases adicionales
- **Transición**: `opacity: 0 → 1` + `translateY/X` según dirección, 1000ms con `cubic-bezier(0, 0, 0.2, 1)`
- **Optimización**: `will-change: transform, opacity` + `unobserve` tras primera activación

---

## ⚙️ Desarrollo Local

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo (http://localhost:5173)
npm run dev

# 3. Build de producción
npm run build

# 4. Preview del build
npm run preview

# 5. Lint
npm run lint
```

---

## 🚢 Despliegue

### Netlify (Configuración actual)

El sitio está desplegado en **Netlify** con deploy automático desde GitHub.

| Configuración | Valor |
|---|---|
| **Repositorio** | `arielito1989/si-web` (branch `main`) |
| **Build command** | `npm run build` |
| **Publish directory** | `dist` |
| **Form detection** | Activado (Netlify Forms) |

Cada push a `main` dispara un deploy automático (~1 minuto).

**Netlify Forms:**
- Los envíos del formulario de contacto se almacenan en **Netlify Dashboard → Forms → contact**
- Las notificaciones por email se configuran en **Form notifications → Email notification**
- Anti-spam honeypot activado desde el código

---

## 🔍 SEO

Configurado en `index.html`:
- **Meta description** y **keywords** con términos de ingeniería industrial + Buenos Aires
- **Open Graph** (WhatsApp, LinkedIn, Facebook): título, descripción, imagen (`titu.png`)
- **Twitter Card**: summary_large_image
- **Favicon**: `logosi.png`
- **Theme color**: `#c00000`
- **Idioma**: `es` (español)

---

## 📋 Pendientes / Próximos pasos

- [ ] **Google Analytics / Tag Manager** — Agregar tracking de visitas y conversiones
- [ ] **Optimización de imágenes** — Evaluar compresión adicional o CDN para las fotos de la galería
- [ ] **Accesibilidad (a11y)** — Revisar contraste, aria-labels, navegación por teclado completa
- [ ] **Página 404** — Diseñar página de error consistente con la identidad visual

---

## 📝 Changelog

### 2026-02-28 — Formulario de contacto funcional (Netlify Forms)

**ContactFooter (`ContactFooter.jsx`):**
1. **Integración Netlify Forms** — `data-netlify="true"` con submit vía `fetch` (SPA-compatible)
2. **Anti-spam honeypot** — Campo oculto `bot-field` que atrapa bots automáticamente
3. **Campos con `name`** — `nombre`, `empresa`, `email`, `consulta` (legibles en el dashboard de Netlify)
4. **Validación HTML5** — `required` en nombre, email y consulta
5. **Estado "submitting"** — Botón deshabilitado con spinner animado y texto "Enviando..."
6. **Estado "success"** — Check verde + "Consulta Enviada" + link "Enviar otra consulta"
7. **Estado "error"** — Banner rojo con mensaje de fallback al teléfono

**HTML (`index.html`):**
8. **Formulario oculto** — Réplica estática del form para que Netlify lo detecte en el build (requisito para SPAs)

### 2026-02-28 — Mejoras en Servicios, Proyectos y Navbar

**Servicios (`ServicesSection.jsx`):**
1. **Header con fondo translúcido** — `bg-white/50 backdrop-blur-sm` con borde rojo izquierdo para legibilidad sobre la imagen de fondo
2. **Overlay ajustado** — De `bg-si-bg/65` a `bg-si-bg/45` para mayor nitidez de la imagen de fondo
3. **CTA inferior legible** — Fondo `bg-white/60 backdrop-blur-sm` con texto en negrita y botón rojo
4. **Renombrar "Ingeniería de Tuberías" a "Piping"** — Items principales: Acero al Carbono, Acero Inoxidable, PRFV
5. **Nueva tarjeta "Aislación Térmica"** — Aislación de Cañerías/Equipos, Revestimiento con Chapa de Aluminio, Protección Térmica Industrial (ahora 6 especialidades)

**Proyectos (`ProjectsGallery.jsx`):**
6. **Subtítulo más legible** — `text-2xl font-semibold` con borde rojo izquierdo (sin padding/card adicional)
7. **Eliminado conteo "9 proyectos"** — Evita contradicción con "200+ proyectos" en la sección de estadísticas
8. **Grid uniforme 3×3** — Removido `featured` (col-span-2), todas las tarjetas en `aspect-square`
9. **CTA inferior rediseñado** — Banner oscuro (#111) con grid industrial overlay, etiqueta "Consulta Gratuita" y botón rojo shadow-press
10. **Eliminado proyecto "Estructuras Metálicas"** — Usaba las mismas fotos que Naves Industriales
11. **Naves Industriales** — Duración cambiada a "—" (sin especificar tiempo)
12. **Tuberías Sanitarias** — Removida imagen `tubos02.webp` (era una caldera, no correspondía)

**Navbar:**
13. **Logo más grande** — `h-16` en posición inicial (hero), se reduce a `h-9` al hacer scroll

### 2026-02-27 — Mejoras visuales en ProjectsGallery

**Galería (Grid):**
1. **Grid con tarjetas de tamaño variable** — Proyectos marcados como `featured` ocupan 2 columnas (`lg:col-span-2`) con `aspect-[16/9]`, generando jerarquía visual
2. **Animación de transición al filtrar** — Fade suave (opacity 0→1, 150ms) al cambiar de categoría usando estado `isFiltering`
3. **Conteo visible en todos los filtros** — Cada botón de categoría muestra `(N)` siempre, no solo cuando está activo
4. **Ícono de galería centrado** — Lupa con fondo rojo que aparece en hover, indicando que la tarjeta es clickeable
5. **Badge "★ Destacado"** — Siempre visible en color amber sobre proyectos principales
6. **CTA al final de la sección** — Bloque "Solicitar Presupuesto" con estilo shadow-press consistente con ServicesSection
7. **`loading="lazy"`** — En todas las imágenes del grid para mejor performance inicial
8. **Skeleton placeholder** — Animación `skeleton-pulse` (gris pulsante) visible mientras cargan las imágenes

**Lightbox:**
9. **Ficha técnica del proyecto** — Grid 2×2 con iconos SVG mostrando: cliente, ubicación, materiales, duración
10. **Indicador de swipe** — "← Deslizá →" con flechas animadas, visible solo en mobile, desaparece tras primer gesto
11. **Contador de imagen** — "2 / 4" en esquina superior izquierda del panel de imagen
12. **Bloqueo de scroll** — `document.body.style.overflow = 'hidden'` cuando el lightbox está abierto, se restaura al cerrar

**CSS (`src/index.css`):**
13. Nuevos `@keyframes`: `skeleton-pulse`, `swipe-hint`, `swipe-hint-reverse`

**Datos enriquecidos:**
- Cada proyecto ahora incluye: `client`, `location`, `materials`, `duration` (además de los campos existentes)
- 2 proyectos marcados como `featured`: Naves Industriales y Reparación de Calderas

---

## 👥 Créditos

- **SI Soluciones Industriales** — Cliente y contenido
- **Ariel Nogueroles** — Desarrollo frontend
- © 2026 — Todos los derechos reservados

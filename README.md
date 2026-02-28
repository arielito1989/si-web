# SI Soluciones Industriales — Web Corporativa

Página web corporativa y portafolio de **SI Soluciones Industriales**, empresa de ingeniería industrial con sede en Presidente Derqui, Buenos Aires, Argentina. Diseñada para proyectar una imagen profesional de alto impacto, con estética premium acorde a los estándares de la industria.

---

## 🚀 Stack Tecnológico

| Tecnología | Versión | Rol |
|---|---|---|
| **React** | 19 | Framework UI — componentes, hooks, estado |
| **Vite** | 7 | Build tool — dev server ultrarrápido, bundle optimizado |
| **Tailwind CSS** | v4 | Utility-first CSS — diseño responsivo completo |
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
- `scroll-line` — indicador de scroll animado en el Hero
- `pulse-ring` — anillos concéntricos del botón WhatsApp flotante
- `shimmer` — gradiente animado sobre el headline del Hero
- `fade-in` / `scale-up` — apertura del lightbox de la galería
- `skeleton-pulse` — placeholder pulsante mientras cargan imágenes en la galería
- `swipe-hint` / `swipe-hint-reverse` — indicador de deslizamiento en lightbox mobile

---

## 📁 Estructura del Proyecto

```text
si-web/
├── public/
│   ├── FOTOS/                  # Fotos de proyectos (galería)
│   │   ├── aislacion/
│   │   ├── caldera/
│   │   ├── conexioninox/
│   │   ├── inox/
│   │   └── *.png / *.jpeg
│   ├── logosi.png              # Isotipo (marca de agua, footer)
│   ├── si_soluciones.png       # Logo principal (navbar)
│   ├── titu.png                # Imagen de fondo del Hero
│   └── piecarpeta.png          # Imagen de fondo del Footer
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── ProjectsGallery.jsx
│   │   ├── ContactFooter.jsx
│   │   ├── FloatingWhatsApp.jsx
│   │   ├── ScrollControls.jsx
│   │   └── RevealOnScroll.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css               # Tema Tailwind v4 + animaciones globales
├── index.html
├── vite.config.js
└── package.json
```

---

## 🏗️ Componentes

### `Navbar.jsx`
- Barra fija con fondo transparente → blur/blanco al hacer scroll
- **Logo más grande** (`h-16`) en posición inicial, se reduce a `h-9` al hacer scroll
- **Barra de progreso de lectura** (roja, 3px, top) que crece con el scroll
- **Detección de sección activa** via `IntersectionObserver` — subraya el link correspondiente
- Menú hamburguesa animado en mobile (3 barras con transform CSS)
- Link "Cotizar" como CTA rojo con efecto shadow-press

### `HeroSection.jsx`
- Imagen de fondo con overlay gradiente oscuro + grid industrial semitransparente
- **Animaciones de entrada escalonadas** (stagger) via `opacity` + `translateY` inline
- Línea acento roja en el borde izquierdo
- Badge de certificación OPDS animado
- Headline con **efecto shimmer** en el gradiente rojo
- Subtítulo `text-xl sm:text-2xl` con borde izquierdo rojo
- **Strip de estadísticas** en la parte inferior: 15+ años / 200+ proyectos / 100% certificados / 0 errores
- **Indicador "Descubrir"** centrado, visible en todos los tamaños, con línea animada

### `AboutSection.jsx`
- Texto corporativo `text-xl` con párrafo destacado en borde rojo
- 3 diferenciales (Seguridad Certificada, Ingeniería de Precisión, Servicio Integral) con iconos
- **Grilla de stats con conteo animado** (`requestAnimationFrame` + ease-out cúbico) que se activa al entrar en viewport
- Números grandes (`text-6xl sm:text-7xl`) en rojo; etiquetas `text-base font-black`

### `ServicesSection.jsx`
- **6 tarjetas de servicios** elevadas con `border`, `shadow`, `hover:-translate-y-2` y sombra que se intensifica
- Header con fondo translúcido (`bg-white/50 backdrop-blur-sm`) y borde rojo para máxima legibilidad sobre la imagen de fondo
- Imagen de fondo con overlay `bg-si-bg/45` para mayor nitidez
- Barra superior por tarjeta (gris → roja en hover)
- Ícono SVG por servicio + número fantasma de fondo
- Servicios: Calderas y Presión, Piping, Sistemas de Seguridad, Fabricación e Infraestructura, Electricidad y Automatización, Aislación Térmica
- CTA inferior con fondo `bg-white/60 backdrop-blur-sm` para legibilidad
- Grid responsive: 1 columna (mobile) → 2 columnas (tablet) → 3 columnas (desktop)

### `ProjectsGallery.jsx`
- **Filtros por categoría** (Todos / Infraestructura / Seguridad / Tuberías / etc.) con conteo visible en todos los filtros
- **Animación de transición suave** (fade opacity) al cambiar de filtro
- Grid uniforme `1→2→3 columnas` con `aspect-square`, efecto grayscale → color en hover + borde rojo
- **Ícono de galería/lupa** centrado que aparece en hover, indicando que la tarjeta es clickeable
- **Skeleton placeholder** animado (`skeleton-pulse`) mientras cargan las imágenes
- **`loading="lazy"`** en las imágenes del grid para mejor performance inicial
- **Subtítulo** con `text-2xl font-semibold` y borde rojo izquierdo para alta legibilidad
- **CTA "Solicitar Presupuesto"** banner oscuro (#111) con grid industrial overlay y botón rojo shadow-press
- **Lightbox personalizado** sin librerías externas:
  - Panel de imagen (62%) + panel de info lateral
  - **Contador de imagen** "2 / 4" en esquina superior izquierda
  - Navegación por click, teclado (←→ Esc) y swipe táctil
  - **Indicador de swipe** "← Deslizá →" en mobile (desaparece tras primer gesto)
  - **Bloqueo de scroll del body** cuando el lightbox está abierto
  - Thumbnails interactivos con borde activo en rojo
  - **Ficha técnica del proyecto**: cliente, ubicación, materiales, duración (grid 2×2 con iconos)
- 8 proyectos: Naves Industriales, Red Contra Incendios, Tuberías Sanitarias, Conexiones Inoxidables, Tanques Industriales, etc.

### `ContactFooter.jsx`
- Header con título impactante `text-5xl–7xl`
- 3 items de contacto: Teléfono / Email / Ubicación (con iconos y sublabels)
- Formulario con inputs `text-base`, labels `text-xs uppercase`, 2 columnas (Nombre + Empresa)
- CTA "Enviar Consulta" en rojo con shadow-press
- **Footer bar**: logo + separador + nombre empresa + créditos de desarrollo

### `FloatingWhatsApp.jsx`
- Botón circular rojo en esquina inferior derecha
- **Doble anillo pulse** (2 anillos con `animation-delay` escalonado)
- Tooltip que aparece al hover con nombre y número
- Número: `+54 9 11 6867-4207`

### `RevealOnScroll.jsx`
- Wrapper genérico con `IntersectionObserver`
- Props: `direction` (`up` / `left` / `right`), `delay` (ms)
- Aplica `opacity: 0 → 1` + `translateY/X` con transición CSS

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
```

---

## 🚢 Despliegue en Producción

### Opción A — Netlify (Recomendado, gratis)

1. Ir a [netlify.com](https://netlify.com) → **Add new site → Import an existing project**
2. Conectar el repositorio de GitHub
3. Configurar:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Click en **Deploy site** — listo en ~1 minuto

> Para redirecciones SPA (si se agrega routing), crear `public/_redirects` con:
> ```
> /* /index.html 200
> ```

### Opción B — Vercel (Gratis, zero-config)

```bash
# Instalar CLI de Vercel
npm i -g vercel

# Desde la carpeta del proyecto
vercel

# Seguir el wizard: Framework = Vite, Build = npm run build, Output = dist
```

### Opción C — GitHub Pages

```bash
# Instalar gh-pages
npm install --save-dev gh-pages
```

Agregar en `package.json`:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

Agregar en `vite.config.js`:
```js
export default defineConfig({
  base: '/nombre-del-repo/',   // ← nombre exacto del repositorio
  plugins: [react()],
})
```

```bash
npm run deploy
```

### Opción D — Servidor propio (VPS / cPanel)

```bash
npm run build
# Subir el contenido de /dist/ al directorio raíz del servidor web (Apache/Nginx)
```

Para **Nginx**, configurar para SPA:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

---

## 📋 Pendientes / Próximos pasos

- [ ] **Backend del formulario de contacto** — Conectar a EmailJS, Formspree o endpoint propio para que los mensajes lleguen al email
- [ ] **Dominio personalizado** — Apuntar DNS al servicio de hosting elegido
- [ ] **Google Analytics / Tag Manager** — Agregar tracking de visitas

---

## 📝 Changelog

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

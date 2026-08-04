# Contexto del proyecto

Portafolio personal de Gian Carlos. Sitio estático: HTML + CSS inline (`style="..."` y `<style>` en cada archivo) + `assets/site.js`. No hay build step, no hay framework, no hay archivos `.css` separados.

Estructura:
```
index.html
proyectos/          (case studies: dd3land, revisores, editor-dd3land, contacto, etc.)
assets/
  site.js
```

Deploy: push a `main` en GitHub → Vercel hace build y publica automáticamente.

## Reglas para el agente

1. **Trabajar UNA sección o archivo a la vez.** Esperar aprobación explícita antes de continuar con la siguiente.
2. **No refactorizar, renombrar clases, mover archivos ni "limpiar" código** sin que se te pida directamente. Esto incluye NO crear un archivo `.css` separado ni convertir los estilos inline en custom properties (`:root`) a menos que sea el objetivo explícito de la tarea.
3. **No introducir frameworks, build tools, dependencias ni librerías nuevas.** El sitio es vanilla HTML/CSS/JS a propósito.
4. **Usar siempre los valores exactos de la sección "Design tokens" de abajo.** Si necesitas un color, tipografía, spacing o radius que no está en esa lista, DETENTE y pregunta — no inventes ni te acerques con un valor "parecido".
5. **Antes de editar, mostrar qué archivos vas a tocar y un resumen de los cambios.** No aplicar ediciones directamente sin ese resumen previo.
6. **Comandos de solo lectura (grep, cat, git status, git diff) se pueden correr libremente.** Cualquier comando que escriba, borre, mueva archivos o haga `git push`/`git checkout` debe explicarse antes de ejecutarse.
7. **Nunca hacer `git push` ni `git checkout` de rama sin pedirlo explícitamente.** Los commits y el push se hacen manualmente desde GitHub Desktop.

## Design tokens (valores reales del proyecto — usar tal cual, no aproximar)

### Colores
| Valor | Uso |
|---|---|
| `#010A00` | Fondo base del sitio, fondo de cards, headers translúcidos |
| `#FFFFFF` | Texto principal, iconos |
| `#B8EA07` | Color de marca — links, CTAs, acentos, badges, foco, dot pulsante |
| `#a1a1aa` | Texto secundario / descripciones |
| `#71717a` | Texto terciario / labels / eyebrow |
| `#d4d4d8` | Texto en cards (testimonios, value props) |
| `#070d05` | Fondo de cards oscuras (sobre-mí, testimonios, job cards) |
| `#52525b` | Copyright del footer |
| `#d4ff3d` | Hover de link (`a:hover`) |
| `#00e5ff` / `#ff2ec4` | Efecto glitch cyan/magenta del headline del hero (uso único, decorativo) |
| `#0c1408` | Fondo placeholder "proyecto en progreso" |
| `#4a4a4a` | Botón "Anterior" deshabilitado |
| `#000` | `filter: brightness(0)` para tintar SVGs antes de invertir |

RGBA en uso (variantes de opacidad, no colores nuevos):
- `rgba(255,255,255,.08)` — bordes divisores de sección (el más usado)
- `rgba(255,255,255,.1–.3)` — bordes de grid, imágenes, botones/badges secundarios
- `rgba(1,10,0,.55–.92)` — headers con blur, overlays, modal
- `rgba(184,234,7,.1–.5)` — tintes de marca para badges, tags, sombras de texto
- `rgba(0,0,0,.55–.6)` — sombras

### Tipografías
- **Bricolage Grotesque** (variable, opsz 12–96, wght 400–800) — headings, labels, botones, UI chrome
- **Roboto** (wght 300;400;500;700) — body copy (`body { font-family: 'Roboto', sans-serif }`)
- Carga vía Google Fonts (`<link>` en el `<head>`, ya presente en los 5 archivos)

### Escala tipográfica (valores más reutilizados — preferir estos antes de crear uno nuevo)
- Font-size fijos: `13px`, `16px`, `12px`, `14px`, `17px`, `15px`
- Headings fluidos: `clamp(26px,3.2vw,40px)` para h2 de sección (el más reutilizado)
- Font-weight en uso: `400`, `500`, `600`, `700` (dominante), `800`
- Line-height: `1.75` para body copy; `.86–1.02` para headlines grandes

### Espaciado
- Padding estándar de sección: `80px clamp(20px,4vw,56px)`
- Contenedor horizontal universal: `clamp(20px,4vw,56px)` — actúa como el único spacing token real del proyecto
- Padding de componentes: `22px 24px` (stat cards), `14px 22px` (botones secundarios), `6px 14px` (badges/pills)
- Gap: `12px` (default para flex row de icon+label), `8px`, `16px`, `10px`, `20px`

### Otros
- Border-radius: `14px` (imágenes/cards — estándar de facto), `2px` (botones "sharp"), `50%` (avatares/botones circulares), `999px` (pills/badges)
- Transition: duración más común `.2s`, easing default `ease`; reveal usa `cubic-bezier(.16,.8,.24,1)`
- Breakpoints en uso: `420px`, `640px`, `768px`, `860px`, `900px`

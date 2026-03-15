# Propuesta de Diseño: Dr. Christopher Butler Vallejo

## Identidad
Christopher Butler es un cardiólogo con raíces navales que construyó una carrera de alcance internacional — desde la Base Naval de Paita hasta la European Society of Cardiology. No es solo un médico que atiende pacientes: es investigador publicado, docente universitario, y miembro activo de 6 sociedades cardiológicas en 4 países. Su portfolio debe comunicar: "este es un cardiólogo de clase mundial que eligió servir en Lima."

## Audiencia
1. **Pacientes potenciales** buscando cardiólogo en Lima → necesitan ver credenciales, dónde atiende, cómo contactar
2. **Instituciones médicas / hospitales** → trayectoria completa, membresías internacionales
3. **Colegas / estudiantes** → publicaciones, formación, docencia
4. **Referentes (Doctoralia, Google)** → SEO, presencia profesional digital

## Metáfora Visual
Un monitor cardíaco en la oscuridad — preciso, vital, confiable. Dark navy como la profundidad del conocimiento médico, con pulsos de cyan que evocan tecnología cardiológica (ecocardiogramas, monitores, líneas de vida). La oscuridad no es pesada — es el entorno controlado de un quirófano, donde la precisión salva vidas.

## Paleta (6 colores — monocromático frío, familia navy→cyan)
```
primaryDark:  #0A1628  — Fondo principal, nav, footer (midnight navy profundo)
primary:      #1E3A5F  — Cards, bordes, secciones alternas (navy clásico médico)
primaryLight: #2D5F8A  — Shimmer, hover states, badges (steel blue)
accent:       #06B6D4  — CTAs, stats, pulse line, highlights (cyan — latido cardíaco)
surface:      #0F2136  — Background de secciones alternas (navy más claro)
surfaceLight: #162D4A  — Cards elevadas, hero overlay (navy medio)
```
**Justificación:** El cliente pidió estilo dark tipo la ref Pinterest. Navy→cyan es la paleta médica por excelencia — evoca monitores cardíacos, ecocardiogramas, tecnología de imagen. El cyan como accent es el "latido" visual del sitio.

**Contraste:** Texto blanco #F8FAFC sobre primaryDark #0A1628 = ratio 16.5:1 (AAA). Cyan #06B6D4 sobre #0A1628 = ratio 7.8:1 (AAA).

## Tipografía
- **Headings:** DM Serif Display — autoridad clásica, peso visual fuerte
- **Body:** Source Sans 3 — legibilidad clínica, limpio, profesional
- **Stats/números:** Space Grotesk — moderno, técnico, para métricas

## Efecto Visual Único: "Pulse Line"
Una línea de ECG (electrocardiograma) animada en SVG que recorre el hero horizontalmente — sutil, en cyan sobre dark navy, como un monitor cardíaco real. Se dibuja con `stroke-dasharray` animation al cargar. Aparece también como separator entre secciones (más sutil, opacity baja).

## Secciones (en orden — NO genéricas)

### 1. Nav — Floating pill, transparent→solid on scroll
```
MOBILE (375px):
┌─────────────────────────┐
│ ♥ Dr. Butler    [☰]     │
└─────────────────────────┘

DESKTOP:
┌──────────────────────────────────────────────┐
│ ♥ Dr. Butler   Sobre Mí  Trayectoria  Contacto │
└──────────────────────────────────────────────┘
```
♥ = SVG corazón en cyan (mini, no cursi — estilizado médico)

### 2. Hero — "Dark Authority" con foto + credentials
```
MOBILE (375px):
┌─────────────────────────┐
│                         │
│    [Foto circular]      │
│    con borde cyan       │
│                         │
│  Dr. Christopher Butler │
│     ─── ♥ ───          │  ← pulse line SVG
│  Médico Cardiólogo      │
│                         │
│  CMP 38578 · RNE 027649│
│                         │
│  ┌─────┐ ┌─────┐       │
│  │ 24+ │ │ 84  │       │
│  │Años │ │Cong.│       │
│  └─────┘ └─────┘       │
│  ┌─────┐ ┌─────┐       │
│  │  6  │ │  4  │       │
│  │Soc. │ │Cont.│       │
│  └─────┘ └─────┘       │
│                         │
│  [Agendar Consulta ♥]   │  ← CTA cyan
│                         │
└─────────────────────────┘

DESKTOP:
┌──────────────────────────────────────────────┐
│                                              │
│  Dr. Christopher          ┌──────────┐       │
│  Butler Vallejo           │          │       │
│  ─────── ♥ ──────        │  [FOTO]  │       │
│  Médico Cardiólogo        │  borde   │       │
│                           │  cyan    │       │
│  CMP 38578 · RNE 027649  └──────────┘       │
│                                              │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐               │
│  │24+ │ │ 84 │ │ 6  │ │ 4  │               │
│  │Años│ │Cong│ │Soc.│ │Cont│               │
│  └────┘ └────┘ └────┘ └────┘               │
│                                              │
│  [Agendar Consulta]    [Ver Trayectoria]     │
│                                              │
└──────────────────────────────────────────────┘
```
Stats: 24+ Años de Experiencia | 84 Congresos | 6 Sociedades Internacionales | 4 Continentes

### 3. "Dónde Atiendo" — 2 cards lado a lado (público + privado)
```
MOBILE:
┌─────────────────────────┐
│  ┌───────────────────┐  │
│  │ 🏥 Clínica SANNA  │  │
│  │ Médico-Cardiólogo  │  │
│  │ 2019 - Actualidad  │  │
│  │ [cyan border left] │  │
│  └───────────────────┘  │
│  ┌───────────────────┐  │
│  │ 🏛 Hospital Lima   │  │
│  │ Este - Vitarte     │  │
│  │ Cardiólogo         │  │
│  │ [cyan border left] │  │
│  └───────────────────┘  │
└─────────────────────────┘
```
**Por qué esta sección:** El paciente quiere saber DÓNDE encontrarlo. Es lo más práctico y diferenciador — dual público/privado.

### 4. "Sobre Mí" — Narrativa + quote
```
MOBILE:
┌─────────────────────────┐
│  SOBRE MÍ               │
│  ─── ♥ ───              │
│                         │
│  Párrafo narrativo:     │
│  Del Liceo Naval a la   │
│  European Society of    │
│  Cardiology. 24+ años   │
│  dedicados al corazón...│
│                         │
│  ┌───────────────────┐  │
│  │ "La cardiología no│  │
│  │ es solo ciencia,  │  │
│  │ es vocación."     │  │  ← quote derivada de su perfil
│  └───────────────────┘  │
│                         │
│  Especialidades:        │
│  • Ecocardiografía      │
│  • Eco Transesofágica   │
│  • Cardiología Clínica  │
│  • Insuficiencia Cardíaca│
│  • Hipertensión Arterial│
└─────────────────────────┘
```

### 5. "Alcance Internacional" — Mapa visual de formación (SECCIÓN ÚNICA)
```
MOBILE:
┌─────────────────────────┐
│  FORMACIÓN INTERNACIONAL│
│  ─── ♥ ───              │
│                         │
│  🇵🇪 Perú               │
│  USMP · UNFV · INCOR    │
│  ─────────────────      │
│  🇪🇸 España              │
│  Homologación Médica    │
│  ─────────────────      │
│  🇦🇷 Argentina           │
│  Eco Doppler · Favaloro │
│  SAC · Bioimágenes      │
│  ─────────────────      │
│  🇨🇴 Colombia            │
│  Fundación SHAIO        │
│  CardioLili Cali        │
│  ─────────────────      │
│  🇺🇸 Estados Unidos      │
│  Schneider Children's NY│
│  George Washington Univ │
│  AHA · ACC              │
│  ─────────────────      │
└─────────────────────────┘

DESKTOP: Grid de 5 cards con banderas, conectados por línea cyan
```
**Por qué:** Ningún otro portfolio tiene esto. Es lo que lo diferencia — formación en 5 países. Visualmente poderoso.

### 6. "Sociedades" — Badges/shields row
```
MOBILE:
┌─────────────────────────┐
│  MIEMBRO DE             │
│                         │
│  ┌─────┐  ┌─────┐      │
│  │ ESC │  │ HFA │      │
│  │     │  │     │      │
│  └─────┘  └─────┘      │
│  ┌─────┐  ┌─────┐      │
│  │ SAC │  │SOCIM│      │
│  │     │  │ECAR │      │
│  └─────┘  └─────┘      │
│  ┌─────┐  ┌─────┐      │
│  │SISIA│  │ SPC │      │
│  │  C  │  │     │      │
│  └─────┘  └─────┘      │
└─────────────────────────┘
```
Cada badge: nombre de la sociedad + país. Hover → nombre completo. Estilo shield/insignia (evocando badges navales de su formación).

### 7. "Trayectoria" — Timeline vertical (los hitos más importantes)
```
MOBILE:
┌─────────────────────────┐
│  TRAYECTORIA            │
│  ─── ♥ ───              │
│                         │
│  ♥─ 2024-25             │
│  │  Docente U. Científ. │
│  │  del Sur             │
│  ♥─ 2022-23             │
│  │  Eco Avanzada        │
│  │  Buenos Aires        │
│  ♥─ 2019                │
│  │  Clínica SANNA       │
│  ♥─ 2016                │
│  │  Maestría Cardiología│
│  │  USMP                │
│  ♥─ 2009                │
│  │  Stage Internacional │
│  │  NY + Bogotá         │
│  ♥─ 2007-10             │
│  │  Especialidad Cardio │
│  │  UNFV                │
│  ♥─ 2006                │
│  │  Homologación España │
│  ♥─ 2002                │
│  │  Medicina USMP       │
│  │  SERUMS Base Naval   │
│  ♥─ 1981-91             │
│  │  Liceo Naval         │
│  │  "Almirante Guise"   │
└─────────────────────────┘
```
Los dots del timeline son corazones mini (♥) en cyan — pulse line conectándolos.

### 8. "Investigación" — Publicación destacada
```
MOBILE:
┌─────────────────────────┐
│  INVESTIGACIÓN          │
│  ─── ♥ ───              │
│                         │
│  ┌───────────────────┐  │
│  │ ARTÍCULO ORIGINAL │  │
│  │                   │  │
│  │ Consumo de Beta-  │  │
│  │ bloqueadores y    │  │
│  │ Síntomas Depresivos│ │
│  │ en Adultos Mayores│  │
│  │ Hipertensos       │  │
│  │                   │  │
│  │ Estudio           │  │
│  │ Multicéntrico 2025│  │
│  │                   │  │
│  │ Archivos Peruanos │  │
│  │ de Cardiología    │  │
│  └───────────────────┘  │
│                         │
│  + 3 trabajos como      │
│  coautor (2004)         │
└─────────────────────────┘
```

### 9. "Contacto" — Dark card con CTA prominente
```
MOBILE:
┌─────────────────────────┐
│  CONTACTO               │
│  ─── ♥ ───              │
│                         │
│  📧 chrisbutler75@      │
│     yahoo.com           │
│  📱 999 434 491         │
│  📍 San Borja, Lima     │
│                         │
│  [LinkedIn]  [Doctoralia]│
│                         │
│  [Agendar Consulta ♥]   │
│                         │
└─────────────────────────┘

Footer: © 2026 Dr. Christopher Butler · CMP 38578
```

## Secciones que NO incluir
- **Skills pills** — es médico, no programador. Sus "skills" son las especialidades en Sobre Mí.
- **Education genérica** — incorporada en Timeline y Alcance Internacional.
- **Services cards** — no es freelancer, es médico con consulta. "Dónde Atiendo" es más directo.
- **Projects grid** — no aplica. Su "portafolio" son sus credenciales y formación.
- **CTA shimmer genérico** — tiene CTA en Hero y Contacto, integrado naturalmente.

## Resumen de Componentes Custom (.astro)
1. **Nav.astro** — Floating pill con corazón SVG
2. **Hero.astro** — Dark 2-col con foto, stats, pulse line SVG
3. **DondeAtiendo.astro** — 2 cards público/privado
4. **SobreMi.astro** — Narrativa + quote + especialidades
5. **AlcanceInternacional.astro** — Grid de países con banderas (ÚNICO)
6. **Sociedades.astro** — Badge/shield grid
7. **Trayectoria.astro** — Timeline vertical con corazones cyan
8. **Investigacion.astro** — Publicación card
9. **Contacto.astro** — Dark CTA + datos
10. **Footer.astro** — Minimal dark

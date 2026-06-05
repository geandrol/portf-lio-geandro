# Style Guide - LCS Portfolio Design System

## 1. Cores (Colors)

### Paleta Primária (Brand - Indigo/Purple Spectrum)
Utilizada para ações principais, destaques e identidade da marca.

| Token | Hex | Uso |
|-------|-----|-----|
| `brand-50` | `#eef2ff` | Backgrounds sutis (Light) |
| `brand-100` | `#e0e7ff` | Hover backgrounds |
| `brand-500` | `#6366f1` | **Cor Principal**, Botões, Links |
| `brand-600` | `#4f46e5` | Hover de Botões |
| `brand-900` | `#312e81` | Textos escuros de marca |
| `brand-glow` | `rgba(99, 102, 241, 0.5)` | Sombras e brilhos |

### Superfícies (Surfaces)
Definição de fundos para Light e Dark mode.

| Token | Light Mode | Dark Mode | Descrição |
|-------|------------|-----------|-----------|
| `bg-body` | `#f9fafb` (Gray-50) | `#0B0F19` | Fundo principal da página |
| `bg-surface` | `#ffffff` | `#111827` | Cards e seções destacadas |
| `bg-glass` | `white/70` | `#111827/70` | Efeito Glassmorphism |

### Texto e Contraste (Typography Colors)
Conformidade WCAG AA garantida.

| Token | Light Mode | Dark Mode | Contraste (aprox) |
|-------|------------|-----------|-------------------|
| `text-primary` | `#111827` (Gray-900) | `#f3f4f6` (Gray-100) | Alto contraste |
| `text-secondary` | `#4b5563` (Gray-600) | `#9ca3af` (Gray-400) | Texto de apoio |
| `text-brand` | `#4f46e5` (Brand-600) | `#818cf8` (Brand-400) | Links e Destaques |

---

## 2. Tipografia (Typography)

### Fontes
- **Heading**: `Poppins` (Pesos: 500, 600, 700)
- **Body**: `Inter` (Pesos: 400, 500)

### Escala Tipográfica

| Elemento | Tamanho (Mobile) | Tamanho (Desktop) | Peso | Leading |
|----------|------------------|-------------------|------|---------|
| `H1` Hero | `3rem` (48px) | `4.5rem` (72px) | Bold (700) | 1.1 |
| `H2` Section | `2rem` (32px) | `2.5rem` (40px) | Bold (700) | 1.2 |
| `H3` Card | `1.25rem` (20px) | `1.5rem` (24px) | SemiBold (600) | 1.3 |
| `Body` | `1rem` (16px) | `1.125rem` (18px) | Regular (400) | 1.6 |
| `Small` | `0.875rem` (14px) | `0.875rem` (14px) | Medium (500) | 1.5 |

---

## 3. Layout e Espaçamento (Grid & Spacing)

### Container
- **Classe**: `.container-responsive`
- **Largura Máxima**: `1280px` (7xl)
- **Padding Lateral**: `24px` (px-6)

### Espaçamento Vertical
- **Seções**: `py-20` (80px) em mobile, `py-32` (128px) em desktop.
- **Gap Padrão**: `gap-6` (24px) a `gap-12` (48px).

---

## 4. Componentes (Components)

### Botões (Buttons)

#### Primary Button (`.btn-primary`)
- **Bg**: `brand-600` -> `brand-500` (Hover)
- **Text**: `white`
- **Shadow**: `shadow-lg shadow-brand-500/25`
- **Interaction**: Scale 0.98 on click, Lift -2px on hover.

#### Secondary Button (`.btn-secondary`)
- **Bg**: `transparent` / `surface`
- **Border**: `gray-200` (Light) / `gray-700` (Dark)
- **Hover**: `gray-50` (Light) / `gray-800` (Dark)

### Cards (`.glass-card`)
- **Background**: Semi-transparent com backdrop-blur (12px).
- **Border**: 1px solid white/10.
- **Shadow**: `shadow-sm` -> `shadow-md` (Hover).
- **Radius**: `rounded-2xl`.

---

## 5. Microinterações (Animations)

- **Fade In**: Elementos entram com `opacity: 0` -> `1` e `y: 20` -> `0`.
- **Float**: Badges flutuam suavemente (`animate-float`).
- **Glow**: Anéis de brilho pulsantes (`animate-pulse`) atrás de imagens de destaque.
- **Hover**: Links e ícones escalam (`scale-110`) e mudam de cor.

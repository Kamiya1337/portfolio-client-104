---
name: Liquid Glass
colors:
  surface: '#faf9f8'
  surface-dim: '#dadad9'
  surface-bright: '#faf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f2'
  surface-container: '#eeeeed'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e3e2e1'
  on-surface: '#1a1c1c'
  on-surface-variant: '#464652'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f0f0'
  outline: '#767683'
  outline-variant: '#c7c5d3'
  surface-tint: '#4f55ae'
  primary: '#4f55ae'
  on-primary: '#ffffff'
  primary-container: '#8e94f2'
  on-primary-container: '#232781'
  inverse-primary: '#bfc2ff'
  secondary: '#6a5b56'
  on-secondary: '#ffffff'
  secondary-container: '#f2ded7'
  on-secondary-container: '#70615c'
  tertiary: '#3a637c'
  on-tertiary: '#ffffff'
  tertiary-container: '#79a1bd'
  on-tertiary-container: '#05384f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e0e0ff'
  primary-fixed-dim: '#bfc2ff'
  on-primary-fixed: '#02026b'
  on-primary-fixed-variant: '#373c95'
  secondary-fixed: '#f2ded7'
  secondary-fixed-dim: '#d5c3bc'
  on-secondary-fixed: '#231915'
  on-secondary-fixed-variant: '#51443f'
  tertiary-fixed: '#c7e7ff'
  tertiary-fixed-dim: '#a3cce9'
  on-tertiary-fixed: '#001e2e'
  on-tertiary-fixed-variant: '#204b63'
  background: '#faf9f8'
  on-background: '#1a1c1c'
  surface-variant: '#e3e2e1'
typography:
  display-lg:
    fontFamily: EB Garamond
    fontSize: 64px
    fontWeight: '500'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: EB Garamond
    fontSize: 40px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: EB Garamond
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-md:
    fontFamily: EB Garamond
    fontSize: 28px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  caption:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style
The design system is built on a "Liquid Glass" aesthetic, merging the structural clarity of academic publishing with the ethereal, fluid motion of modern creative tools. The brand personality is premium, intellectual, and sophisticated, yet avoids the rigidity typically associated with traditional institutions. 

The visual direction centers on high-fidelity glassmorphism. Interfaces should feel like a series of suspended, translucent lenses layered over a light, luminous environment. Depth is achieved through background blurs (30px–60px), soft organic gradients that mimic light refraction, and a "liquid" shape language that prioritizes flow over hard edges. This approach evokes an emotional response of calm focus and creative possibility.

## Colors
The palette is light and airy, utilizing luminous pastels to create an ethereal atmosphere. 

- **Primary (Soft Lavender):** Used for key interactive elements and subtle highlights. It provides the intellectual "anchor" to the palette.
- **Secondary (Pale Gold):** Acts as a warm refraction point, used for secondary accents and to signify premium states.
- **Tertiary (Misty Blue):** Used for background washes and decorative liquid shapes to provide depth.
- **Neutral:** A warm, off-white base that prevents the interface from feeling clinical.

Surfaces are never fully opaque. They use a semi-transparent white (60%–80% opacity) with a backdrop blur to interact with the underlying mesh gradients.

## Typography
The typographic system pairs the classical authority of **EB Garamond** with the modern, rhythmic precision of **Manrope**.

- **Headlines:** Use EB Garamond for all editorial and structural headings. Its high-contrast strokes and elegant serifs reinforce the academic and premium tone.
- **Body & Interface:** Use Manrope for all functional text, long-form reading, and labels. Its clean, geometric construction ensures high legibility against frosted glass backgrounds.
- **Hierarchy:** Maintain generous vertical rhythm. Large display type should be set with tighter tracking to emphasize its "liquid" elegance.

## Layout & Spacing
The layout follows a fluid, organic philosophy. While a 12-column grid is used for structural alignment, elements should feel "floated" rather than boxed in.

- **Margins:** Desktop views utilize wide margins (64px) to create a sense of focus and exclusivity.
- **Fluidity:** Use asymmetrical spacing for decorative elements to mimic the natural flow of liquid.
- **Containers:** Main content containers should have a maximum width of 1280px, centered, to maintain readability for the serif-heavy headlines.
- **Mobile:** Transition to a single-column layout with 20px side margins. Large glass cards should span the full width to maximize the background blur surface area.

## Elevation & Depth
Elevation is not conveyed through shadows, but through **refraction and transparency**.

1.  **Backdrop Blur:** Every elevated surface (cards, modals, navigation bars) must apply a `backdrop-filter: blur(40px)`.
2.  **Inner Glow:** To simulate the edge of a glass pane catching light, apply a 1px inner border (stroke) using a semi-transparent white (30%–50% opacity) on the top and left edges.
3.  **Tonal Stacking:** Higher elevation levels are indicated by increasing the opacity of the glass surface (e.g., Base: 40%, Card: 60%, Modal: 80%).
4.  **Shadows:** Use only one "Ambient" shadow for the highest floating elements: a very soft, ultra-diffused blur (100px) with a hint of the primary lavender color at 5% opacity.

## Shapes
Shapes are defined by organic, "squircle-like" curves. 

- **Standard Elements:** Buttons and small containers use the `rounded` (0.5rem) setting.
- **Glass Cards:** Large surface areas use `rounded-xl` (1.5rem) to emphasize the soft, liquid aesthetic.
- **Interactive Blobs:** Background decorative elements should be true organic shapes (ellipses with varying radii) that subtly animate or pulse behind the glass layers.

## Components

- **Glass Cards:** The foundational component. Features a hairline 0.5px border in white (20% opacity), a backdrop blur, and a subtle linear gradient background (Top-Left: White 10%, Bottom-Right: Transparent).
- **Buttons:**
    - *Primary:* Solid pastel lavender with a slight inner glow. No harsh shadows. 
    - *Ghost:* A glass-morphic variant with a visible 1px border that brightens on hover.
- **Inputs:** Fields are "inset" glass—slightly darker than the surrounding card with a 10% opacity tint. The focus state transitions the border to the primary lavender.
- **Chips/Labels:** Small, pill-shaped glass elements with `label-md` typography. Used for categorization and academic tags.
- **Navigation:** A floating horizontal "dock" with high-intensity blur and a soft top-edge refraction line.
- **Progress Indicators:** Fluid, non-linear loading states that resemble moving liquid or shifting light refractions.
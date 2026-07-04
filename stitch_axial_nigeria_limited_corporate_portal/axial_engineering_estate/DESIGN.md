---
name: Axial Engineering & Estate
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daea'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eefe'
  surface-container-high: '#e2e8f8'
  surface-container-highest: '#dce2f3'
  on-surface: '#151c27'
  on-surface-variant: '#44474d'
  inverse-surface: '#2a313d'
  inverse-on-surface: '#ebf1ff'
  outline: '#75777e'
  outline-variant: '#c5c6ce'
  surface-tint: '#4d5f7e'
  primary: '#000616'
  on-primary: '#ffffff'
  primary-container: '#0b1f3b'
  on-primary-container: '#7587a9'
  inverse-primary: '#b5c7eb'
  secondary: '#3b5f96'
  on-secondary: '#ffffff'
  secondary-container: '#9dbffd'
  on-secondary-container: '#284d84'
  tertiary: '#0b0600'
  on-tertiary: '#ffffff'
  tertiary-container: '#2a1d00'
  on-tertiary-container: '#a5822d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#b5c7eb'
  on-primary-fixed: '#071b37'
  on-primary-fixed-variant: '#364765'
  secondary-fixed: '#d6e3ff'
  secondary-fixed-dim: '#aac7ff'
  on-secondary-fixed: '#001b3e'
  on-secondary-fixed-variant: '#20467d'
  tertiary-fixed: '#ffdf9c'
  tertiary-fixed-dim: '#eac166'
  on-tertiary-fixed: '#251a00'
  on-tertiary-fixed-variant: '#5b4300'
  background: '#f9f9ff'
  on-background: '#151c27'
  surface-variant: '#dce2f3'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 64px
    fontWeight: '800'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Public Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Public Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 32px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style

This design system embodies "Architectural Luxury"—a fusion of engineering precision and high-end real estate investment. The visual language is rooted in structural integrity, utilizing a rigorous grid system inspired by blueprints and technical drawings, overlaid with a sophisticated "Investment-Ready" finish. 

The aesthetic is **Corporate / Modern** with a strong **Minimalist** foundation. It prioritizes clarity, stability, and premium quality. The user interface should feel heavy and grounded, avoiding flighty animations in favor of deliberate, rhythmic transitions. Every element serves as a testament to durability and elite craftsmanship, evoking a sense of undeniable trust and generational wealth.

## Colors

The palette is anchored by **Deep Navy (#0B1F3B)**, representing the depth of engineering expertise and corporate stability. **Royal Blue (#143D73)** is used for interactive elements and depth-building gradients. 

**Soft Gold (#C8A24A)** is the "Investment Highlight." It must be used sparingly to denote luxury, call-to-actions, or premium status indicators. **Steel Grey (#6B7280)** serves as the functional bridge, used for technical details, secondary information, and structural lines. Surfaces should remain predominantly white or ultra-light grey to maintain an airy, high-end gallery feel.

## Typography

The typographic hierarchy reinforces the engineering-meets-luxury narrative. **Hanken Grotesk** provides a sharp, contemporary, and authoritative presence for headings, echoing architectural bolding. **Public Sans** offers institutional clarity and high readability for body copy, ensuring investment details are easily digestible.

A specialized use of **JetBrains Mono** for labels and technical data points (e.g., square footage, plot coordinates, engineering specs) injects a "Blueprints" aesthetic into the digital experience, signaling precision and technical rigor.

## Layout & Spacing

This design system utilizes a **Fixed Grid** on desktop to maintain a controlled, gallery-like presentation. The layout is built on a 12-column grid with generous 32px gutters, emphasizing whitespace as a luxury commodity. 

Spacing is "Architectural"—use large vertical gaps (120px+) between major sections to allow the content to breathe. Alignment should be strict and mathematical; elements should snap to the grid to reflect engineering precision. On mobile, the grid collapses to 4 columns with increased verticality and reduced margins (20px), ensuring the luxurious feel is not lost on smaller screens.

## Elevation & Depth

Hierarchy is achieved through **Tonal Layers** and **Subtle Shadows**, rather than heavy skeuomorphism. 

1.  **Base Layer:** White or Light Grey (#F9FAFB) background.
2.  **Structural Layer:** Use 1px Steel Grey (#E5E7EB) borders to define "Zones" and "Plots" on the page, mimicking technical drawings.
3.  **Elevated Layer:** Cards and Modals use a high-spread, low-opacity shadow (Color: #0B1F3B at 4% opacity) to create a subtle "lift."
4.  **Premium Overlay:** For high-value investment CTAs, use the Navy Gradient with a Gold border to signify the highest tier of depth and importance.

## Shapes

The shape language is **Soft (0.25rem)**. While the overall feel is structural and sharp, a slight radius prevents the UI from feeling hostile or overly "brutalist." 

- **Standard Buttons & Inputs:** 4px (0.25rem) radius.
- **Investment Cards:** 8px (0.5rem) radius for a more refined, approachable feel.
- **Structural Dividers:** Always 1px height, solid Steel Grey, extending to the full width of their container.
- **Icons:** Must be linear, 2px stroke weight, with slightly rounded caps to match the UI radius.

## Components

### Buttons
- **Primary:** Deep Navy background, white text, 4px radius. On hover, transitions to the Navy Gradient.
- **Luxury Action:** Gold Gradient background with white or Navy text. Reserved for "Inquire Now" or "Purchase."
- **Secondary:** Transparent background with a 1px Navy border.

### Cards
- **Property/Project Cards:** White background, 1px grey border, 8px radius. Image at the top, followed by a JetBrains Mono label for the "Status" (e.g., UNDER CONSTRUCTION) and Hanken Grotesk for the title.

### Input Fields
- Underlined style or subtle 1px border. Focus state uses a 2px Royal Blue bottom border. Labels must use the JetBrains Mono "Label" style to feel like a form or specification sheet.

### Data Points / Chips
- Used for property specs (e.g., "5 Bedrooms"). Small, Steel Grey text with a 1px border, no background fill.

### Lists
- Use "Technical Bulletins": Instead of dots, use small 4px Navy squares or Gold arrows to maintain the architectural theme.
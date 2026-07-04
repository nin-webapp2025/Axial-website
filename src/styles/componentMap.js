/**
 * AXIAL COMPONENT MAPPING SYSTEM
 * This file tells Codex exactly what to build for each UI block
 */

export const componentMap = {
  layout: {
    Navbar: "Sticky top navigation with CTA button",
    Footer: "Company info + quick links + CTA"
  },

  home: {
    HeroSection: "Full gradient hero with CTA buttons",
    ServicesGrid: "6-card grid of services",
    AboutPreview: "Short company intro section",
    CoreValuesStrip: "Horizontal value highlights",
    ProjectsSlider: "Scrollable project cards",
    InvestmentTeaser: "Investment promotion block",
    FinalCTA: "Full width call-to-action banner"
  },

  about: {
    Hero: "Page hero with title",
    CompanyOverview: "History text block",
    DivisionsGrid: "3 structured company divisions",
    PhilosophyBlock: "Core engineering philosophy",
    Timeline: "Company history timeline"
  },

  services: {
    Hero: "Services page header",
    ServicesGrid: "Expandable service cards"
  },

  projects: {
    Hero: "Projects intro header",
    FilterBar: "Category filter buttons",
    ProjectGrid: "Image-based project cards",
    ProjectModal: "Popup details view"
  },

  investment: {
    Hero: "Investment introduction hero",
    ProcessSteps: "5-step process visualization",
    HousingModels: "Development model cards",
    RiskControl: "Security and guarantee section",
    CTA: "Investment contact call-to-action"
  },

  whyAxial: {
    Hero: "Authority positioning header",
    Differentiators: "Key advantages grid",
    TrustSection: "Credibility indicators"
  },

  contact: {
    Hero: "Contact page header",
    ContactForm: "User input form",
    CompanyInfo: "Contact details panel",
    CTA: "Final action banner"
  }
};

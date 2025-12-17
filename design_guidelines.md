# Design Guidelines: Luxury Interior Design Firm Website

## Design Approach

**Reference-Based Approach**: Drawing inspiration from high-end interior design leaders (HubInterior, Tesor Designs, Casantro, Decorpot), emphasizing visual storytelling through photography, elegant layouts, and sophisticated user experience patterns common in luxury design studios.

## Core Design Elements

### Typography System

**Heading Hierarchy:**
- H1 (Hero Headlines): Large serif font, 48-64px desktop / 32-40px mobile
- H2 (Section Titles): Serif, 36-48px desktop / 28-32px mobile  
- H3 (Subsection Headers): Sans-serif medium weight, 24-28px desktop / 20-24px mobile
- H4 (Card Titles): Sans-serif semi-bold, 18-20px

**Body Text:**
- Primary: Sans-serif regular, 16-18px with 1.6-1.8 line height
- Secondary/Captions: Sans-serif, 14-16px
- Buttons/CTAs: Sans-serif semi-bold, 16px uppercase letter-spacing

### Layout System

**Spacing Units**: Use Tailwind spacing primitives - 4, 8, 12, 16, 20, 24, 32 for consistent rhythm
- Component padding: p-8 to p-12 (mobile), p-16 to p-24 (desktop)
- Section spacing: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Container max-width: max-w-7xl for full sections, max-w-4xl for content-focused areas

## Page-Specific Layouts

### Homepage

**Hero Section (Full-width, 85vh):**
- Large background image: Stunning interior space (luxury living room or beautifully designed open-plan space)
- Centered overlay content with elegant headline + subheadline
- Primary CTA button "Get a Quote" and secondary "View Portfolio" with blurred background
- Subtle scroll indicator

**Why Choose Us Section:**
- 2x2 grid (desktop) / stacked (mobile) featuring key differentiators
- Each card: Large number/icon, bold title, descriptive text
- Statistics like "500+ Projects", "10-Year Warranty", "60-Day Delivery"

**Services Overview:**
- 3-column grid showcasing primary services
- Each card: High-quality service image, service name, brief description, "Learn More" link
- Services: Modular Interiors, Full Home Design, Luxury Interiors

**Portfolio Preview:**
- Masonry grid or 3-column layout with 6-9 featured projects
- Project images with overlay showing project type on hover
- "View Full Portfolio" CTA

**Testimonials:**
- 3-column testimonial cards with client photos, quotes, names, project details
- Clean card design with subtle shadows

**CTA Section:**
- Full-width banner with interior image background
- Centered headline "Ready to Transform Your Space?" 
- Contact form or prominent "Schedule Consultation" button

### About Us Page

**Hero:**
- Medium-height banner (60vh) with team workspace or studio image
- Page title "About [Company Name]" with mission statement

**Company Story:**
- Two-column layout: Left - compelling narrative text, Right - founder/team image
- Timeline or milestone highlights

**Team Section:**
- 3-4 column grid of designer profiles
- Each profile: Professional headshot, name, role, brief bio, specialization tags

**Values & Philosophy:**
- Icon-based 3-column grid showing core values
- Elegant icons with titles and supporting text

### Services Page

**Hero:**
- Interior service image, page title, introductory paragraph

**Service Categories:**
- Alternating left/right layout for each major service
- Service image (large, 50% width) paired with detailed description, features list, process overview
- Include: Residential Design, Commercial Spaces, Modular Solutions, Luxury Renovations

**Process Timeline:**
- Horizontal or vertical timeline showing design-to-delivery process
- 5-6 steps: Consultation → Concept → Design → Execution → Handover

**Pricing/Packages (if applicable):**
- 3-column comparison grid for service tiers
- Clear feature lists, starting prices, "Get Started" CTAs

### Portfolio Page

**Filter Navigation:**
- Horizontal pill buttons: All / Residential / Commercial / Kitchen / Bedroom / Living Spaces
- Sticky on scroll for easy access

**Project Grid:**
- Masonry or uniform 3-column grid
- High-quality project photography
- Overlay with project name, location, category on hover
- Click to open project detail modal or page

**Project Detail View:**
- Large hero image of completed space
- Project overview: Client brief, scope, timeline, square footage
- Gallery: 6-12 additional images in grid layout
- Before/after comparisons where applicable
- Related projects section

### Contact Page

**Split Layout (Desktop):**
- Left (40%): Contact information
  - Office addresses with icons
  - Phone numbers, email
  - Social media links
  - Business hours
- Right (60%): Contact form
  - Fields: Name, Email, Phone, Project Type (dropdown), Budget Range, Message
  - Large, accessible form inputs
  - "Send Message" CTA

**Map Integration:**
- Embedded map showing office location(s)
- Multiple location markers if applicable

**Alternative Contact Methods:**
- WhatsApp chat button, Schedule call link

## Component Library

### Navigation Header
- Logo left, navigation center/right, "Get Quote" button right
- Sticky with backdrop blur on scroll
- Mobile: Hamburger menu with slide-in drawer

### Buttons
- Primary: Bold, prominent with arrow/icon
- Secondary: Outlined style
- Sizes: Standard (px-8 py-4), Large (px-12 py-5)

### Cards
- Project cards: Image-dominant with minimal text overlay
- Service cards: Icon/image + title + description + link
- Testimonial cards: Quote + client info + photo
- Subtle shadows, rounded corners (rounded-lg)

### Footer
- 4-column layout: Company info, Quick Links, Services, Contact & Newsletter
- Newsletter signup with email input + subscribe button
- Social media icon links
- Copyright and legal links

## Images

**Hero Images:**
- Homepage: Luxurious modern living room with designer furniture, natural lighting
- About: Professional team photo or elegant studio workspace
- Services: Close-up of design materials/mood boards
- Portfolio: Feature project hero
- Contact: Welcoming office interior or consultation space

**Section Images:**
- Service cards: High-res interior photos specific to each service type
- Portfolio: Professional photography of completed projects
- Team photos: Professional headshots with neutral backgrounds
- Testimonial: Client photos or project images

**Quality Standards:**
- All images high-resolution, professionally shot
- Consistent color grading and lighting style
- Showcase craftsmanship and attention to detail

## Responsive Behavior

**Breakpoints:**
- Mobile: Single column, stacked layouts
- Tablet (md): 2-column grids where appropriate
- Desktop (lg+): Full multi-column layouts

**Key Adaptations:**
- Hero text scales down appropriately
- Grid columns reduce: 3→2→1 from desktop to mobile
- Navigation becomes hamburger menu on mobile
- Form inputs stack vertically on smaller screens

This design system creates a sophisticated, photography-forward website that positions the interior design firm as a premium, trustworthy choice while maintaining excellent usability across all devices.
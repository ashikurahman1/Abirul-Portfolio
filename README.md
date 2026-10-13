# Abirul Islam — Next.js portfolio

A graphic design portfolio for Abirul Islam, built in the supplied Next.js 16.4 / React 19.3 project using the installed Motion, GSAP, and Lenis packages. The orange-and-black visual direction and section order follow the original reference. Content focuses on branding, campaigns, packaging, and print.

## Run

```sh
npm run dev
```

Open http://localhost:3000. For production, run `npm run build` followed by `npm start`. The production preview for this task uses port 3001.

## Architecture

```text
src/
  app/                      App Router pages, metadata, root layout
    projects/[slug]/        Project routes, generated from portfolio data
  assets/fonts/             Self-hosted fonts loaded through next/font/local
  components/
    layout/                 Shared navigation and footer
    audio/                  Direct interaction sounds using Web Audio
    sections/               Hero, About, Services, Projects, Contact
    projects/               Reusable grouped artwork gallery and full-size image links
    ui/                     Shared buttons, section headings, accordion, contact dialog
    motion/                 Lenis provider, GSAP route scenes and disclosure motion
  lib/contact.ts            Reusable FormSubmit delivery client and input validation
  data/portfolio.ts         Typed designer profile, links, services, projects, imagery
    projects/               Project types and supplied artwork/case-study content
  styles/portfolio.css      Section styles and explicit tablet/mobile breakpoints
public/images/              Locally hosted portraits, labels, packaging and poster artwork
public/logos/               Supplied logo and brand-identity artwork
```

The page and presentation sections remain Server Components. Client Components handle interaction and animation. Shared primitives are reused across the landing page and project routes; the original HTML is not embedded or injected.

- **GSAP:** route-scoped hero and case-study entrances, scroll reveals throughout every section, progress indicator, desktop portrait/footer parallax, viewport-aware marquee, magnetic buttons, card/image hover and keyboard focus, menu and accordion transitions, and dialog entrance/exit. Contexts, event listeners, and scroll triggers are cleaned up on navigation. Reduced motion keeps the content immediately visible and removes movement; mobile omits parallax and magnetic hover.
- **Lenis:** smooth wheel and anchor scrolling; the contact dialog pauses scrolling; reduced-motion users get native wheel behavior.
- **Sound:** direct synthesized click, disclosure, navigation, and acknowledged-contact-submission cues with no switch. The first real click/tap or keyboard activation creates/resumes the audio context and plays its cue. The context persists across project navigation; hiding the tab stops active voices and suspends audio until the next interaction. Unsupported/blocked audio leaves the page usable.
- **Next.js:** App Router, server-rendered sections, typed project routes, per-project metadata, next/image, next/font/local, and a custom not-found page.

The project page passes its params promise into `ProjectDetails` behind a Suspense boundary. The shared project fallback includes navigation, a selected-work heading, a loading status, and the footer, keeping a meaningful shell available during Partial Prefetching. URL data is not awaited at the route root.

Without JavaScript, the homepage and project loading shell remain visible. Streamed project details and interactive controls, including the contact dialog, require JavaScript.

## Edit content

Edit `src/data/portfolio.ts` to change the designer profile, contact links, experience, developer credit, services, or images. The supplied email, phone, Graphixo Facebook, and Ashikur Rahman LinkedIn credit are included. About includes Art Focus — Graphic Designer with the supplied numeric dates kept verbatim.

The contact form sends inquiries directly through FormSubmit's documented AJAX endpoint using the recipient in `portfolio.email`. It keeps the visitor on the page, validates inputs, prevents duplicate submission while sending, includes a honeypot, and shows success, activation-pending, timeout, and failure states. Fields remain intact on failure. The success cue plays only after a positive provider response. It does not open Outlook or another email application.

**Activation is required:** the first real submission triggers a confirmation email to `islamabirul170@gmail.com`. The recipient must open that email (check Spam too) and confirm the form before inbox delivery is enabled. FormSubmit requires no registration or API key. No actual email or activation request was sent during automated QA; browser tests intercept the provider request. Live inbox delivery is pending the recipient's activation and a real submission. See [FormSubmit setup](https://formsubmit.co/) and [AJAX documentation](https://formsubmit.co/ajax-documentation).

Khamariko is the featured brand-identity project, using all nine supplied JPEGs in `public/logos/Khamariko/`. Its data and image captions live in `src/data/projects/khamariko.ts`. The reusable artwork gallery groups the logo analysis, campaign graphics, and application mockups, preserving every image's original proportions and offering full-size originals.

Nutrition 360 is the second selected project, using all four supplied JPEGs in `public/images/Nutrition-360/`. Its data lives in `src/data/projects/nutrition-360.ts`. A jar mockup introduces the project, followed by the complete wraparound packaging label and two campaign layouts. Every Nutrition 360 image keeps its original proportions and links to the full-size file.

Krishok Bari is the third selected project, using all four supplied JPEGs in `public/images/label-design/KrishokBari/`. Its content lives in `src/data/projects/krishok-bari.ts`. A glass-jar mockup introduces the Bengali date-palm jaggery label, followed by the full wraparound artwork and two promotional compositions. Original proportions and full-size image links are preserved throughout.

Ghorer Bazar uses four square product posters in `public/images/posters/Ghorerbazar/`, grouped around honey, two ghee compositions, and mustard oil. Mashrafi Furniture uses five images in `public/logos/Mashrafi/`: logo variations, the complete identity board, and cushion, wood, and tote-bag mockups. Pushti uses three portrait tea posters in `public/images/posters/Pushti/`, showing product-centered, playful, and person-led compositions. Each project has its own typed data file under `src/data/projects/` and its own route.

The homepage gallery is generated from the six supplied projects, with a named preview for each. The About collage also uses supplied work instead of stock industry photographs. Demo projects, concept routes, and the client-testimonial section have been removed. The project list now leads directly into Contact. Career statistics and client claims were not invented.

## Portrait

The hero contains exactly one `next/image` portrait. Its two text layers reproduce the reference's solid and outlined name treatment. The current asset is `public/images/abirul-hero-v2.png`, the supplied colour portrait with warm orange rim lighting and a transparent background. It is used without a darkening or monochrome filter.

On phones, the portrait composition and copy occupy separate rows. Service rows and project previews have dedicated mobile layouts. The About collage and project gallery support horizontal swiping without widening the page. Portrait and square project covers have appropriate maximum widths; detailed artwork keeps its original aspect ratio.

The About section pairs a full portrait-format image with the designer introduction. Set `portfolio.aboutPoster` in `src/data/portfolio.ts` to the public path of the supplied personal-branding poster after saving its file in `public/images/`. Until that asset is available, the existing portrait remains visible. The poster is displayed at its complete aspect ratio, with no cropping or color filter; mobile places the introduction below it.

## Validation

`npm run build` checks compilation, TypeScript, and route generation. The workspace's `verify-v2.mjs` checks four responsive widths, all six projects and 29 original artworks, image proportions, contact submission/link correctness, experience, navigation, accordions, reduced motion, Lenis scrolling, and the not-found page. `verify-v2-motion.mjs` exercises normal-motion interactions, route changes, scroll reveals, and the native-dialog keyboard behavior in headless Microsoft Edge.

QA images are saved to the workspace's `tmp/v2-qa/` folder; final preview images are in `output/`.

`verify-v2-sound.mjs` checks header spacing and icon routes at all four widths, measures audio output from the first interaction without a toggle, checks shared audio across routes and submission-ready cues, and checks the unavailable-audio fallback. `verify-v2-instant.mjs` checks all six project routes and unknown-project handling against the development server, including instant-navigation diagnostics. `verify-v2-contact.mjs` intercepts delivery requests to check validation, sending state, duplicate prevention, success, provider rejection, network failure, and activation-pending without sending any real email.

## Brand icons

The navigation wordmark has larger responsive type. `src/app/icon.svg` is the orange-and-cream A monogram; `scripts/generate-icons.mjs` renders matching 16/32/48/64px ICO entries and a 180px Apple icon with the already-installed Sharp package. Run `node scripts/generate-icons.mjs` after changing the SVG. Next.js adds the icon metadata links through its App Router file conventions.

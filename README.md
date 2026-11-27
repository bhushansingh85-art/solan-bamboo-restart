# Solan Bamboo Furniture — website starter

This is a **starter codebase**, not a completed production store. It includes a responsive Next.js website shell, sample catalogue entries, page routes, Firebase client initialisation and restrictive security-rule starting points.

## Requirements
- Node.js 20.9 or newer
- npm
- A Firebase project only if you want to connect authentication, Firestore and Storage

## Run locally
1. Extract the ZIP and open this folder in a terminal.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local`.
4. Add your Firebase web-app configuration and WhatsApp number to `.env.local` (only public web configuration belongs in `NEXT_PUBLIC_*` variables).
5. Run `npm run dev`.
6. Open `http://localhost:3000`.

Without Firebase values, the brochure/catalogue pages still run; Firebase exports remain `null`.

## Before public launch
- Replace sample products and emoji placeholders with accurate product data and real photographs.
- Confirm prices, dimensions, materials, finish, weight, capacity, availability and delivery terms.
- Add the real business phone, WhatsApp number, email, opening hours, map pin and social links.
- Confirm the exact districts/PIN codes served and a written delivery-fee policy.
- Add a working enquiry/order backend, cart, customer accounts, wishlist, payment reconciliation and admin dashboard. These are **not implemented** in this starter.
- Implement server-side admin authorization using Firebase custom claims set only by a trusted server/admin process. Never let a user set their own admin role.
- Add privacy policy, terms, shipping/delivery, cancellation/returns and payment terms. Have the business owner review them.
- Configure Firebase Auth providers, Firestore indexes, production security rules, Storage rules, backups and restore testing.
- Set up GA4, Search Console, sitemap, robots rules, bilingual SEO content and verified structured data.
- Test mobile layout, accessibility, forms, security and order flows before switching the live domain.

## Important security notes
- Never commit `.env.local`, service-account JSON, private keys, passwords or access tokens.
- Do not paste secrets into chat or source files.
- The included Firestore and Storage rules intentionally deny writes. Do not loosen them casually. Add narrowly scoped rules after the backend and admin authorization are implemented.
- WhatsApp click-to-chat is not automated WhatsApp notification delivery. Automated notifications require WhatsApp Business Platform or an approved provider and opt-in.

## Suggested deployment path
Use GitHub for source control and Vercel (or another supported Next.js host) for deployment. Keep the existing `solanbamboo.in` website live while testing a preview deployment. Switch DNS only after the new site, forms, security and content are verified.

## Current routes
- `/` Home
- `/about`
- `/shop`
- `/shop/[slug]`
- `/gallery`
- `/contact`
- `/faqs`

## Editing the catalogue
Edit `data/products.ts`. Product prices intentionally display “Ask for price” because verified prices were not supplied.

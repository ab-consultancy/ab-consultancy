# AB Consultancy — Hero Visual & Design Architecture Standard

## 1. Hero Artwork Standard
- **Active Asset**: `public/assets/hero_user_provided.png`
  - High-resolution transparent PNG (1024×576) featuring the young Indian corporate executive in navy suit with arms crossed and wristwatch, alongside the neoclassical white Parliament dome with waving Indian Tricolor flag and lush green trees.
  - Transparent alpha background allows the corporate sky gradient (`from-[#E6F0FE] via-[#EDF5FE] to-[#DFEDFE]`) to shine through naturally without rectangular container seams or hard borders.
  - Bottom edge of suit and trees rests flush (`-mb-0.5`) on the top border of the bottom feature strip.
  - Positioned in the right column (`lg:col-span-6`), with the executive naturally facing towards the upper-left, directing visual focus back to the headline and CTA buttons.

## 2. Layout & Spacing Rules
1. **Full-Width Canvas (No Card)**:
   - Full viewport bleed (`w-full min-h-screen flex flex-col justify-between`).
   - Outer container spans `max-w-[1440px] px-6 sm:px-10 lg:px-12`.
2. **Top Header**:
   - Monogram AB Logo + "AB Consultancy" + "Grow • Comply • Expand"
   - Floating capsule navigation pill (`Home` with active blue indicator, `Services ⌵`, `Pages ⌵`, `About Us`, `Contact Us`)
   - `[ 📅 Book Appointment → ]` CTA button
3. **Left Hero Content**:
   - `[ 🏛 Government Scheme & Business Support ]` eyebrow badge with accent line.
   - 3-Line Headline (`text-4xl sm:text-5xl lg:text-[54px] xl:text-[60px] font-black leading-[1.06]`):
     - `Your Business.`
     - `Your Opportunities.`
     - `Our Guidance.` (in `#0062FF`, without underline stroke, ending with clean period)
   - 3-line balanced subtitle copy
   - Dual CTAs: `[ Check Your Eligibility  (→) ]` and `[ 💬 Talk to Our Consultant ]`
   - Micro-Trust Checks: `✓ Zero Upfront Eligibility Fee`, `✓ Direct Ex-Bank Credit Appraisal`, `✓ 100% RBI & Gazette Compliant`
4. **Bottom Integrated Feature Strip**:
   - 5 evenly-spaced columns separated by hairline dividers:
     1. `Central & State Subsidies`
     2. `Collateral-Free Loan Support`
     3. `Verified Eligibility Check`
     4. `Bank-Compliant DPR`
     5. `End-to-End Filing Support`
   - Dual 4×6 cyan dot matrices on far-left and far-right.

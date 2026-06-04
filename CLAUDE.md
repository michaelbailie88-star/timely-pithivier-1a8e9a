# AdaptED × CampED Project Documentation

## Project Overview
AdaptED × CampED is a unified activity dashboard for educators and camp counselors. It features multiple modules (AdaptED, CampED, TeenagED, RegulatED, SupplyED) accessible via a single interface.

## Tech Stack
- **Architecture**: Zero-framework, monolithic static HTML/CSS/JS.
- **Styling**: Vanilla CSS (CSS Variables for branding/theming).
- **Icons**: Emoji-based (Standardized Professional Emojis).
- **Data**: In-memory JavaScript arrays/objects (Constants like `CATS`, `A_BASE`, `A_EXTRA`).

## Key Files
- `app.html`: The main application dashboard. Contains all logic, styles, and data.
- `elite.css`: External stylesheet for "Elite" tier aesthetics and shared UI components.
- `index.html`: Landing page for the product.

## Development Conventions
- **Elite Aesthetic**: Focus on high-end, professional UI with smooth transitions and premium typography (Fraunces & Inter).
- **Neurodiversity Focus**: Content should include "Elite Tips" for trauma-informed care, neurodiversity, and inclusive education.
- **Category Management**: Categories are mapped to modules via the `CATS` array.
- **Elite Categories**: `trauma`, `neurodiversity`, `outdoorleadership`, `indigenous`, `execfunction`, `digitalcitizen`, `advocacy`, `restorative`, `placebased`, `entrepreneur`.
- **Emoji Mapping**: Use the standardized "Elite" emoji set for professional appearance:
  - 📐 (math), 👥 (social), 🔬 (steam), 🍳 (cooking), 🕯️ (yoga), 🌿 (gardening), 🌐 (multicultural), 🖋️ (language), 🗣️ (phonics), 🌀 (patterns), 📑 (curriculum), 📈 (assessment), 🏛️ (history), 📍 (geography), ⌨️ (coding), 💹 (money), 📸 (photography), 🔍 (spelling), ⏳ (time), 🏠 (family), 📁 (iep), 🎓 (staff), 🚍 (transport), 🦗 (bugs), 🎨 (colours), 🏘️ (community), 🦴 (dinosaurs), 🐾 (animals), 🐕 (pets), 🪐 (space), 🌾 (farms), 👐 (signlanguage).
- **Module Navigation**: Toggling between modules is handled by the `setBrand` function, which updates global CSS classes and filters content.

## Workflow
1.  **Content Updates**: New activities should be added to `A_EXTRA` with appropriate metadata (ID, Brand, Category, Tier, Age, etc.).
2.  **Branding**: Use the `brandToggle` UI to switch between sub-products. Ensure new modules (like SupplyED) are integrated into the CSS and JS logic.
3.  **Deployment**: Static site deployed on Netlify.

# 🌍 ExploreWorld Travels Website

An interactive **multipage travel agency website** built with HTML, CSS, and JavaScript. The site dynamically renders tour packages with pricing calculations, features a live booking estimator, showcases an image gallery with modals and layout toggles, and maintains consistent navigation across pages.

---

## 📑 Pages Included

- **Home (`index.html`)**
  - Introduction to the travel agency
  - Banner image for branding
  - Smooth scrolling and active navigation highlighting

- **Packages (`packages.html`)**
  - Tour packages dynamically rendered in a table from a JavaScript array
    - Columns: ID, Destination, Duration (Days), Base Price, Season, Final Price
  - Final Price computed in real-time using seasonal multipliers (e.g., high season: +30%, mid: +15%, low: base)

- **Booking (`booking.html`)**
  - Interactive booking form with live price updates
    - Fields: Full Name, Check-in/Check-out Dates, Guests (number input), Package Selection (dropdown), Promo Code
  - Computes estimated total on input changes using date math for nights, guest multipliers (proportional scaling), and promo discounts (e.g., "EARLYBIRD" for -10%)
  - Validation disables submit button for invalid dates or missing fields
  - Displays total with breakdown (e.g., nights, guests, package name)

- **Gallery (`gallery.html`)**
  - Dynamic image grid or list view of travel destinations, generated from a JavaScript array
  - Thumbnails load small images; clicking opens a modal with full/large image versions (using data-large attributes)
  - Toggle between grid and list layouts via buttons
  - Captions and alt text pulled from image object properties

- **About Us (`about.html`)**
  - Agency introduction and mission
  - Team section with member profiles
  - Social media links
  - Active navigation and consistent styling

---

## ✨ Features

✔️ Dynamic content generation: Packages table and gallery thumbnails looped from JavaScript arrays/objects  
✔️ Interactive pricing: Real-time calculations with operators, if/switch statements for seasons, guests, and promos  
✔️ Form validation and live updates: Date difference for nights, error handling, disabled submit on invalid input  
✔️ Gallery modals: Read/modify data-* attributes to switch from thumbnail to large images on click  
✔️ Navigation enhancements: Active page highlighting via JS (location.pathname matching)  
✔️ Layout toggles: JS-driven CSS class changes for gallery views (grid/list)  
✔️ Responsive design: Consistent header, nav, and smooth scrolling across pages  
✔️ Promo code handling: Switch/case for discounts (e.g., EARLYBIRD reduces total by 10%)  
✔️ Guest scaling: Price adjusts based on number of guests (linear from base for 2)

---

## 🛠️ Technologies Used

- **HTML5** – For semantic structure and forms  
- **CSS3** – For styling, layouts, modals, and responsive design  
- **JavaScript (ES6+)** – For dynamic rendering (loops, arrays/objects), event handling, pricing logic (operators, control flow: if/switch), DOM manipulation, and validation

---

## 📂 Project Structure

```
├── index.html        # Home page
├── packages.html     # Dynamic tour packages table
├── booking.html      # Interactive booking form with estimator
├── gallery.html      # Dynamic image gallery with modals and toggles
├── about.html        # About Us / Contact page
├── images/           # Folder for thumbnail, large images, banners, and team photos
└── README.md         # Project documentation
```

---

To run: Open any HTML file in a web browser or use a local server (e.g., Live Server in VS Code) for full interactivity. Ensure images folder exists with matching file names from the JS arrays.

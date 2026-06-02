# Dashboard UI

A responsive sales analytics dashboard built with Vite, JavaScript, and CSS.

## Tech Stack

- Vite
- JavaScript
- HTML
- CSS
- Tailwind CSS
- PostCSS


# deploy link <a href="https://dapper-baklava-4ac5a2.netlify.app/"> click here </a>


## Project Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Build for production:

   ```bash
   npm run build
   ```

4. Preview the production build:

   ```bash
   npm run preview
   ```

## Folder Structure

```text
my-app/
├── public/
│   ├── favicon.svg
│   ├── profile-avatar.svg
│   └── sales-map.png
├── src/
│   ├── components/
│   │   └── dashboard.js
│   ├── data/
│   │   └── dashboardData.js
│   ├── utils/
│   │   └── icon.js
│   ├── main.js
│   └── style.css
├── index.html
├── netlify.toml
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Project Architecture

The project is a Vite single-page dashboard. The app is intentionally split into small modules so the UI, reusable data, and helper logic are easier to maintain.

### `src/main.js`

This is the application entry file. It imports the global stylesheet, renders the dashboard HTML, and handles the sidebar collapse click behavior.

Why it is used:

- Keeps app startup logic in one place.
- Avoids putting large dashboard markup directly in the entry file.
- Adds interactive behavior after the dashboard is rendered.

### `src/components/dashboard.js`

This file contains the dashboard UI template. It is split into small render functions such as sidebar, topbar, sales cards, charts, products table, map card, and service chart.

Why it is used:

- Keeps all dashboard sections organized.
- Makes each UI section easier to update without searching through one huge file.
- Allows chart/card markup to stay separate from data and helper functions.

### `src/data/dashboardData.js`

This file stores static dashboard data like navigation items, sales cards, product rows, revenue chart values, target chart values, and service chart values.

Why it is used:

- Keeps repeated content out of the UI markup.
- Makes future data changes faster and cleaner.
- Helps separate "what to show" from "how to show it".

### `src/utils/icon.js`

This file stores reusable SVG icon paths and exposes the `icon()` helper.

Why it is used:

- Prevents duplicate SVG code in the dashboard component.
- Keeps icons consistent across sidebar, buttons, and cards.
- Makes it easy to add or update icons from one place.

### `src/style.css`

This file contains all dashboard styling, layout rules, responsive behavior, chart styling, card styling, and the sidebar collapsed state.

Why it is used:

- Keeps visual design centralized.
- Supports responsive layouts with media queries.
- Controls the dashboard card grid, sidebar, header, charts, and mobile behavior.

### `public/`

The public folder contains assets that are served directly by Vite.

Why it is used:

- `favicon.svg` is used by the browser tab.
- `profile-avatar.svg` is used as the dummy profile image.
- `sales-map.png` is used for the map card because the original map is closer to a bitmap graphic than a hand-coded SVG.

## Component Breakdown

- `renderSidebar()`: Builds the left navigation, brand area, pro card, and sidebar collapse button.
- `renderTopbar()`: Builds the page heading, search input, language selector, notification button, and profile menu.
- `renderSalesCard()`: Shows the today's sales summary stat cards.
- `renderVisitorInsights()`: Shows the multi-line visitor chart with month labels and legend.
- `renderRevenueCard()`: Shows online/offline revenue bars by weekday.
- `renderSatisfactionCard()`: Shows customer satisfaction area lines and monthly values.
- `renderTargetCard()`: Shows target vs reality bars and sales summary.
- `renderProductsCard()`: Shows the top products table with progress bars.
- `renderMapCard()`: Shows the country sales mapping image.
- `renderServiceCard()`: Shows the volume vs service level stacked bars.

## Responsive Behavior

- Desktop: Uses a full sidebar with a 12-column dashboard card grid.
- Tablet: Shrinks the sidebar to icon-only mode and changes dashboard cards to a two-column layout.
- Mobile: Stacks the dashboard into one column, converts the sidebar into a horizontal icon navigation, and reduces header/chart spacing so content stays readable.
- Small mobile: Sales cards stack vertically, legends wrap cleanly, profile text is hidden, and wide tables become horizontally scrollable.

## Netlify Deployment

The project includes `netlify.toml` so Netlify uses the correct production setup:

- Build command: `npm run build`
- Publish directory: `dist`
- Redirect rule: sends all routes to `index.html`

If deploying manually, upload the generated `dist` folder, not the project source folder.

## Features Implemented

- Sidebar navigation with active dashboard state.
- Sidebar collapse/shrink interaction.
- Top dashboard header with search, language selector, notifications, and profile controls.
- Today's sales summary cards.
- Visitor insights line chart with legend.
- Total revenue bar chart.
- Customer satisfaction area chart with month comparison metrics.
- Target vs Reality bar chart with sales summary.
- Top products table with popularity progress bars.
- Sales mapping by country visual map.
- Volume vs Service Level stacked bar chart.
- Responsive layout for desktop, tablet, and mobile screens.

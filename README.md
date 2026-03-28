# My Portfolio

A full-stack-ready personal portfolio built with React, Vite, and Tailwind CSS. It consumes a backend API for profile data and includes a protected admin panel to manage projects, skills, achievements, and resume uploads.

## Highlights
- Modern React 19 + Vite 8 setup with fast dev server and optimized builds
- Dynamic content sourced from a backend API (single `/api/portfolio` endpoint)
- Protected admin panel using Clerk authentication
- Clean, modular layout with reusable components and feature-based pages
- Toast feedback for form actions and user flows

## Tech Stack
- React 19, React Router
- Vite 8
- Tailwind CSS + PostCSS
- Clerk (authentication)
- React Hot Toast

## Project Structure
```
my-portfolio/
  context/                 # Global portfolio data provider
  public/                  # Static assets
  src/
    assets/
    components/
    layouts/
    pages/
      Admin/               # Admin forms (profile, projects, skills, etc.)
    App.jsx                # Routes and layout
    main.jsx               # Providers (Clerk, PortfolioContext)
  .env                     # Local environment values (do not commit secrets)
```

## Routes
- `/` Home
- `/about` About
- `/skills` Skills
- `/projects` Projects
- `/achievements` Achievements
- `/coding` Coding Profiles
- `/contact` Contact
- `/admin` Admin Panel (protected)

## Admin Panel
The admin panel is available at `/admin` and is protected with Clerk. Access is currently limited to a specific email address defined in `src/pages/Admin/MainForm.jsx`. Update this value to your own email before deploying.

## Environment Variables
Create a `.env` file in the project root:

```
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_BACKEND_URL=http://localhost:5000
```

- `VITE_CLERK_PUBLISHABLE_KEY` is required to initialize Clerk.
- `VITE_BACKEND_URL` should point to your backend service. The app expects a `GET /api/portfolio` endpoint and related admin endpoints used by the forms.

## Getting Started
```
npm install
npm run dev
```

Then open the dev server URL printed in the terminal.

## Build and Preview
```
npm run build
npm run preview
```

## Notes for Backend Integration
The frontend fetches portfolio data via `GET /api/portfolio` (configured in `context/PortfolioContext.jsx`). The admin forms post to the backend using the same base URL. Make sure your backend implements the required routes and CORS is enabled for the frontend origin.

## Customization Checklist
- Update admin email in `src/pages/Admin/MainForm.jsx`
- Replace placeholder content in components and page sections
- Add your real projects, skills, and achievements via the admin panel
- Update metadata, title, and favicon in `index.html`

## Scripts
- `npm run dev` Start development server
- `npm run build` Create production build
- `npm run preview` Preview production build
- `npm run lint` Run ESLint

## License
This project is for personal portfolio use. If you want to reuse it commercially, add your own license and attribution policy.

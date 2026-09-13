# Dev Stack

Dev Stack is a small React + TypeScript web app where you can browse a
catalog of frontend, backend, database, and tooling technologies, and build
your own personal "stack" by adding the ones you plan to use in your next
project.

## About the project

Every technology is shown as a card with its logo, category, difficulty
level, a star rating, and a short description. Clicking **Add to Stack**
saves that technology into a sidebar panel, where you can review your
picks, remove one at a time, or clear the whole list with **Remove All**.
The whole UI is built around one shared teal → blue → violet gradient
(`#28BDB4 → #6388D2 → #9B3DDA`), defined once and reused for the brand
name, hero heading, and primary buttons.

## Technology used

- **React 18** with **TypeScript** for the UI and type safety
- **Vite** as the build tool and dev server
- **Tailwind CSS** for styling
- **React-Toastify** for add / remove / duplicate notifications

## Features

1. **Live tech catalog loaded from JSON** — technology data lives in a JSON
   file and is loaded on app start, not hardcoded inside any component,
   with a real loading state while it "fetches."
2. **Personal stack builder** — add technologies to a sidebar, block
   duplicate adds with a warning toast, remove single items, or clear the
   whole stack at once. Cards in the grid get a highlighted border while
   they are in your stack.
3. **Fully responsive, single-source theme** — a mobile hamburger navbar,
   a 1 / 2 / 3-column card grid depending on screen size, and one shared
   gradient value that themes the brand name, hero heading, and buttons.



- **GitHub Repository:** _add your repo link here_
- **Live Site:** _add your Vercel link here_

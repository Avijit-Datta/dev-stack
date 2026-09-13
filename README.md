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

## React questions

**i. What is JSX, and why is it used in React?**
JSX is a syntax extension that lets us write HTML-like markup directly
inside JavaScript/TypeScript files. It's used in React because it makes
component structure easy to read and write — instead of calling
`React.createElement()` by hand, we write markup that gets compiled into
those calls for us.

**ii. What is the difference between props and state?**
Props are values passed **into** a component from its parent — the
component receiving them cannot change them. State is data that a
component **owns and manages itself**, and can update over time (for
example, with `useState`), which causes the component to re-render.

**iii. What does the `useState` hook do, and where did you use it in this project?**
`useState` lets a function component hold and update its own local data
between renders. In this project it's used in `App.tsx` to store the list
of technologies loaded from the JSON file, the technologies the user has
added to their stack, and the loading flag — and inside `Navbar` to track
whether the mobile menu is open.

**iv. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` runs side effects — code that happens *after* a component
renders, like fetching data or setting a timer. It's used in `App.tsx` to
load the technology data once when the app first loads: it starts a short
delay to represent a "fetch," then updates state with the result, so the
loading spinner has something real to show before the data is ready.

**v. Why does every item in a `.map()` list need a unique `key` prop?**
React uses the `key` to tell list items apart between renders, so it can
figure out exactly which item was added, removed, or reordered instead of
re-rendering the entire list. Without a stable, unique key, React can mix
up items and update the wrong DOM nodes, causing bugs and losing internal
state (like input focus) on the wrong element.

**vi. What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering means showing different UI depending on some
condition, instead of always rendering the same markup. In this project,
`YourStack.tsx` checks `stack.length === 0`: if it's true, it renders the
"No technologies selected yet" empty state; otherwise, it renders the
list of added technologies and the Remove All button.

**vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
A parent passes data down to a child through **props** — for example,
`App.tsx` passes each `technology` object down to `TechnologyCard`. For a
child to send information back up, the parent passes a **function** down
as a prop, and the child calls that function when something happens. In
this project, `App.tsx` passes `handleAddToStack` down to `TechnologyCard`
as the `onAdd` prop, and `handleRemoveFromStack` / `handleRemoveAll` down
to `YourStack`; clicking a button in the child calls that function, which
updates the state back in `App.tsx`.

---

- **GitHub Repository:** _add your repo link here_
- **Live Site:** _add your Vercel link here_

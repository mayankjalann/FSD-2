# React Portfolio Assignment (Assignment 2)

This is a React-based Single Page Application (SPA) port of the static "Indie Zine" portfolio, fulfilling the requirements for Assignment 2.

## Setup and Run Instructions
1. Navigate to the project directory: `cd react-portfolio`
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Build for production: `npm run build`

## Component Tree & State-Lifting Decisions

**Component Tree:**
- `ThemeContext` (Provides `isDarkMode` and `toggleTheme` to the entire app)
  - `App` (Main routing shell)
    - `Navbar` (Shared layout, contains Theme Toggle button)
    - `Routes` (react-router-dom)
      - `Home` (Simulates loading sequence)
      - `About` (Static biography + local state for photo upload)
      - `Projects` (Renders `ProjectList`)
        - `ProjectList` (Maps over projects array)
          - `ProjectCard` (Renders individual project, has scoped local state for expanding details)
      - `ProjectDetail` (Dynamic route using `useParams`)
      - `Contact` (Controlled form with validation)
    - `Footer` (Shared layout)

**State-Lifting Decisions:**
The most significant state-lifting decision was moving the `isDarkMode` state to a top-level `ThemeContext`. Since the `Navbar` needs to toggle the state, and the root `document.body` needs to be aware of the state to apply global CSS variables, lifting it globally was necessary to avoid drilling the theme state through every component.

**Prop Drilling (2-level requirement):**
To satisfy the prop drilling requirement, the `Projects` page component retrieves the raw array of projects from `src/data/projects.js`. It passes this array down as a prop to `ProjectList`. `ProjectList` then iterates over the array and passes individual `project` objects down as a prop to `ProjectCard`.

## useEffect Hooks Implemented

1. **`ThemeContext.jsx` (Theme Persistence & DOM Manipulation):**
   - **Why:** Used to persist the dark mode preference to `localStorage` and to add/remove the `.dark-theme` class on the `document.body`. 
   - **Dependencies:** `[isDarkMode]` (runs whenever the theme changes).

2. **`Home.jsx` (Loading Sequence):**
   - **Why:** Used to simulate a brief loading sequence when the component mounts. Uses `setTimeout` to delay showing the main content.
   - **Dependencies:** `[]` (runs only on initial mount). Includes a cleanup function (`clearTimeout(timer)`) to prevent memory leaks if the user navigates away before the timeout completes.

## Note on Screen Recording
*As per deliverables, you must create a 1-2 minute screen recording demonstrating the theme toggle, navigation, dynamic project routing, and contact form validation before submission.*
